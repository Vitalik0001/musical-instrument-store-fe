import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface SignUpData {
    email: string;
    username: string;
    password: string;
}

interface LoginData {
    username: string;
    password: string;
}

interface AuthError {
    message: string;
}

interface AuthState {
    loading: boolean;
    error: AuthError | null;
    isAuth: boolean;
}

const URL = import.meta.env.VITE_URL;

export const signUp = createAsyncThunk<
    void,
    SignUpData,
    { rejectValue: AuthError }
>("auth/signUp", async ({ email, password, username }, { rejectWithValue }) => {
    try {
        await axios.post(`${URL}3000/api/auth/sign-up`, {
            email,
            username,
            password,
        });
    } catch (error) {
        const err = error as AxiosError<{ message?: string }>;
        const message = err.response?.data?.message || "Помилка при реєстрації";

        return rejectWithValue({ message });
    }
});

export const login = createAsyncThunk<
    string,
    LoginData,
    { rejectValue: AuthError }
>("auth/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${URL}3000/api/auth/login`, {
            username,
            password,
        });

        const token = response.data.token;
        localStorage.setItem("token", token);
        return token;
    } catch (error) {
        const err = error as AxiosError<{ message?: string }>;
        const message = err.response?.data?.message || "Помилка при вході";

        return rejectWithValue({ message });
    }
});

export const getUser = createAsyncThunk<void, void, { rejectValue: AuthError }>(
    "auth/getUser",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("Немає токену");

            const response = await axios.get(`${URL}3000/api/users/profile`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            console.log(response.data);
        } catch (error) {
            const err = error as AxiosError<{ message?: string }>;
            const message =
                err.response?.data?.message || "Помилка при отриманні профілю";

            return rejectWithValue({ message });
        }
    }
);

const initialState: AuthState = {
    loading: false,
    error: null,
    isAuth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.isAuth = false;
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                }
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuth = false;
            })
            .addCase(login.fulfilled, (state) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                }
                state.isAuth = false;
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                }
                state.isAuth = false;
            });
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;

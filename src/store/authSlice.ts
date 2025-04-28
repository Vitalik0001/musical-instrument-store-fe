import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface SignUpData {
    email: string;
    password: string;
    name: string;
}

interface LoginData {
    email: string;
    password: string;
}

const URL = import.meta.env.VITE_URL;

export const signUp = createAsyncThunk<void, SignUpData>(
    "auth/signUp",
    async ({ email, password, name }, { rejectWithValue }) => {
        try {
            await axios.post(`${URL}3000/api/auth/sign-up`, {
                email,
                password,
                name,
            });
        } catch (error) {
            const err = error as AxiosError;

            console.error("Помилка при реєстрації:", err);

            return rejectWithValue(
                err.response?.data || "Помилка при реєстрації"
            );
        }
    }
);

export const login = createAsyncThunk<void, LoginData>(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${URL}3000/api/auth/login`, {
                email,
                password,
            });

            const token = response.data.token;

            localStorage.setItem("token", token);

            return token;
        } catch (error) {
            const err = error as AxiosError;

            console.error("Помилка при вході:", error);

            return rejectWithValue(err.response?.data || "Помилка при вході");
        }
    }
);

export const getUser = createAsyncThunk<void, void>(
    "auth/getUser",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                throw new Error("Немає токену");
            }

            const response = await axios.get(`${URL}3000/api/users/profile`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            console.log(response.data);
        } catch (error) {
            const err = error as AxiosError;

            console.error("Помилка при отриманні профілю:", error);

            return rejectWithValue(
                err.response?.data || "Помилка при отриманні профілю:"
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        error: null as string | null,
        isAuth: false,
    },
    reducers: {
        logout(state) {
            state.isAuth = false;
        },
        setAuth(state, action) {
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
                state.error = action.payload as string;
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
                state.error = action.payload as string;
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
                state.error = action.payload as string;
                state.isAuth = false;
            });
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;

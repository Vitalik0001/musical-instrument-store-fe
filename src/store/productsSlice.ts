import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    title: string;
    color: string;
    type: string;
    price: string;
    productPage?: {
        youtubeLink: string,
        audio: string,
        generalImages: string[]
    }
}

interface ProductsState {
    viewedProducts: Product[];
    selectedProducts: Product[];
}

const initialState: ProductsState = {
    viewedProducts: [],
    selectedProducts: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addViewedProduct(state, action: PayloadAction<Product>) {
            const product = action.payload;
            state.viewedProducts.push(product);
        },
        addSelectedProduct(state, action: PayloadAction<Product>) {
            const product = action.payload;
            if (!state.selectedProducts.find((p) => p.id === product.id)) {
                state.selectedProducts.push(product);
            }
        },
        removeSelectedProduct(state, action: PayloadAction<number>) {
            state.selectedProducts = state.selectedProducts.filter(
                (product) => product.id !== action.payload
            );
        },
        clearAllData(state) {
            state.viewedProducts = [];
            state.selectedProducts = [];
        },
    },
});

export const {
    addViewedProduct,
    addSelectedProduct,
    removeSelectedProduct,
    clearAllData,
} = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleUserSlice = createAsyncThunk(
    'singleUser',
    async(id) => {
        try {
            const {data} = await axios.get(`/api/users/${id}`);
            return data;
        } catch (err){
            console.log(err)
        }
    }
);

const singleUserSlice = createSlice({
    name: 'singleUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUserSlice.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectSingleUser = (state) => {
    return state.singleUserSlice;
};

export default singleUserSlice.reducer
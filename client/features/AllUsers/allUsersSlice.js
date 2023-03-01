import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchAllUsersAsync = createAsyncThunk('allusers', async () => {
    try {
        const {data} = await axios.get('/api/users');
        return data;
    } catch (err) {
        console.log(err)
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
            return action.payload
        });
    },
});

export const selectUsers = (state) => {
    return state.users
};

export default usersSlice.reducer

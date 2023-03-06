import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
    "single user",
    async(id) => {
        try {
          const token = window.localStorage.getItem("token");
          if (token) {
            const { data } = await axios.get(`/api/users/${id}`, {headers: {authorization: token}});
            return data;
          }
        } catch (err){
            console.log(err);
        }
    }
);

export const updateUser = createAsyncThunk("edit user", async({id, username, password, firstName, lastName, email}) => {
  try {
    const {data} = await axios.put(`/api/users/${id}`,{
      username, password, firstName, lastName, email
    });
    return data;
  } catch(err) {
    console.log(err);
  }
});

// export const singleUserOrders = createAsyncThunk(
//   "userOrders",
//   async (id) => {
//     try {
//       const token = window.localStorage.getItem("token");
//       if (token) {
//         const { data } = await axios.get(`/api/users/${id}`, {headers: {authorization: token}});
//         return data;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const deleteUserAsync = createAsyncThunk(
//     "deleteUser",
//     async (id) => {
//       try {
//         const { data } = await axios.delete(`/api/users/${id}`);
//         console.log(data);
//         return data;
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   );
//   export const editUserAsync = createAsyncThunk(
//     "editUser",
//     async ({ id, firstName, lastName, email, username, password }) => {
//       const { data } = await axios.put(`/api/users/${id}`, {
//         id,
//         firstName,
//         lastName,
//         email,
//         username,
//         password,
//       });
//       return data;
//     }
//   );

//   export const unregisterUserAsync = createAsyncThunk(
//     "unregisterUser",
//     async (id) => {
//         const { data } = await axios.put(`/api/users/${id}/unregister`, {
//           // campusId: null,
//         });
//         console.log(data);
//         return data;

//       }
//   );

export const singleUserSlice = createSlice({
    name: 'singleUser',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          return action.payload;
        })
        // .addCase(singleUserOrders.fulfilled, (state, action) => {
        //   return action.payload;
        // });
        // builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
        //     return {};
        //   });
        //   builder.addCase(unregisterUserAsync.fulfilled, (state, action) => {
        //     return action.payload;
        //   });

    },
});

export const selectSingleUser = (state) => {
    return state.singleUser;
};

export default singleUserSlice.reducer;
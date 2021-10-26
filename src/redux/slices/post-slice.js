import {createSlice} from '@reduxjs/toolkit';



const initialState = {
  posts: [],
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers:{
      UPDATE_POSTS(state, action) {
        state.posts = action.payload;
      }
  }
})

export default postSlice;

export const actions = postSlice.actions;
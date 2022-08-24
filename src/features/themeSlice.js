import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value:  ""
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        changeTheme : (state,action) => {
        state.value = action.payload
        },
       
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
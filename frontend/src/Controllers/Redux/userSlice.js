import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: [{}],
    reducers: {
        getUsers: state => {
            state.push({name: 'Justin Farris'})
            state.push({name: 'Silly Goose'})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;
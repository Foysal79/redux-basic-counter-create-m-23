import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type counterType = {
    count : number
}

const initialState : counterType = {
    count : 0,
}
export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.count = state.count + 1;
        },
        decrement : (state) => {
            state.count = state.count - 1;
        },
        incrementByAmount : (state, action : PayloadAction<number>) => {
            state.count += action.payload;
        }
    }
})


export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
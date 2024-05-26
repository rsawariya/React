import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
    counter: number,
    increment: () => void,
    decrement: () => void,
}

const initialState: IinitialState = {
    counter: 0,
    increment: () => { },
    decrement: () => { }
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: IinitialState) => {
            state.counter += 1;
        },
        decrement: (state: IinitialState) => {
            state.counter -= 1;
        }
    }
})

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}; 

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { return { ...state, value: state.value + 1 } },
        decrement: (state) => { return { ...state, value: state.value - 1 } },
        reset: () => initialState,
        incrementByCount: {
            reducer(state, action: PayloadAction<number>) {
                return { ...state, value: state.value + action.payload };
            },
            prepare(countAmount: number) {
                if (countAmount > 10) {
                    alert("Count should be less than 10");
                    return { payload: 0 };
                } else {
                    return { payload: countAmount };
                }
            }
        }
    }
});

export const { increment: counterIncrement, decrement: counterDecrement, reset: counterReset, incrementByCount: counterIncrementByCount } = counterSlice.actions;

export default counterSlice.reducer;

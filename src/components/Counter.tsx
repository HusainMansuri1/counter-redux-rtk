import { FormEvent, useRef } from "react";

import { useCounterDispatch, useCounterSelector } from "@redux-app/hooks";
import {
    counterDecrement,
    counterIncrement,
    counterReset,
    counterIncrementByCount,
} from "@redux-features/counterSlice";

const Counter = () => {
    const couneterState = useCounterSelector((state) => state.counter);
    const dispatch = useCounterDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current?.value) {
            dispatch(counterIncrementByCount(Number(inputRef.current.value)));
            inputRef.current.value = "";
        }
    };

    return (
        <div>
            <h1>Count: {couneterState.value}</h1>

            <div>
                <button onClick={() => dispatch(counterIncrement())}>Increment</button> {"   "}
                <button onClick={() => dispatch(counterDecrement())}>Decrement</button> {"   "}
                <button onClick={() => dispatch(counterReset())}>Reset</button> {"   "}
            </div>
            <br />

            <form onSubmit={onSubmit}>
                <input type="number" ref={inputRef} required />{" "}
                <button type="submit">Increment</button>
            </form>
        </div>
    );
};

export default Counter;

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import type { TCounterDispatch, TCounterState } from "./store";

export const useCounterDispatch = useDispatch<TCounterDispatch>;
export const useCounterSelector: TypedUseSelectorHook<TCounterState> = useSelector;


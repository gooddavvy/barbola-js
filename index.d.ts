/* Imports */
import { Component, createSignal } from "solid-js";
import type { Context } from "solid-js";

/* Interfaces and Types */
export declare type Element<P = {}> = (props: P) => Component;
export declare type DOMElement = Element;
export declare type Accessor<T> = () => T;
export declare type Setter<T> = (newVal: any) => (undefined extends T ? () => undefined : {}) & (<U extends T>(value: (prev: T) => U) => U) & (<U extends T>(value: Exclude<U, Function>) => U) & (<U extends T>(value: Exclude<U, Function> | ((prev: T) => U)) => U);
export declare type State<T> = [get: Accessor<T>, set: Setter<T>];
export declare type MemoName = string;
export declare type Memo = any;
export declare type DataContext<T> = Context<T>;

/* Custom Hooks/Functions */
export declare function createState<T>(value: T): State<T>;
export declare function onMount(fn: () => void): () => void;
export declare function createMemo<T>(memoName: string, memoValue: T): () => void;
export declare function useMemo(memoName: string): () => Memo;
export declare function getMemo(memoName: string): () => Memo[];
export declare function createContext<T>(defaultValue?: T): Context<T | undefined>;

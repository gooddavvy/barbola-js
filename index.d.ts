// Imports
import { Component, createSignal } from "solid-js";

// Interfaces and Types
export declare type Element<P = {}> = (props: P) => Component;
export declare type Accessor<T> = () => T;
export declare type Setter<T> = (newVal: any) => (undefined extends T ? () => undefined : {}) & (<U extends T>(value: (prev: T) => U) => U) & (<U extends T>(value: Exclude<U, Function>) => U) & (<U extends T>(value: Exclude<U, Function> | ((prev: T) => U)) => U);
export declare type State<T> = [get: Accessor<T>, set: Setter<T>];

// Custom Hooks
export declare function createState<T>(value: T): State<T>;
export declare function onMount(fn: () => void): () => void;
import { UnionPop } from "./12-UnionPop";

type UnionToTuple<T, TT = T, R extends any[] = []> = [T] extends [R[number]]
  ? R
  : UnionToTuple<T, Exclude<TT, UnionPop<TT>>, [UnionPop<TT>, ...R]>;

type a = UnionToTuple<1 | 2 | 3>; // [1,2,3]
type b = UnionToTuple<1 | string | boolean>; // [1,string,boolean]
type c = UnionToTuple<any>; // [any]

type Q1 = UnionToTuple<string | number | symbol>; // [symbol,number,string]
type Q2 = UnionToTuple<string | number | symbol | boolean>; // [boolean,symbol,number,string]

type Q3 = UnionToTuple<string | number | symbol | boolean | [boolean]>; // [boolean,[boolean],symbol,number,string]

// type a1 = 1 | 2 | 3;
// type a2 = [1, 2, 3];
// type aa = [a1] extends [a2[number]] ? true : false;

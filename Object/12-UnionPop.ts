export {};
import { IsAny } from "./8-IsAny";
export type UnionPop<U> = IsAny<U> extends true
  ? any
  : boolean extends U
  ? boolean
  : (
      (U extends U ? (fn: (u: U) => any) => any : never) extends (
        u: infer f1
      ) => any
        ? f1
        : never
    ) extends (f2: infer F2) => any
  ? F2
  : never;

type a = 1 | 2 | 3;
type b = UnionPop<a>; // 3

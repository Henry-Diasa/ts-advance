// 使用 [T] 避免传入的是联合类型导致类型分布
// unknown 只能赋值给 any或者unknown
// any可以赋值给string，但是unknown不可以赋值给string
export {};
export type IsAny<T> = [unknown] extends [T]
  ? [T] extends [string]
    ? true
    : false
  : false;

type A = IsAny<string>; // false
type B = IsAny<any>; // true
type C = IsAny<unknown>; // false
type D = IsAny<never>; // false

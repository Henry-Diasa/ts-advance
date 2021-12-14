export {} 
// 只有never 才能够集成never
type IsNever<T> = [T] extends [never] ? true : false

type A = IsNever<never>; // true
type B = IsNever<string>; // false
type C = IsNever<undefined>; // false
type D = IsNever<any>; // false

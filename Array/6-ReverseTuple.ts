export {} 

type ReverseTuple<T, S extends any[] = []> = T extends [...infer L, infer R] ? ReverseTuple<L, [...S,R]> : S
type A = ReverseTuple<[string, number, boolean]>; // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]>; // [3,2,1]
type C = ReverseTuple<[]>; // []

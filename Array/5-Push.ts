export {}

type Flat<T> = T extends [...infer M] ? M : [T]
type Push<T, K> = T extends [...infer M] ? [...M, ...Flat<K>] : never
type A = Push<[1, 2, 3], 4>; // [1,2,3,4]
type B = Push<[1], 2>; // [1, 2]

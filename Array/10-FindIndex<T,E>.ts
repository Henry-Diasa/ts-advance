type A = [any, never, 1, "2", true];
type B = FindIndex<A, 1>; // 2
type C = FindIndex<A, 3>; // never

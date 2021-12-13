export {} 
type LengthOfTuple<T extends any[], S extends any[] = []> = T extends [infer L, ...infer R] ? LengthOfTuple<R, [...S,L]> : S['length']
type A = LengthOfTuple<["B", "F", "E"]>; // 3
type B = LengthOfTuple<[]>; // 0



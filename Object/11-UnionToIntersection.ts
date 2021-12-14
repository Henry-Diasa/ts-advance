export {} 
// 条件分发  函数 参数协变
type UnionToIntersection<T> = (T extends any ? ((p: T) => any): never) extends ((p: infer P) => any) ? P : never
type A = UnionToIntersection<{ a: string } | { b: string } | { c: string }>;
// {a: string} & {b: string} & {c: string}

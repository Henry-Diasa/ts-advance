// 递归思想 加上Prev保存前一个数
type LastChar<T, Prev = never> = T extends `${infer L}${infer R}` ? LastChar<R, L> : Prev

type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never

export {}
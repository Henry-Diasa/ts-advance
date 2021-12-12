// 涉及到数字长度等 需要使用到元祖
type RepeatString<T extends string, K, A extends any[] = [], Prev extends string = ''> = 
K extends A['length'] ? Prev : RepeatString<T,K,[...A, null], `${Prev}${T}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''

export {} 

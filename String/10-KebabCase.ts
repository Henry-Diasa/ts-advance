export {} 

type KebabCase<T,S extends string = ''> = T extends `${infer L}${infer R}` ? KebabCase<R, `${S}${
    L extends Uppercase<L> ? `-${Lowercase<L>}` : L
}`> : S extends `-${infer L}` ? L : S
type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag

type CamelCase<T extends string, S extends string = ''> = T extends `${infer L}-${infer R1}${infer R2}` ? CamelCase<R2, `${S}${L}${Uppercase<R1>}`> : Capitalize<`${S}${T}`> 

type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag 

export {
    CamelCase 
}
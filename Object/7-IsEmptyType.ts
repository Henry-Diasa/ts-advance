export {}
type IsEmptyType<T> = number extends T // 区分 {} 和 object
    ? keyof T extends never
        ? T extends {} // 区分unkonw 和 {}
          ? true  
          : false
        : false
    : false

type A = IsEmptyType<string>; // false
type B = IsEmptyType<{ a: 3 }>; // false
type C = IsEmptyType<{}>; // true
type D = IsEmptyType<any>; // false
type E = IsEmptyType<object>; // false
type F = IsEmptyType<Object>; // false
type G = IsEmptyType<unknown>; // false

// type a = number extends {} ? true : false
// type b = number extends object ? true : false
// type k = keyof unknown
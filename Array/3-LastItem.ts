type A = LastItem<[string, number, boolean]>; // boolean
type B = LastItem<["B", "F", "E"]>; // 'E'
type C = LastItem<[]>; // never

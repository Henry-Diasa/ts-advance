type a1 = OptionalKeys<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>; // bar
type a2 = OptionalKeys<{ foo: number; bar?: string }>; // bar
type a3 = OptionalKeys<{ foo: number; flag: boolean }>; // never
type a4 = OptionalKeys<{ foo?: number; flag?: boolean }>; // foo|flag
type a5 = OptionalKeys<{}>; // never

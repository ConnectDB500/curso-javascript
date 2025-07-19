// Mapped types

interface User {
  id: string;
  name: string;
  age?: number;
  email: string;
  isAdmin?: boolean;
  send(): string;
  join(): void;
  isActive(): boolean;
}

type MyPartial<T> = {
  [key in keyof T]?: T[key];
}
type PartialUser = MyPartial<User>

type MyRequired<T> = {
  [key in keyof T]-?: T[key];
}
type RequireUser = MyRequired<User>

type ToBoolean<T> = {
  [key in keyof T]: boolean;
}
type MYUser = ToBoolean<User>

type UnderscoreProps<T> = {
  [Key in keyof T as Key extends string ? `_${Key}` : Key]: T[Key]
}
type UnderscoreUser = UnderscoreProps<User>;

type NoMethods<T> = {
  [Key in keyof T as T[Key] extends Function ? never : Key ]: T[Key];
}
type NoMethodsUser = NoMethods<User>

type NoProps<T> = {
  [Key in keyof T as T[Key] extends Function ? Key : never]: T[Key];
}
type NoPropsUser = NoProps<User>

type RemoveProps<T, U> = {
  [Key in keyof T as T[Key] extends U ? never : Key]: T[Key];
}
type MyUser = RemoveProps<User, ()=>string | boolean | undefined>
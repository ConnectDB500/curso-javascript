// conditional types

type IsString<T> = T extends string ? true : false;
type IsNumber<T> = T extends number ? true : false;

interface StringOptions {
  upper(): void;
  lower(): void;
}

interface NumberOptions {
  pow(exp: number): number;
  sub(b: number): number;
  sum(b: number): number;
}

type ManipuleOptions<T> = 
    IsString<T> extends true ? StringOptions :
    IsNumber<T> extends true ? NumberOptions : 
    never;

function manipule<T>(value: T): ManipuleOptions<T>{
  return Object.create({})
}
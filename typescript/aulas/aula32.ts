// Tipagem recursiva

type JSONvalue = string | number | boolean | JSONvalue[] | {
  [key: string]: JSONvalue
}

const json1: JSONvalue = [22, "hacker", [true]]

const json2: JSONvalue = {
  name: "Hacker",
  type: "module",
  scripts: {
    typescript: "5.0.0"
  }
}

//
type PackageJson = typeof import("../package.json");

type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends object ? NestedPartial<T[K]> : T[K];
}
type NestedRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? NestedRequired<T[K]> : T[K];
}
type NestedReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? NestedReadonly<T[K]> : T[K];
}

type PartialPackageJson = NestedPartial<PackageJson>;
type RequiredPackageJson = NestedRequired<PackageJson>;
type ReadonlyPackageJson = NestedReadonly<PackageJson>;

const pkg: PartialPackageJson = {
  name: "Hacker",
  scripts: {}
}

//
const jobs = "Hacker, DevOps, Data Analist, Developer";

const errnames = jobs.split(",");

type Split<S extends string, T> = 
  T extends `${infer Splited}${S}${infer Rest}` 
    ? Splited | Split<S, Rest> 
    : never

type Jobs = Split<",", typeof jobs>

//
type GetParams<T extends string> = 
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | GetParams<Rest>
    : T extends `${string}:${infer Param}`
      ? Param
      : never;

type Params = GetParams<"/users/:userId/post/postId">
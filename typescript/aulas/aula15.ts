// Record

type Settings = Record <string, string>;

const setting: Settings = {
  name: "Jeffren",
  type: "module"
}

//
type Offsets = Record<number, string>;

const offset: Offsets = {
  0.4: "red",
  "12": "green"
}

//
interface Route {
  path: string;
  children?: Routes
}

type Routes = Record<string, Route>

const routes: Routes = {
  home: {
    path: "/home",
    children: {
      auth: {
        path: "/login"
      }
    }
  }
}
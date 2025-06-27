// Type Intersections

interface MyFetchOptions {
  printInput?: boolean;
  printTime?: boolean;
}

type RequestOptions = MyFetchOptions & RequestInit

export function myFetch(input: string, options?: RequestOptions){
  if (options?.printInput){
    console.log("Input", input);
  }
  if (options?.printTime){
    console.log("Time", new Date().toDateString())
  }
  return fetch(input, options)
}

myFetch("http://localhost:5050/auth", {
  printTime: true
})
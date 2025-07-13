// Generics

function getFirstElement<T>(arr: T[]){
  return arr[0];
}

const names = ["Cesar", "Fernanda", "Mario"];
const myName = getFirstElement(names);

const numbers = [1, 2, 3, 4, 5, 6];
const myNumber = getFirstElement(numbers);

const booleans = [true, false, true, false]
const myBool = getFirstElement(booleans);

const items = ["Cesar", 1, true]
const myItems = getFirstElement(items);

//
function isEqual<T, U>(a: T, b: U): boolean {
  return false;
}
isEqual(10, 10)
isEqual("Cesar", "Cesar")
isEqual(10, "Cesar")

//
interface ApiResponse<T> {
  data: T
  sucess: boolean;
  error?: string;
}
interface User{
  id: string;
  name: string;
  role: string;
}

function fetchUser(): ApiResponse<User> {
  return {
    sucess: true,
    data: {id: "123", name: "Cesar", role: "Dev"}
  }
}

const response1 = fetchUser();
response1.data.id.charAt(1)

interface Book {
  id: string;
  title: string;
}

function fetchBook(): ApiResponse<Book>{
  return {
    sucess: true,
    data: {id: "a1", title: "Aged book"}
  }
}

const response2 = fetchBook();
response2.sucess.valueOf()
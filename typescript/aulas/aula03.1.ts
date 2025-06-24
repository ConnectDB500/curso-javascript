declare global {
  interface Console {
    sayHello(): void
  }
}

Object.assign(console, {
  sayHello(){
    console.log("Hello")
  }
})

console.sayHello();
// Type

interface Userwallet {
  coins?: number;
  credits?: number;
}

interface User {
  name: string;
  createdAt: Date;
  wallet?: {
    coins?: number;
    credits?: number;
  }
}

type Input2 = string | User;

function prompt2(input: Input2){}

prompt2("")

// Types

type UserWallet = {
  coins?: number;
  credits?: number;
}

type User = {
  name: string;
  createdAt: Date;
  wallet?: UserWallet;
}

type Admin = User & {
  ban(user: User): void;
  kick(user: User): void;
}
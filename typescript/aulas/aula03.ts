interface UserWallet {
  coins?: number;
  credits?: number;
}

interface User {
  name: string,
  createAt: Date,
  wallet?: UserWallet
}

interface User {
  account(): void;
}

function createUser(name: string) {
  return { name, createAt: new Date(), 
    account(){
      console.log(`My account is ${name}`)
    }
   }
}

function updateWallet(user: User, wallet: UserWallet){
  user.wallet = {...user.wallet, ...wallet}
}

const Hackerroot = createUser("Hackerroot");

updateWallet(Hackerroot, {coins: 500, credits: 50})

interface Admin extends User{
  ban(user: User): void;
  kick(user: User): void;
}

function promoteUser(user: User): Admin{
  return {
    ...user,
    ban(userToBan){
      console.log(userToBan, "foi banido por", this.name)
    },
    kick(userToKick){
      console.log(userToKick, "foi expulso por", this.name)
    }
  }
}

const adminHacker = promoteUser(Hackerroot);

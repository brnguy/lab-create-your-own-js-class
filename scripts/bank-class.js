class BankAccount {
    
    constructor(accountType) {
        this.accountType = accountType
        this.balance = 0
        this.overDraftFees = 0
    }

    deposit(amt) {
        this.balance += amt
        console.log('Remaining Balance:', this.balance)
    }

    withdraw(amt) {
        this.balance -= amt
        console.log('Remaining Balance:', this.balance)
        if (this.balance < 0) {
            this.overDraftFees += 20
            console.log("Overdraft Fees: " + this.overDraftFees)
        }
    }
}

class ChildBankAccount extends BankAccount {
    constructor(accountType) {
        super(accountType)
    }

    withdraw(amt) {
        if (this.balance < amt) {
            console.log("Withdrawal Denied! Remaining balance does not have enough funds")
        } else {
            this.balance -= amt
            console.log('Remaining Balance:', this.balance)
        }
    }

}

let myAccount = new BankAccount('checking')
let otherAccount = new ChildBankAccount('savings')

myAccount.deposit(500)
myAccount.withdraw(250)
myAccount.deposit(1000)
myAccount.withdraw(2000)
otherAccount.deposit(200)
otherAccount.withdraw(500)

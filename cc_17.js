// Task 1: Creating a customer class

class Customer {
    constructor(name, email, purchaseHistory) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }


addPurchase(amount) { // method that adds purchase amount to puchaseHistory
    this.purchaseHistory.push(amount);
}

getTotalSpent() { // method that calculates, logs, and returns purchase total
    const total = this.purchaseHistory.reduce((sum,amount) => sum + amount, 0);
    console.log(`${this.name} has spent $${total}`);
    return total; 
  }
}

console.log("CRM SYSTEM:"); // adding a title to the console
const customer = new Customer ("Invincible", "markgrayson@gmail.com");// creating a customer to log total purchase amount
customer.addPurchase(40); 
customer.addPurchase(350);
customer.getTotalSpent(); // should output that the customer has spend a total of $390



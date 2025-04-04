// Task 1: Creating a customer class

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
        console.log("Customer:", this.name, this.email);
    }


addPurchase(amount) { // method that adds purchase amount to puchaseHistory
    this.purchaseHistory.push(amount);
}

getTotalSpent() { // method that calculates, logs, and returns purchase total
    const total = this.purchaseHistory.reduce((sum,amount) => sum + amount, 0);
    
    return total; 
  }
}

console.log("----CRM SYSTEM:----"); // adding a title to the console
const customer1 = new Customer ("Invincible", "markgrayson@gmail.com");// creating a customer to log total purchase amount
customer1.addPurchase(40); 
customer1.addPurchase(350);
customer1.getTotalSpent(); // should output that the customer has spend a total of $390

// task 2: Create a SalesRep Class

class SalesRep { 
    constructor(name) {
        this.name = name;
        this.clients = []; // making clients array 
        console.log("Sales Rep:", this.name); // log sales rep info
    }

    addClient(customer) { 
        this.clients.push(customer); // method that adds customer
    }


    getClientTotal(name) {
    const client = this.clients.find(c => c.name === name);
    
    if (client) {
        return client.getTotalSpent(); // get total from method
    } else {
        console.log(`Client ${name} not found.`); // returns if client not found
        return 0; 
    }
  }
}

// sales rep example use
console.log("----SALES REP INFO:----"); 
const salesRep1 = new SalesRep("Nolan");

// creating a new example customer
console.log("new customer has been added:")
const customer2 =  new Customer ("Spongebob", "spongebob@gmail.com"); 
customer2.addPurchase(200); 
customer2.addPurchase(15);
customer2.getTotalSpent();


salesRep1.getClientTotal("Anna"); // example of a client name not found

// task 3:  Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email); // calls parent class constructor
        this.vipLevel = vipLevel
    }

    getTotalSpent() { // returns total spent with 10% loyalty bonus
        const totalSpent = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
        const bonus = totalSpent * 0.10;
        return totalSpent + bonus;

    }
}

// example VIP customer
console.log("----VIP CUSTOMER----")
const vip1 = new VIPCustomer ("Eve", "atomeve@gmail.com", "Gold");
vip1.addPurchase(150);
vip1.addPurchase(55);
vip1.getTotalSpent();


// task 4: Build a Client Report System

// create more customers
console.log("----More Customers added:----")
const customer3 = new Customer ("kelly", "kelly@gmail.com");
customer3.addPurchase(25);
customer3.addPurchase(25);
customer3.getTotalSpent();

const vip2 = new VIPCustomer("amber", "amberr@gmail.com");
vip2.addPurchase(600);
vip2.addPurchase(150);
vip2.getTotalSpent();

const allCustomers = [customer1, customer2, vip1, vip2];  

// calculate total revenue with .reduce
console.log("----total revenue:----")
const totalRevenue = allCustomers.reduce((total, customer) => total + customer.getTotalSpent(), 0);  
console.log(`Total Revenue: $${totalRevenue}`);

console.log("----high spending customers:----")
const highSpendingCustomers = allCustomers.filter(customer => {
    const totalSpent = customer.getTotalSpent();
    return totalSpent > 500;  // filter customers who spent over $500
});
console.log(highSpendingCustomers);

// filter all customers that spent over $500

// map summary of customer names and total
console.log("----customer summary:----")
console.log("All customers:", allCustomers);
const customerSummary = allCustomers.map(customer => {
    return {
      name: customer.name,
      totalSpent: customer.getTotalSpent()
    };
  });








/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) > 0) {
    var deposit = new Transaction('deposit', Number.isInteger(amount));
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var withdrawl = new Transaction('withdrawl', amount);
    this.transactions.push(withdrawl);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function (amount) {

};

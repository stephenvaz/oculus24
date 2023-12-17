class TxHistory{
  constructor (userId){
    this.userId = userId;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

export default TxHistory;
class Transaction {
  constructor(transactionId, eventId, amount, currency, status, orderId, paymentId, createdAt) {
    this.transactionId = transactionId;
    this.eventId = eventId;
    this.amount = amount;
    this.currency = currency;
    this.status = status;
    this.orderId = orderId;
    this.paymentId = paymentId;
    this.createdAt = createdAt;
  }
}

export default Transaction;
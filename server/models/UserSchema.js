import TxHistory from "./TxHistorySchema";

class UserModel {
  constructor(userId, name, email, txHistory) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.txHistory = new TxHistory(userId);
  }
}

export default UserModel;
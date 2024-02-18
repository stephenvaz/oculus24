export default async function displayRazorpay() {
  const data = await fetch("http://localhost:5000/api/pay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: import.meta.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: "Oculus X Cube Open",
    description: "Wallet Transaction",
    // image: "http://localhost:1337/logo.png",
    image: "O Black.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
      //TODO: api call, to save the payment id 

    },
    prefill: {
      name: "Stephen",
      email: "vs1102@proton.me",
      contact: "8779683559",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

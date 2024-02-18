import React, { useEffect } from "react";

import displayRazorpay from "./components/PaymentGateway";
import CustButton from "./components/CustButton";
// import { SiRazorpay } from "react-icons/si";
import { FaMoneyBillWave } from "react-icons/fa";



const RazorPayTest = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <div
        className="h-screen w-full flex items-center justify-center gap-2 overflow-x-clip"
    >
    {/* <Button
        onClick={() => {
            console.log("Button Clicked");
            displayRazorpay();

        }}
        variant="outlined"
        color="warning"
        style={{
            // neumorphic button
            backgroundColor: "#ff9f00",
            boxShadow: "0 0 0 0.5rem rgba(255, 159, 0, 0.5)",
            zIndex: "100",

        }}

    >

        Pay Now
    </Button> */}
    <CustButton 
      text={"Pay Now"}
      icon={<FaMoneyBillWave size={30} />}
      mOnClick={() => {
        displayRazorpay();
      }}

    />
    </div>
  );
};

export default RazorPayTest;



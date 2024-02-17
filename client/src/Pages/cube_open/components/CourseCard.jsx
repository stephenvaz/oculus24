import React from "react";

// import displayRazorpay from "../utils/PaymentGateway";
import displayRazorpay from "./PaymentGateway";

const CourseCard = ({
  courseName,
  courseThumbnail,
  courseDetails,
  coursePrice,
  courseDiscountedPrice,
  courseDiscount,
}) => {
  return (
    <article className="card">
      <img src={courseThumbnail} alt={courseName} />
      <div className="card-content">
        <header className="card-header">
          <h5>{courseName}</h5>
        </header>
        <p>{courseDetails}</p>
        <h4>
          ₹{courseDiscountedPrice}{" "}
          <span className="course-price">₹{coursePrice}</span>{" "}
          <span className="course-discount-percentage">
            {courseDiscount}% OFF
          </span>
        </h4>
        <button
          type="button"
          onClick={() => {
            console.log("Button Clicked");
            displayRazorpay()
          }}
          className="course-payment-button"
          style={{ backgroundColor: "#ff9f00", zIndex: "100"}}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default CourseCard;

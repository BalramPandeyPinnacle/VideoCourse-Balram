// import React,{useState} from "react";
// import Styles from "./PurchaseHistory.module.css";
// import Header from "../Components/HomePage01/Header/Header";
// import Footer from "../Components/HomePage01/Footer/Footer";
// export default function PurchaseHistory() {


  // const CourseReceiptData = [
  //   {
  //     courseName: "Introduction to Python",
  //     date: "2023-08-15",
  //     totalPrice: 499,
  //     PaymentType: "Credit Card",
  //     id:"cdi1"
  //   },
  //   {
  //     courseName: "Web Development Fundamentals",
  //     date: "2023-08-22",
  //     totalPrice: 799,
  //     PaymentType: "PayPal",
  //     id:"cdi2"
  //   },
  //   {
  //     courseName: "Data Science with R",
  //     date: "2023-09-05",
  //     totalPrice: 899,
  //     PaymentType: "Credit Card",
  //     id:"cdi3"
  //   },
  //   {
  //     courseName: "Introduction to Machine Learning",
  //     date: "2023-09-12",
  //     totalPrice: 999,
  //     PaymentType: "Stripe",
  //     id:"cdi4"
  //   },
  //   {
  //     courseName: "Digital Marketing Strategies",
  //     date: "2023-10-10",
  //     totalPrice: 699,
  //     PaymentType: "Stripe",
  //     id:"cdi5"
  //   },
  //   {
  //     courseName: "Introduction to Graphic Design",
  //     date: "2023-10-17",
  //     totalPrice: 499,
  //     PaymentType: "PayPal",
  //     id:"cdi6"
  //   },
  //   {
  //     courseName: "Artificial Intelligence Basics",
  //     date: "2023-10-24",
  //     totalPrice: 1199,
  //     PaymentType: "Credit Card",
  //     id:"cdi7"
  //   },
  //   {
  //     courseName: "Video Editing Fundamentals",
  //     date: "2023-11-07",
  //     totalPrice: 399,
  //     PaymentType: "Stripe",
  //     id:"cdi8"
  //   }
  // ];



//   if (CourseReceiptData.length === 0) {
//     return <div>There is no Any Data this is Course component</div>;
//   }
//   return (
//     <>
//       <Header />
//       <div className={Styles["PurchaseHistory-fullPage"]}>
//         <div className={Styles["PurchaseHistory-heading"]}>
//           Purchase History
//         </div>
//         <div className={Styles["PurchaseHistory-belloHeading"]}>
//           <div className={Styles["Course-Subscriptions-Refunds"]}>Course</div>
//         </div>

//         <div className={Styles["individual-headings"]}>
//           <div className={Styles["courseName"]}>Course Name</div>
//           <div className={Styles["date"]}>Date</div>
//           <div className={Styles["totalPrice"]}>Total Price</div>
//           <div className={Styles["payment-type"]}>Payment Type</div>
//         </div>
//         <div className={Styles["Course-Subscriptions-Refunds-Result-div"]}>
//           {CourseReceiptData.map((data) => (
//             <div className={Styles["individual"]} id={data.id}>
//               <div className={Styles["courseName"]}>{data.courseName}</div>
//               <div className={Styles["date"]}>{data.date}</div>
//               <div className={Styles["totalPrice"]}> &#8377; {data.totalPrice}</div>
//               <div className={Styles["payment-type"]}>{data.PaymentType}</div>
//               <div className={Styles["Receipt"]}>
//                 <button className={Styles["btns"]}>Receipt</button>
//               </div>
//               <div className={Styles["Receipt"]}>
//                 <button className={Styles["btns"]}>Invoice</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* <div></div>
//         <div></div> */}
//       </div>
//       <Footer />
//     </>
//   );
// }



// test 02


import React, { useState } from "react";
import Styles from "./PurchaseHistory.module.css";
import Header from "../Components/HomePage01/Header/Header";
import Footer from "../Components/HomePage01/Footer/Footer";

export default function PurchaseHistory() {
  const CourseReceiptData = [
    {
      courseName: "Introduction to Python",
      date: "2023-08-15",
      totalPrice: 499,
      PaymentType: "Credit Card",
      id:"cdi1"
    },
    {
      courseName: "Web Development Fundamentals",
      date: "2023-08-22",
      totalPrice: 799,
      PaymentType: "PayPal",
      id:"cdi2"
    },
    {
      courseName: "Data Science with R",
      date: "2023-09-05",
      totalPrice: 899,
      PaymentType: "Credit Card",
      id:"cdi3"
    },
    {
      courseName: "Introduction to Machine Learning",
      date: "2023-09-12",
      totalPrice: 999,
      PaymentType: "Stripe",
      id:"cdi4"
    },
    {
      courseName: "Digital Marketing Strategies",
      date: "2023-10-10",
      totalPrice: 699,
      PaymentType: "Stripe",
      id:"cdi5"
    },
    {
      courseName: "Introduction to Graphic Design",
      date: "2023-10-17",
      totalPrice: 499,
      PaymentType: "PayPal",
      id:"cdi6"
    },
    {
      courseName: "Artificial Intelligence Basics",
      date: "2023-10-24",
      totalPrice: 1199,
      PaymentType: "Credit Card",
      id:"cdi7"
    },
    {
      courseName: "Video Editing Fundamentals",
      date: "2023-11-07",
      totalPrice: 399,
      PaymentType: "Stripe",
      id:"cdi8"
    }
  ];

  const generateReceipt = (data) => {
    // Implement your receipt generation logic here
    console.log("Generating receipt for:", data);
    // You can use libraries like react-to-print or react-pdf to generate and print receipts
  };

  const generateInvoice = (data) => {
    // Implement your invoice generation logic here
    console.log("Generating invoice for:", data);
    // You can use libraries like react-to-print or react-pdf to generate and print invoices
  };

  if (CourseReceiptData.length === 0) {
    return <div>There is no Any Data this is Course component</div>;
  }

  return (
    <>
      <Header />
      <div className={Styles["PurchaseHistory-fullPage"]}>
        <div className={Styles["PurchaseHistory-heading"]}>
          Purchase History
        </div>
        {/* ... your other JSX ... */}
        <div className={Styles["Course-Subscriptions-Refunds-Result-div"]}>
          {CourseReceiptData.map((data) => (
            <div className={Styles["individual"]} id={data.id} key={data.id}>
              {/* ... your other JSX ... */}
              <div className={Styles["Receipt"]}>
                <button
                  className={Styles["btns"]}
                  onClick={() => generateReceipt(data)}
                >
                  Receipt
                </button>
              </div>
              <div className={Styles["Receipt"]}>
                <button
                  className={Styles["btns"]}
                  onClick={() => generateInvoice(data)}
                >
                  Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}


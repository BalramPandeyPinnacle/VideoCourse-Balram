import React from "react";
import HomePage01 from "./Components/HomePage01/HomePage01";
import ReportAbuse from "./Components/HomePage01/ReportAbuse/ReportAbuse";
import Page02 from "./Components/Page02/Page02";
import Share from "./Components/Page02/ShareComponent/Share";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Language from "./Components/HomePage01/Language/Languages";
import LoginPage from "./Components/HomePage01/LogIn/LoginPage";
import SignUpPage from "./Components/HomePage01/SignUpPage/SignUpPage";
import AddToCart from "./Components/HomePage01/AddToCart/AddToCart";
import CartPage from "./Components/HomePage01/AddToCart/CartPage";
import PageNotFound from "./PageNotFound/PageNotFound";
import CartPage02 from "./Components/HomePage01/AddToCart/CartPage02";
import GiftACourse from "./Components/Page02/GiftACourse/GiftACourse";
import Checkout from "./Components/Page02/GiftACourse/Checkout";
import Profile from "./Profile/Profile";
import Tools from "./Profile/Tools";
import Resources from "./Profile/Resources";
import Commmunication from "./Profile/Commmunication";
import PersonalPlane from "./Components/Page02/PersonalPlane";
import PurchaseHistory from './Purchase history/PurchaseHistory'
import PaymentSteps from "./HelpDeskBP/PaymentSteps";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage01 />} />
          <Route path="/page02" element={<Page02 />} />
          <Route path="/share" element={<Share />} />
          <Route path="/language" element={<Language />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sighup" element={<SignUpPage />} />
          <Route path="/reportAbouse" element={<ReportAbuse />} />
          <Route path="/cartHover" element={<AddToCart />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="/testcart" element={<CartPage02 />} />
          <Route path="/gitACourse" element={<GiftACourse />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/communication" element={<Commmunication/>}/>
          <Route path="/personalPlane" element={<PersonalPlane/>}/>
          <Route path="/PurchaseHistory" element={<PurchaseHistory/>}/>
          <Route path="/PaymentSteps" element={<PaymentSteps/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

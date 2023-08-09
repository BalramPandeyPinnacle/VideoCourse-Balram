import React, { useEffect } from "react";
import Timer from "../HomePage01/Header/Timer";
import Header from "../HomePage01/Header/Header";
import CourseDetails from "./CourseDetails";
import Footer from "../HomePage01/Footer/Footer";
import styles from "./Page02.module.css";
import { useNavigate } from "react-router";

export default function Page02() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Timer />
      <Header />
      <CourseDetails />
      <div className={styles["Report-Abouse"]}>
        <button
          className={styles["Report-Abouse-btn"]}
          onClick={() => navigate("/reportAbouse")}
        >
          Report Abouse
        </button>
      </div>
      <Footer />
    </div>
  );
}

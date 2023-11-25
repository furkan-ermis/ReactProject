import React, { useContext, useEffect } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import "./App.css";
import CreateAppointment from "./Components/CreateAppointment";
import AppContext from "./Context/AppContext";
import logo from "./logoBlue.png";
function App() {
  const { fetchHospitals, hospitals } = useContext(AppContext);
  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" width="160" />
        <button className="btn-main">
          <FaUserDoctor size="20px" color="white" className="doctorIcon" />
          &nbsp; &nbsp; Hekim Giriş
        </button>
      </div>
      <div className="wrapper">
        <h1>Randevu Alma Sistemine Hoşgeldiniz</h1>
      </div>
      <div className="formWrapper">
        <div className="form">
          <CreateAppointment />
        </div>
      </div>
    </div>
  );
}

export default App;

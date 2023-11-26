import React, { useContext, useEffect } from "react";
import "./App.css";
import CreateAppointment from "./Components/CreateAppointment";
import Header from "./Components/Header";
import AppContext from "./Context/AppContext";
function App() {
  const { fetchHospitals, hospitals } = useContext(AppContext);
  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <div>
      <Header />
      <div className="wrapper">
        <h1>Randevu Alma Sistemine Hoşgeldiniz</h1>
        <div className="form">
          <CreateAppointment />
        </div>
      </div>
    </div>
  );
}

export default App;

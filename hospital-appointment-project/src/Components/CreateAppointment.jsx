import React from "react";
import { Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
// import { actionTypes, useAppContext } from "../Context/AppContext";
import "../App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const CreateAppointment = () => {
  function CreateAppointment() {
    const message = (
      <>
        <div className="container">
          <strong style={{ color: "darkred" }}>Hasta: </strong>
          Furkan Ermiş
          <br />
          <br />
          <strong style={{ color: "darkred" }}>Randevu Tarihi :</strong>
          17 Aralık 2023 13:15 <br />
          <br />
          <h5 style={{ color: "black" }}>
            Randevunuz Başarı ile oluşturulmuştur
          </h5>{" "}
          <br />
        </div>
      </>
    );
    toast.success(message, { className: "success" });
  }
  //   const { state, dispatch } = useAppContext();
  //   const [hastaneler, setHastaneler] = useState([]);
  //   const [branslar, setBranslar] = useState([]);
  //   const [doktorlar, setDoktorlar] = useState([]);
  //   useEffect(() => {
  //     const fetchHastaneler = async () => {
  //       try {
  //         const response = await fetch("http://localhost:3000/db");
  //         if (!response.ok) {
  //           throw new Error("Veriler çekilirken bir hata oluştu.");
  //         }
  //         const data = await response.json();
  //         setHastaneler(data.hastaneler);
  //       } catch (error) {
  //         console.error("Veriler çekilirken bir hata oluştu:", error.message);
  //       }
  //     };
  //     fetchHastaneler();
  //   }, []);
  //   const handleHastaneChange = (e) => {
  //     const selectedHastaneId = parseInt(e.target.value, 10);
  //     dispatch({
  //       type: "SET_SECILI_HASTANE",
  //       payload: selectedHastaneId,
  //     });
  //     const selectedHastane = hastaneler.find(
  //       (hastane) => hastane.id === selectedHastaneId
  //     );
  //     setBranslar(selectedHastane ? selectedHastane.branslar : []);
  //   };
  //   const handleBransChange = (e) => {
  //     const selectedBrans = e.target.value;
  //     dispatch({
  //       type: "SET_SECILI_BRANS",
  //       payload: selectedBrans,
  //     });
  //     const selectedHastaneId = state.seciliHastaneId;
  //     const selectedHastane = hastaneler.find(
  //       (hastane) => hastane.id === selectedHastaneId
  //     );
  //     const selectedDoktorlar = selectedHastane
  //       ? selectedHastane.doktorlar.filter(
  //           (doktor) => doktor.uzmanlikAlani === selectedBrans
  //         )
  //       : [];
  //     setDoktorlar(selectedDoktorlar);
  //     dispatch({
  //       type: "SET_SECILI_DOKTOR",
  //       payload: null,
  //     });
  //   };
  //   const handleDoktorChange = (e) => {
  //     const selectedDoktorId = parseInt(e.target.value, 10);
  //     dispatch({
  //       type: "SET_SECILI_DOKTOR",
  //       payload: selectedDoktorId,
  //     });
  //   };
  //   // Diğer form alanları ve butonlar buraya eklenecek...
  return (
    <div>
      <Toaster />

      <Form.Group>
        <h2>Hasta Bilgilerinizi Giriniz</h2>
        <Form.Label>Hasta Adı</Form.Label>
        <input className="form-control" type="text" />
        <Form.Label>Hasta Soyadı</Form.Label>
        <input className="form-control" type="text" />
        <hr style={{ borderColor: "darkblue" }} />
        <h2>Randevu Bilgilerinizi Giriniz</h2>
        <Form.Label>Hastane Seçiniz</Form.Label>
        <Form.Control as="select"></Form.Control>
        <Form.Label>Branş Seçiniz</Form.Label>
        <Form.Control as="select"></Form.Control>
        <Form.Label>Doktor Seçiniz</Form.Label>
        <Form.Control as="select"></Form.Control>
        <Form.Label>Tarih Seçiniz</Form.Label>
        <input className="form-control" type="date" />
        <Form.Label>Saat Seçiniz</Form.Label>
        <input className="form-control" type="time" min="09:00" max="17:00" />
      </Form.Group>
      <br />
      <button onClick={CreateAppointment} className=" btn-submit btn-main">
        Randevu Oluştur
      </button>
    </div>
    //     <Container>
    //       <Row>
    //         <Col>
    //           <Form>
    //             <Form.Group controlId="hastaneSec">
    //               <Form.Label>Hastane Seç</Form.Label>
    //               <Form.Control
    //                 as="select"
    //                 onChange={handleHastaneChange}
    //                 value={state.seciliHastaneId || ""}
    //               >
    //                 <option value="" disabled>
    //                   Hastane Seç
    //                 </option>
    //                 {hastaneler.map((hastane) => (
    //                   <option key={hastane.id} value={hastane.id}>
    //                     {hastane.adi}
    //                   </option>
    //                 ))}
    //               </Form.Control>
    //             </Form.Group>
    //             <Form.Group controlId="bransSec">
    //               <Form.Label>Branş Seç</Form.Label>
    //               <Form.Control
    //                 as="select"
    //                 onChange={handleBransChange}
    //                 value={state.seciliBrans || ""}
    //                 disabled={!state.seciliHastaneId}
    //               >
    //                 <option value="" disabled>
    //                   Branş Seç
    //                 </option>
    //                 {branslar.map((brans) => (
    //                   <option key={brans} value={brans}>
    //                     {brans}
    //                   </option>
    //                 ))}
    //               </Form.Control>
    //             </Form.Group>
    //             <Form.Group controlId="doktorSec">
    //               <Form.Label>Doktor Seç</Form.Label>
    //               <Form.Control
    //                 as="select"
    //                 onChange={handleDoktorChange}
    //                 value={state.seciliDoktorId || ""}
    //                 disabled={!state.seciliBrans}
    //               >
    //                 <option value="" disabled>
    //                   Doktor Seç
    //                 </option>
    //                 {doktorlar.map((doktor) => (
    //                   <option key={doktor.id} value={doktor.id}>
    //                     {doktor.adi}
    //                   </option>
    //                 ))}
    //               </Form.Control>
    //             </Form.Group>
    //             {/* Diğer form alanları ve butonlar buraya eklenecek... */}
    //             <Button variant="primary" type="submit">
    //               Randevu Al
    //             </Button>
    //           </Form>
    //         </Col>
    //       </Row>
    //     </Container>
  );
};

export default CreateAppointment;

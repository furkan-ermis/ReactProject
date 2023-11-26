import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { actionTypes, useAppContext } from "./AppContext";

const RandevuAlmaBileseni = () => {
  const { state, dispatch } = useAppContext();
  const [hastaneler, setHastaneler] = useState([]);
  const [branslar, setBranslar] = useState([]);
  const [doktorlar, setDoktorlar] = useState([]);

  useEffect(() => {
    const fetchHastaneler = async () => {
      try {
        const response = await fetch("http://localhost:3000/hastaneler");

        if (!response.ok) {
          throw new Error("Veriler çekilirken bir hata oluştu.");
        }

        const data = await response.json();
        setHastaneler(data.hastaneler);
      } catch (error) {
        console.error("Veriler çekilirken bir hata oluştu:", error.message);
      }
    };

    fetchHastaneler();
  }, []);

  const handleHastaneChange = (e) => {
    const selectedHastaneId = parseInt(e.target.value, 10);
    dispatch({
      type: "SET_SECILI_HASTANE",
      payload: selectedHastaneId,
    });

    const selectedHastane = hastaneler.find(
      (hastane) => hastane.id === selectedHastaneId
    );
    setBranslar(selectedHastane ? selectedHastane.branslar : []);
  };

  const handleBransChange = (e) => {
    const selectedBrans = e.target.value;
    dispatch({
      type: "SET_SECILI_BRANS",
      payload: selectedBrans,
    });

    const selectedHastaneId = state.seciliHastaneId;
    const selectedHastane = hastaneler.find(
      (hastane) => hastane.id === selectedHastaneId
    );
    const selectedDoktorlar = selectedHastane
      ? selectedHastane.doktorlar.filter(
          (doktor) => doktor.uzmanlikAlani === selectedBrans
        )
      : [];
    setDoktorlar(selectedDoktorlar);

    dispatch({
      type: "SET_SECILI_DOKTOR",
      payload: null,
    });
  };

  const handleDoktorChange = (e) => {
    const selectedDoktorId = parseInt(e.target.value, 10);
    dispatch({
      type: "SET_SECILI_DOKTOR",
      payload: selectedDoktorId,
    });
  };
  const handleTarihChange = (e) => {
    const selectedTarih = e.target.value;
    dispatch({
      type: actionTypes.SET_SECILI_TARIH,
      payload: selectedTarih,
    });
  };
  // Diğer form alanları ve butonlar buraya eklenecek...
  const handleRandevuAl = () => {
    // Burada randevu alma işlemini gerçekleştirebilirsiniz.
    // Seçilen hastane, doktor, tarih gibi bilgiler state'ten alınabilir.
    // İşlemler tamamlandıktan sonra gerekirse state'i sıfırlayabilirsiniz.
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="hastaneSec">
              <Form.Label>Hastane Seç</Form.Label>
              <Form.Control
                as="select"
                onChange={handleHastaneChange}
                value={state.seciliHastaneId || ""}
              >
                <option value="" disabled>
                  Hastane Seç
                </option>
                {hastaneler.map((hastane) => (
                  <option key={hastane.id} value={hastane.id}>
                    {hastane.adi}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="bransSec">
              <Form.Label>Branş Seç</Form.Label>
              <Form.Control
                as="select"
                onChange={handleBransChange}
                value={state.seciliBrans || ""}
                disabled={!state.seciliHastaneId}
              >
                <option value="" disabled>
                  Branş Seç
                </option>
                {branslar.map((brans) => (
                  <option key={brans} value={brans}>
                    {brans}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="doktorSec">
              <Form.Label>Doktor Seç</Form.Label>
              <Form.Control
                as="select"
                onChange={handleDoktorChange}
                value={state.seciliDoktorId || ""}
                disabled={!state.seciliBrans}
              >
                <option value="" disabled>
                  Doktor Seç
                </option>
                {doktorlar.map((doktor) => (
                  <option key={doktor.id} value={doktor.id}>
                    {doktor.adi}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="tarihSec">
              <Form.Label>Tarih Seç</Form.Label>
              <Form.Control
                type="date"
                onChange={handleTarihChange}
                value={state.seciliTarih || ""}
                disabled={!state.seciliDoktorId}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleRandevuAl}
              disabled={!state.seciliTarih}
            >
              Randevu Al
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RandevuAlmaBileseni;

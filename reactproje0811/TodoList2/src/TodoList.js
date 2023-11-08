import React, { useState } from "react";

function TodoList() {
  const [liste, setListe] = useState([]);
  const [newBaslik, setBaslik] = useState("");
  const [newAciklama, setAciklama] = useState("");

  const addToList = () => {
    setListe([...liste, { baslik: newBaslik, aciklama: newAciklama }]);
    setBaslik("");
    setAciklama("");
  };

  const deleteItem = (deletedIndex) => {
    setListe(liste.filter((item, itemIndex) => itemIndex !== deletedIndex));
  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <input
          value={newBaslik}
          placeholder="Başlık"
          onChange={(e) => {
            setBaslik(e.target.value);
          }}
          className="form-control mb-2"
        />
        <input
          value={newAciklama}
          placeholder="Açıklama"
          className="form-control mb-2"
          onChange={(e) => {
            setAciklama(e.target.value);
          }}
        />
        <button
          className="btn btn-primary form-control mb-2"
          onClick={addToList}
        >
          Ekle
        </button>
        <ul>
          {liste.map((item, index) => (
            <li className="list-group-item" key={index}>
              <strong>Başlık: </strong> {item.baslik} &nbsp;&nbsp;&nbsp;
              <strong>Açıklama: </strong> {item.aciklama}
              <button
                className="btn btn-danger ms-5"
                onClick={() => deleteItem(index)}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

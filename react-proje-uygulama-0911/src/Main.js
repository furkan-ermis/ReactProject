import axios from "axios";
import Header from "./Header";

import React, { useState } from "react";
import "./Header.css";
function Main() {
  const [file, setFile] = useState();
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(0);
  const [_name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [mode, setMode] = useState("add");
  const [dolar, setDolar] = useState(0);
  const [sepetList, setSepetList] = useState([]);
  const add = () => {
    setId(id + 1);
    setList([
      ...list,
      {
        id: id,
        ad: _name,
        icerik: content,
        yazar: author,
        resim: file,
        fiyat: price,
      },
    ]);
    setAuthor("");
    setContent("");
    setName("");
    setPrice("");
    setMode("add");
  };
  const Delete = (index) => {
    setList(list.filter((item, indexItem) => index !== indexItem));
  };
  const Edit = (item) => {
    setName(item.ad);
    setContent(item.icerik);
    setEditId(item.id);
    setAuthor(item.yazar);
    setPrice(item.fiyat);
    setMode("edit");
  };
  const update = () => {
    const updatedList = list.map((listItem) =>
      listItem.id === editId
        ? {
            id: editId,
            ad: _name,
            icerik: content,
            yazar: author,
            resim: file,
            fiyat: price,
          }
        : listItem
    );
    setList(updatedList);
    setName("");
    setContent("");
    setEditId("");
    setAuthor("");
    setPrice(0);
    setMode("add");
  };
  const getPostsFromServer = () => {
    axios
      .get(
        "https://api.fastforex.io/fetch-all?api_key=d241f9f8a9-fbf7824848-s3uxm8"
      )
      .then((response) => {
        setDolar(response.data.results.TRY);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AddBasket = (item) => {
    setSepetList([...sepetList, item]);
  };
  return (
    <>
      <Header sepetItem={sepetList} />

      <div className="main evenColumn">
        {getPostsFromServer()}
        <div className="form">
          <h2>Add Book</h2>
          <div className="mb-3 form-group">
            <label className="form-label">Book Name</label>
            <input
              type="text"
              placeholder="Book Name"
              name="bookName"
              className="form-control"
              id="bookName"
              value={_name}
              aria-describedby="bookName"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 form-group">
            <label className="form-label">Author</label>
            <input
              type="text"
              name="BookAuthor"
              value={author}
              className="form-control"
              id="BookAuthor"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              placeholder="BookAuthor"
            />
          </div>
          <div className="mb-3 form-group">
            <label className="form-label">Choose Picture</label>
            <input
              type="file"
              name="BookImg"
              className="form-control"
              id="BookImg"
              placeholder="BookImg"
              onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
          <div className="mb-3 form-group">
            <label className="form-label">Content</label>
            <input
              type="text"
              name="BookContent"
              className="form-control"
              value={content}
              id="BookContent"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="BookContent"
            />
          </div>
          <div className="mb-3 form-group">
            <label className="form-label">Price</label>
            <input
              type="text"
              name="BookPrice"
              className="form-control"
              value={price}
              id="BookPrice"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="BookPrice"
            />
          </div>
          {mode === "add" ? (
            <button onClick={add} className="btn btn-main">
              Ekle
            </button>
          ) : (
            <button onClick={update} className="btn btn-info">
              Güncelle
            </button>
          )}
        </div>

        <div className="cards">
          {list.map((item, index) => (
            <div key={item.id} className="card" style={{ width: "18rem" }}>
              <img
                style={{ width: "100%", height: "200px" }}
                alt=""
                src={item.resim}
              />
              <div className="card-body">
                <h5 className="card-title">Kitap Adı: {item.ad}</h5>
                <p className="card-text">Fiyat: {item.yazar}</p>
                <p className="card-text">İçerik: {item.icerik}</p>
                <p className="card-text">
                  Fiyat: {parseFloat(item.fiyat / dolar).toFixed(2)}$
                </p>
                <button
                  onClick={() => AddBasket(item)}
                  className="btn btn-main"
                >
                  Buy
                </button>
                &nbsp;&nbsp;
                <button
                  onClick={() => Delete(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                &nbsp;&nbsp;
                <button onClick={() => Edit(item)} className="btn btn-danger">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;

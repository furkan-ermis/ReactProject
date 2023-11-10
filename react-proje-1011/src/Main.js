import axios from "axios";
import React, { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";
import Header from "./Header";
import "./Header.css";

function Main() {
  const [file, setFile] = useState();
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(0);
  const [_name, setName] = useState("");
  const [price, setPrice] = useState();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [mode, setMode] = useState("add");
  const [dolar, setDolar] = useState(0);
  const [sepetList, setSepetList] = useState([]);
  const [count, setCount] = useState(1);
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
        count: 1,
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

    // const newSepet = sepetList;
    // newSepet.find(item.id)
    //   ? setSepetList(sepetList.map((i) => i.id === item.id && item.count++))
    //   : setSepetList([...newSepet, item]);
  };

  const funcName = (e) => {
    setName(e.target.value);
  };
  const funcAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const funcFile = (e) => setFile(URL.createObjectURL(e.target.files[0]));
  const funcContent = (e) => {
    setContent(e.target.value);
  };
  const funcPrice = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      <Header sepetItem={sepetList} count={count} />

      <div className="main evenColumn">
        {getPostsFromServer()}
        <Form
          funcName={funcName}
          _name={_name}
          author={author}
          content={content}
          price={price}
          mode={mode}
          funcAuthor={funcAuthor}
          funcFile={funcFile}
          funcContent={funcContent}
          funcPrice={funcPrice}
          add={add}
          update={update}
        />
        <Cards
          list={list}
          dolar={dolar}
          AddBasket={AddBasket}
          Delete={Delete}
          Edit={Edit}
        />
      </div>
    </>
  );
}

export default Main;

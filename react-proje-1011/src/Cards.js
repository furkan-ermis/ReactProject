function Cards(props) {
  return (
    <div className="cards">
      {props.list.map((item, index) => (
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
              Fiyat: {parseFloat(item.fiyat / props.dolar).toFixed(2)}$
            </p>
            <button
              onClick={() => props.AddBasket(item)}
              className="btn btn-main"
            >
              Buy
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => props.Delete(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
            &nbsp;&nbsp;
            <button onClick={() => props.Edit(item)} className="btn btn-danger">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

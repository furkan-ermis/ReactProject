function Form(props) {
  return (
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
          value={props._name}
          aria-describedby="bookName"
          onChange={props.funcName}
        />
      </div>
      <div className="mb-3 form-group">
        <label className="form-label">Author</label>
        <input
          type="text"
          name="BookAuthor"
          value={props.author}
          className="form-control"
          id="BookAuthor"
          onChange={props.funcAuthor}
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
          onChange={props.funcFile}
        />
      </div>
      <div className="mb-3 form-group">
        <label className="form-label">Content</label>
        <input
          type="text"
          name="BookContent"
          className="form-control"
          value={props.content}
          id="BookContent"
          onChange={props.funcContent}
          placeholder="BookContent"
        />
      </div>
      <div className="mb-3 form-group">
        <label className="form-label">Price</label>
        <input
          type="text"
          name="BookPrice"
          className="form-control"
          value={props.price}
          id="BookPrice"
          onChange={props.funcPrice}
          placeholder="BookPrice"
        />
      </div>
      {props.mode === "add" ? (
        <button onClick={props.add} className="btn btn-main">
          Ekle
        </button>
      ) : (
        <button onClick={props.update} className="btn btn-info">
          Güncelle
        </button>
      )}
    </div>
  );
}

export default Form;

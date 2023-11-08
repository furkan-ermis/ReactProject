import React, { useState } from "react";
function Product() {
  // ürün ekle sil güncelle fonksiyonları.ürün adi , kategorisi, açıklaması, fiyatları,resim
  const [ProductList, setProductList] = useState([]);
  const [ProductName, setProductName] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);

  const AddProduct = () => {
    setProductList([
      ...ProductList,
      {
        Adi: ProductName,
        aciklama: ProductDescription,
        category: ProductCategory,
        price: ProductPrice,
      },
    ]);
    setProductName("");
    setProductCategory("");
    setProductDescription("");
    setProductPrice("");
  };

  const DeleteProduct = (index) => {
    setProductList(
      ProductList.filter((productItem, productIndex) => productIndex !== index)
    );
  };
  const UpdateProduct = (item, index) => {
    setProductName(item.Adi);
    setProductCategory(item.category);
    setProductDescription(item.aciklama);
    setProductPrice(item.price);
    DeleteProduct(index);
  };

  return (
    <div className="container">
      <div className="text-center align-middle">
        <div className="form-control">
          <input
            type="text"
            value={ProductName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Name"
            className="form-control mb-3"
          />
          <input
            type="text"
            value={ProductCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Category"
            className="form-control mb-3"
          />
          <input
            type="text"
            value={ProductDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Description"
            className="form-control mb-3"
          />
          <input
            type="number"
            value={ProductPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Price"
            className="form-control mb-3"
          />
          <button className="btn btn-info" onClick={AddProduct}>
            Ürün Ekle
          </button>
        </div>

        <div className="row border rounded-3 bg-opacity-75 bg-info-subtle p-2">
          {ProductList.map((item, index) => (
            <div className="col-3  bg-body-secondary p-3 border">
              <h2 className="text-center text-bg-alert-light  rounded-3 m-3 text-danger">
                {item.Adi}
              </h2>
              <div className="d-flex justify-content-evenly">
                <strong>Açıklama: </strong>
                <div>{item.aciklama}</div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-evenly">
                <strong>Kategori: </strong>
                <div>{item.category}</div>
              </div>
              <hr></hr>

              <div className="d-flex justify-content-evenly">
                <strong>Fiyat: </strong>
                <div>{item.price}</div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-danger me-3 ms-3"
                  onClick={() => DeleteProduct(index)}
                >
                  Sil
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => UpdateProduct(item, index)}
                >
                  Güncelle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

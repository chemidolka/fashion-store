import React, { useState } from "react";

export const AddProductForm = ({products}) => {
    console.log (products)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const addProduct = (event) => {
      //products.push({
           // id: '1',
           // name: 'Tibetan Flagged Shirt',
           // price: 30,
           // image: 'shirt1.jpg',
           // })
    } 
  const form = (
      <div className="login-form">
      <h2>Add Products</h2>
      <div className="row">
              <div className="col-2">Product Name</div>
              <div className="col-1"><input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      /></div>
        </div>
           <div className="row">
            <div className="col-2">Detail Description</div>
            <div className="col-1">
       <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
        </div>
      <br/>
      <button className="login-button" onClick={addProduct}>
        Confirm Adding
      </button>
    </div>
  );
 return form;
};

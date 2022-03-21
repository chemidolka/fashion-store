import "./App.css";
import React, { useState } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { RoleWrapper } from "./RoleWrapper/RoleWrapper";
import list from "./list";
import Main from "./Main";
import Cart from "./Cart";
import Header from "./Header";
import {AddProductForm} from "./AddProductForm";

export function App() {
  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { products } = list;
  const [basketItems, setBasketItems] = useState([]);
  const onAdd = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, qty: 1 }]);
    }
  };
    const onRemove = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== product.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }; return (
    <div className="App">
      {role == "" ? <LoginForm username={username} password={password}
        setUsername={setUsername} setPassword={setPassword} setRole={setRole} /> : null}
      <RoleWrapper rolesAllowed={["Visitor", "Admin"]} currentRole={role}>
        <Header countBasketItems={basketItems.length}></Header>
      </RoleWrapper>
      <div className="row">
        <RoleWrapper rolesAllowed={["Visitor", "Admin"]} currentRole={role}>
          <Main products={products} onAdd={onAdd}></Main><Cart
            basketItems={basketItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Cart>
        </RoleWrapper>
      </div>
    <div className="row">
    <RoleWrapper rolesAllowed={["Admin"]} currentRole={role}>
        <AddProductForm products={products}></AddProductForm>
        </RoleWrapper>
    </div>
    </div>
  );
};

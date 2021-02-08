import { useState } from "react";

import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Stock from "./components/Stock";

import firebase from "firebase/app";
import "./config";
import "firebase/auth";

function App() {
  const [user, setUser] = useState("");
  const [register, setRegister] = useState(false);

  let loadUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser("");
      }
    });
  };

  let checkUser = () => {
    loadUser();
    if (user === "") {
      return <Login register={openRegister} />;
    } else {
      return <Stock />;
    }
  };

  let renderRegister = () => {
    return register === true ? (
      <Register cancel={() => setRegister(false)} />
    ) : null;
  };

  let openRegister = () => {
    setRegister(true);
  };

  return (
    <>
      <Navbar user={user} />
      <Container maxWidth="sm">
        {checkUser()}
        {renderRegister()}
      </Container>
    </>
  );
}

export default App;

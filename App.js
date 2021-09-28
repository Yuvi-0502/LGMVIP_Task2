import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    try {
      const { data } = await Axios.get("https://randomuser.me/api/");
      console.log(data.results[0]);
      const d = data.results[0];
      setDetails(d);
      setFirst(d.name["first"]);
      setLast(d.name["last"]);
      setTitle(d.name["title"]);
      setGender(d.gender);
      setImage(d.picture["large"]);
      setEmail(d.email);
      console.log("lavesh", d.gender);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <nav class="navbar navbar-dark bg-dark justify-content-start">
        <a
          class="navbar-brand"
          style={{
            marginRight: "70%",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Lets Grow More
        </a>

        <button class="btn btn-primary btn-lg " onClick={() => getUser()}>
          Click to get new User
        </button>
      </nav>

      <div
        class="card"
        style={{
          width: "30rem",
          marginLeft: "40%",
          marginTop: "3%",

          backgroundColor: "yellow",
        }}
      >
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title" style={{ fontWeight: "bold" }}>
            Name
          </h5>
          <p class="card-text">
            {title} {first} {last}
          </p>
          <h5 class="card-title" style={{ fontWeight: "bold" }}>
            Gender
          </h5>
          <p class="card-text">{gender}</p>
          <h5 class="card-title" style={{ fontWeight: "bold" }}>
            Email
          </h5>
          <p class="card-text">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
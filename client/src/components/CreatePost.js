import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/forms.css";

import Header from "./Header.js";

const CreatePost = () => {
  const [personListe, setPersonListe] = useState([]);
  const [tittel, setTittel] = useState("");
  const [link, setLink] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  const [authorId, setAuthorId] = useState("1");

  // useEffect(async () => {
  //   const result = await Axios.get("http://localhost:3001/personer");
  //   setPersonListe(result.data);
  // }, []);

  const getUsers = async () => {
    const result = await Axios.get("http://localhost:3001/personer");
    setPersonListe(result.data);
  }

  const sendØnske = async () => {
    await Axios.post("http://localhost:3001/create", {
      tittel: tittel,
      link: link,
      beskrivelse: beskrivelse,
      authorId: authorId,
    });
  };

  return (
    <div>
      <Header tittel="Ønsk deg noe" />
      <div>
        <h1>Hva er ditt ønske til jul?</h1>

        <form>
          <div className="form-control">
            <label for="tittel">Tittel</label>
            <input
              type="text"
              id="tittel"
              name="tittel"
              onChange={(e) => {
                setTittel(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label for="link">Link</label>
            <input
              type="text"
              id="link"
              name="link"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              required
              maxlength="255"
            />
          </div>
          <div className="form-control">
            <label for="content">Beskrivelse</label>
            <textarea
              id="content"
              name="content"
              onChange={(e) => {
                setBeskrivelse(e.target.value);
              }}
              required
              rows="5"
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="author">Hvem Sitt Ønske?</label>
            <select
              id="author"
              name="author"
              onClick={getUsers}
              onChange={(e) => {
                setAuthorId(e.target.value);
                console.log(e.target.value);
              }}
            >
              {personListe.map((person) => (
                <option value={person.id}>{person.navn}</option>
              ))}
            </select>
          </div>
          <button className="btn" onClick={sendØnske}>
            Legg inn ønske
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

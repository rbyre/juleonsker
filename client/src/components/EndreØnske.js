import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import "../styles/forms.css";

import Header from "./Header.js";

const EndreØnske = () => {

  const { id } = useParams();
  const [tittel, setTittel] = useState("");
  const [link, setLink] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  

  

  const oppdaterØnske = async () => {
    await Axios.put("http://localhost:3001/oppdater", {
      tittel: tittel,
      link: link,
      beskrivelse: beskrivelse,
      id: id,
    });
  };

  return (
    <div>
      <Header tittel={`Endre Ønske ${id}`} />
      <div>
        <h1>Endre Ønske</h1>

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
          
          
          <button className="btn" onClick={oppdaterØnske}>
            Oppdater ønske
          </button>
        </form>
      </div>
    </div>
  );
};

export default EndreØnske;

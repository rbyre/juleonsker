import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/posts.css";
import Header from "./Header";

const EditerBrukere = () => {
  const [personListe, setPersonListe] = useState([]);
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [oppførselId, setOppførselId] = useState("1");
  const [authorId, setAuthorId] = useState("");

  const addUser = async () => {
    await Axios.post("http://localhost:3001/addUser", {
      navn: navn,
      epost: epost,
      oppførselId: oppførselId,
    });
  };

  const getUsers = async () => {
    const result = await Axios.get("http://localhost:3001/personer");
    setPersonListe(result.data);
  }

  const slettBruker = async (id) => {
      await Axios.post("http://localhost:3001/deleteUser", {
          id: id,
        });
        
      }

  useEffect(async () => {
    const result = await Axios.get("http://localhost:3001/personer");
    setPersonListe(result.data);
  }, []);

  return (
    <div>
      <Header tittel="Lag bruker" />
      <div>
        <h1>Legg inn en bruker</h1>

        <form>
          <div className="form-control">
            <label htmlFor="tittel">Navn</label>
            <input
              type="text"
              id="navn"
              name="navn"
              onChange={(e) => {
                setNavn(e.target.value);
              }}
              
            />
          </div>
          <div className="form-control">
            <label htmlFor="link">Epost</label>
            <input
              type="text"
              id="epost"
              name="epost"
              onChange={(e) => {
                setEpost(e.target.value);
              }}
              
              maxlength="255"
            />
          </div>

          <div className="form-control">
            <label htmlFor="oppførsel">Oppførsel siste år:</label>
            <select
              id="oppførsel"
              name="oppførsel"
              onChange={(e) => {
                setOppførselId(e.target.value === "snill" ? 1 : 0);
              }}
            >
              <option value="1">snill</option>
              <option value="2">slem</option>
            </select>
          </div>
          <button className="btn" onClick={addUser}>
            Legg inn bruker
          </button>
          
          <div className="form-control">
            <label htmlFor="author"></label>
            <select
              id="author"
              name="author"
              onClick={getUsers}
              onChange={(e) => {
                setAuthorId(e.target.value);
                console.log(authorId);
              }}
            >
              {personListe.map((person) => (
                <option value={person.id}>{person.navn}</option>
                
              ))}
            </select>
          </div>
          <button className="btn" onClick={() => slettBruker(authorId)}>
            Slett Bruker
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditerBrukere;

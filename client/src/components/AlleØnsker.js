import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Header from "./Header";
import PostItem from "./PostItem";
import "../styles/forms.css";

const AlleØnsker = () => {
  const [postList, setPostListe] = useState([]);

  useEffect(async () => {
    const result = await Axios.get("http://localhost:3001/");
    setPostListe(result.data);
    console.log(result.data);
  }, []);
  
  return (
    <div>
      <Header tittel="Juleønsker" />

      <main id="all-posts">
        <h1>Alle Ønsker</h1>
        {postList.length !== 0 ?
        postList.map((post) => (
          <PostItem
            tittel={post.tittel}
            by={post.person_navn}
            dato={post.dato}
            id={post.id}
          />
        )) : <h1>Ingen ønsker funnet!</h1>}
      </main>
    </div>
  );
};

export default AlleØnsker;

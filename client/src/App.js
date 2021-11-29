import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css';
import "./styles/base.css";

import Header from "./components/Header";
import AlleØnsker from "./components/AlleØnsker";
import CreatePost from "./components/CreatePost";
import PostItem from "./components/PostItem";
import EditerBrukere from "./components/EditerBrukere";
import ØnskeDetaljer from "./components/ØnskeDetaljer";
import EndreØnske from "./components/EndreØnske";
//import Handleliste from "./components/HandleListe";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
        <Route exact path="/"  element={<AlleØnsker />} />
          <Route exact path="/new-post"  element={<CreatePost />} />
          <Route exact path="/posts"  element={<PostItem />} />
          <Route exact path="/brukere"  element={<EditerBrukere />} />
          <Route exact path="/detaljer/:id" element={<ØnskeDetaljer />} />
          <Route exact path="/endre/:id" element={<EndreØnske />} />
            
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import Axios from "axios";
import { Link  } from 'react-router-dom';
import "../styles/posts.css";

import Header from "./Header";

const PostItem = (props) => {

  const deleteØnske = async (id) => {
      await Axios.post("http://localhost:3001/delete", {
        id: id 
      });
    };

  const detaljer = async (id) => {
    await Axios.post("http://localhost:3001/detaljer", {
      id: id
    });
  };
  
  return (
    <div>
      <article className="post-item">
        <h2>{props.tittel}</h2>
        <p className="post-item-author">Av {props.by}</p>
        <p>{props.dato}</p>
        <div class="post-actions">
          <button className="btn btn-alt" onClick={() => deleteØnske(props.id)}>Slett Ønske</button>
          <a href={`/endre/${props.id}`}>Endre Ønske</a>
          <a className="btn" href={`/detaljer/${props.id}`}>
            Se Ønske
          </a> 
        </div>
      </article>
    </div>
  );
};
export default PostItem;

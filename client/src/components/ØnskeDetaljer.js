import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import ColoredLine from './ColoredLine';

const ØnskeDetaljer = (props) => {
const { id } = useParams();

const [ønske, setØnske] = useState([]);

  useEffect(async () => {
      
    const result = await Axios.get(`http://localhost:3001/detaljer/${id}`);
    setØnske(result.data[0]);
    console.log(result.data);
  }, []);
    console.log(ønske);

    return <div>
        <body>
  
  <main id="post-detail">
    <h1>{ønske.tittel}</h1>
    <section id="post-meta">
      {ønske.dato}
    </section>
    <ColoredLine color="black"/>
    <section>
      <p id="body">{ønske.body}</p>
    </section>
    <div class="post-actions">
          
          <a className="btn" href="/">
            Tilbake
          </a> 
        </div>
  </main>
</body>
    </div>
}

export default ØnskeDetaljer;

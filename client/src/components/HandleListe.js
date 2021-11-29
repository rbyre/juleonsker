// import React, { useState } from 'react';
// import Axios from 'axios';

// const [navn, setNavn] = useState('');
// const [kategoriId, setKategoriId] = useState(1);
// const [beskrivelse, setBeskrivelse] = useState('');

// const sendVare = () =>{
//     Axios.post('http://localhost:3001/create', {navn: navn, beskrivelse: beskrivelse, kategoriId: kategoriId
//   }).then(() =>{
//     console.log("success");
//   });
  
//   };

// const Handleliste = (props) => {
//     return (
//         <div className="form">
//       <label>Varenavn: </label>
//         <input 
//         type="text" 
//         name="navn" 
//         onChange={(e) => {
//           setNavn(e.target.value);
//         }}/>
//         <label>Beskrivelse:</label>
//         <input 
//         type="text" 
//         name="beskrivelse" 
//         onChange={(e) =>{
//           setBeskrivelse(e.target.value);
//         }}
//         />
//         <label>kategoriId:</label>
//         <input 
//         type="number" 
//         name="kategoriId" 
//         onChange={(e) => {
//           setKategoriId(e.target.value);
//         }}
//         />

//         <button onClick={sendVare}>Legg til vare</button>
//       </div>
//     )
// }

// export default Handleliste;
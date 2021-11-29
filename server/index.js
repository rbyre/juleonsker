const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
const db = require('./database');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Hent personer fra db
app.get('/personer', async (req, res) => {
    const [personer] = await db.query('SELECT * FROM personer');
    res.send(personer);
})

// Legg inn et ønske i db table ønsker
app.post("/create", async (req,res) => {
    const data = [
        req.body.tittel,
        req.body.link,
        req.body.beskrivelse,
        req.body.authorId
    ];

    await db.query('INSERT INTO ønsker (tittel, url, body, author_id) VALUES (?)', [
        data,
    ], 
    );
    res.redirect('/');
});

//oppdater ønske
app.put("/oppdater", async (req,res) => {
    
    const nyTittel = req.body.tittel;
    const nyUrl = req.body.link;
    const nyBody = req.body.beskrivelse;
    const nyId = req.body.id;
    
    const query = `
    UPDATE ønsker SET tittel='${nyTittel}', url='${nyUrl}', body='${nyBody}' WHERE id=${nyId}
    `;
    

    await db.query(query);
    
    res.redirect('/');
});

// legg inn ny person i person tabell
app.post("/addUser", async (req, res) => {
    const data = [
        req.body.navn,
        req.body.epost,
        req.body.oppførselId
    ];

    await db.query('INSERT INTO personer (navn, email, oppførsel_id) VALUES (?)', [
        data
    ],
    );
    res.redirect('/');
});

// slett person i person tabell
app.post("/deleteUser", async (req, res) => {
    const id = req.body.id;
    
    await db.query("DELETE FROM personer WHERE id = ?", [id]); 
    res.redirect('/');
});

// slett ønske fra ønsker tabell 
app.post("/delete", async (req,res) => {
    const id = req.body.id;

    await db.query("DELETE FROM ønsker WHERE id = ?", [id] );
    res.redirect('/');
    
});

// hent alle ønsker, personer og oppførsel fra db, utvalgte kolonner
app.get('/', async (req, res) => {

    const query = `
    SELECT ønsker.id, ønsker.tittel, ønsker.dato, personer.navn AS person_navn FROM ønsker 
    INNER JOIN personer ON ønsker.author_id = personer.id
    `;

    const [allposts] = await db.query(query);
    res.send(allposts);
});


// henter detaljer for ønske
app.get('/detaljer/:id', async (req, res) => {

    const query = `
    SELECT ønsker.*, personer.navn AS personer_navn, personer.email AS personer_email FROM ønsker 
    INNER JOIN personer ON ønsker.author_id = personer.id
    WHERE ønsker.id = ?
    `;

    const [allposts] = await db.query(query, [req.params.id]);
    res.send(allposts);
});


app.listen(3001, () => {
    console.log("running on port 3001");
});

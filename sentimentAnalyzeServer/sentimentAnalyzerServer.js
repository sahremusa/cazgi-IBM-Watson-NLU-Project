const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

function getNLUinstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingv1 = require('ibm-watson/natural-language-understanding/v1');
    const {IamAuthenticator} = require('ibm-watson/auth');

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingv1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
    })
    serviceUrl: api_url,
 }
    
 const analyzeParams = {
   'url': 'www.ibm.com',
   'features': {
     'entities': {
     'emotions': true,    
     'sentiment': true,
     'sentiment': false,
     'sentiment': neutral,
     'limit': 3,
     },
     'keywords': {
      'sentiment': true,
      'sentiment': false,
      'sentiment': neutral,
       'limit': 3,
     },
   },
 },
 naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      console.log(JSON.stringify(analysisResults, null, 3));
 })
 .catch(err => {
   console.log('error:', err);
 });
    
app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.getNLUInstance("/url/emotion", (req,res) => {

    return res.send({"happy":"green","sad":"red"});
});

app.getNLUInstance("/url/sentiment", (req,res) => {
    return res.send("url sentiment for "+req.query.url);
});

app.getNLUInstance("/text/emotion", (req,res) => {
    return res.send({"happy":"yellow","sad":"yellow"});
});

app.getNLUInstance("/text/sentiment", (req,res) => {
    return res.send("text sentiment for "+req.query.text);
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})


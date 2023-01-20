const firebaseConfig = {
    apiKey: "AIzaSyA02KhAQUiLIXk-iYIsGViPBsPNqwdRMqo",
    authDomain: "votacao-85246.firebaseapp.com",
    databaseURL: "https://votacao-85246-default-rtdb.firebaseio.com",
    projectId: "votacao-85246",
    storageBucket: "votacao-85246.appspot.com",
    messagingSenderId: "893259716051",
    appId: "1:893259716051:web:8bb94e72458fcfa5c2cb26",
    measurementId: "G-0DP6V8D392"
  };

  firebase.initializeApp(firebaseConfig)
  var database = firebase.database()

var numeroDeVotosPelé = 0;
var numeroDeVotosMaradona = 0;

database.ref("votoP").on("value", data=>{
  numeroDeVotosPelé =  data.val();
})

database.ref("votoM").on("value", data=>{
  numeroDeVotosMaradona =  data.val();
})

function votoPelé(){
  database.ref("/").update({
    votoP: numeroDeVotosPelé + 1
})    
    window.location = 'votacao3.html';
}

function votoMaradona(){
  database.ref("/").update({
    votoM: numeroDeVotosMaradona + 1
})    
window.location = 'votacao3.html'
}
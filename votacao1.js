
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

  var numeroDeVotosMessi = 0;
var numeroDeVotosCR7 = 0;

database.ref("votoMe").on("value", data=>{
  numeroDeVotosMessi =  data.val();
})

database.ref("votoCr").on("value", data=>{
  numeroDeVotosCR7 =  data.val();
})

function votoCr7(){
  database.ref("/").update({
    votoCr: numeroDeVotosCR7 + 1
})    
    window.location = 'votacao2.html';
}

function votoMessi(){
  database.ref("/").update({
    votoMe: numeroDeVotosCR7 + 1
})    
    window.location = 'votacao2.html';
}
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
 
 var numeroDeVotosBruxo = 0
 var numeroDeVotosFenômeno = 0

 database.ref("votoB").on("value", data=>{
    numeroDeVotosBruxo =  data.val();
 })

 database.ref("votoF").on("value", data=>{
    numeroDeVotosFenômeno =  data.val();
 })

function votoBruxo(){
    database.ref("/").update({
        votoB: numeroDeVotosBruxo + 1
    })    
    window.location = 'resultados.html';
}

function votoFenômeno(){
    database.ref("/").update({
        votoF: numeroDeVotosFenômeno + 1
    })    
    window.location = 'resultados.html';
}
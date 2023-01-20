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

  var Bruxo = 0;
var fenômeno = 0;
var pelé = 0;
var Maradona = 0;
var Cr7 = 0;
var Messi = 0;

function carregou(){
  database.ref("votoB").on("value", data=>{
    Bruxo = data.val();
    document.getElementById("idDoBruxo").innerHTML = Bruxo;
  })

  database.ref("votoF").on("value", data=>{
    fenômeno = data.val();
    document.getElementById("idDoFenômeno").innerHTML = fenômeno;
  })

  database.ref("votoP").on("value", data=>{
    pelé = data.val();
    document.getElementById("idDoPelé").innerHTML = pelé;
  })

  database.ref("votoM").on("value", data=>{
    Maradona = data.val();
    document.getElementById("idDoMaradona").innerHTML = Maradona;
  })

  database.ref("votoCr").on("value", data=>{
   Cr7 = data.val();
    document.getElementById("idDoRobo").innerHTML = Cr7;
  })

  database.ref("votoMe").on("value", data=>{
    Messi = data.val();
    document.getElementById("idDoEt").innerHTML = Messi;
  })

    document.getElementById("idDoBruxo").innerHTML = Bruxo;
    document.getElementById("idDoFenômeno").innerHTML = fenômeno;
    document.getElementById("idDoPelé").innerHTML = pelé;
    document.getElementById("idDoMaradona").innerHTML = Maradona;
    document.getElementById("idDoRobo").innerHTML = Cr7;
    document.getElementById("idDoEt").innerHTML = Messi;
}
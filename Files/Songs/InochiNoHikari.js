

function Jissou(uta) {

	var chord1 = document.getElementById("chord1");
	var chord2 = document.getElementById("chord2");
	var chord3 = document.getElementById("chord3");
	var chord4 = document.getElementById("chord4");
	var chord5 = document.getElementById("chord5");
	var chord6 = document.getElementById("chord6");
	var chord7 = document.getElementById("chord7");
	var chord8 = document.getElementById("chord8");
	var chord9 = document.getElementById("chord9");
	var chord10 = document.getElementById("chord10");
	var chord11 = document.getElementById("chord11");
	var chord12 = document.getElementById("chord12");
	var chord13 = document.getElementById("chord13");
	var chord14 = document.getElementById("chord14");
	var chord15 = document.getElementById("chord15");
	var chord16 = document.getElementById("chord16");
	var chord17 = document.getElementById("chord17");
	var chord18 = document.getElementById("chord18");
	var chord19 = document.getElementById("chord19");
	var chord20 = document.getElementById("chord20");
	var chord21 = document.getElementById("chord21");
	var chord22 = document.getElementById("chord22");
	var chord23 = document.getElementById("chord23");

	chord1.innerHTML = uta.getSharpA();
	chord2.innerHTML = uta.getSharpD();
	chord3.innerHTML = uta.getSharpFSharp() + "m";
	chord4.innerHTML = uta.getSharpE();
	chord5.innerHTML = uta.getSharpA();
	chord6.innerHTML = uta.getSharpD();
	chord7.innerHTML = uta.getSharpFSharp() + "m";
	chord8.innerHTML = uta.getSharpE();
	chord9.innerHTML = uta.getSharpB() + "m";
	chord10.innerHTML = uta.getSharpA() + "/" + uta.getSharpCSharp();
	chord11.innerHTML = uta.getSharpD();
	chord12.innerHTML = uta.getSharpB() + "m";
	chord13.innerHTML = uta.getSharpE() + "sus4";
	chord14.innerHTML = uta.getSharpE();

	//サビ
	chord15.innerHTML = uta.getSharpA();
	chord16.innerHTML = uta.getSharpD();
	chord17.innerHTML = uta.getSharpFSharp() + "m";
	chord18.innerHTML = uta.getSharpE();
	chord19.innerHTML = uta.getSharpA();
	chord20.innerHTML = uta.getSharpFSharp() + "m";
	chord21.innerHTML = uta.getSharpB() + "m";
	chord22.innerHTML = uta.getSharpE();
	chord23.innerHTML = uta.getSharpA();


}














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
	var chord24 = document.getElementById("chord24");
	var chord25 = document.getElementById("chord25");
	var chord26 = document.getElementById("chord26");

	
	chord1.innerHTML = uta.getFlatF();
	chord2.innerHTML = uta.getFlatEFlat() + "/" + uta.getFlatF();
	chord3.innerHTML = uta.getFlatBFlat() + "m7";
	chord4.innerHTML = uta.getFlatF();
	chord5.innerHTML = uta.getFlatBFlat() + "/" + uta.getFlatD();
	chord6.innerHTML = uta.getFlatC() + "/" + uta.getFlatE();

	chord7.innerHTML = uta.getFlatF();
	chord8.innerHTML = uta.getFlatEFlat() + "/" + uta.getFlatF();
	chord9.innerHTML = uta.getFlatBFlat();
	chord10.innerHTML = uta.getFlatDFlat() + "/" + uta.getFlatEFlat();
	chord11.innerHTML = uta.getFlatF();
	chord12.innerHTML = uta.getFlatEFlat() + "/" + uta.getFlatF();

	//サビ
	chord13.innerHTML = uta.getFlatBFlat() + "m7";
	chord14.innerHTML = uta.getFlatF() + "/" + uta.getFlatA();
	chord15.innerHTML = uta.getFlatD() + "m7";
	
	chord16.innerHTML = uta.getFlatG() + "m7";
	chord17.innerHTML = uta.getFlatC() + "7";
	chord18.innerHTML = uta.getFlatF();
	chord19.innerHTML = uta.getFlatC() + "m7";
	chord20.innerHTML = uta.getFlatF() + "7";

	chord21.innerHTML = uta.getFlatBFlat() + "m7";
	chord22.innerHTML = uta.getFlatF() + "/" + uta.getFlatA();
	chord23.innerHTML = uta.getFlatD() + "m7";

	chord24.innerHTML = uta.getFlatG() + "m7";
	chord25.innerHTML = uta.getFlatC() + "7";
	chord26.innerHTML = uta.getFlatF();

}




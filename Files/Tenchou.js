



function Uta (key) {

	// key をファイナルにしたら良いかな？ 「var KEY = "C"」 って感じ
	this.key = key;

	this.notesSharp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
	this.notesFlat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

	// notesSharp の要素だから最初に sharp を書く。でも、これは普通の C。
	this.sharpC = this.notesSharp[0];
	this.sharpCSharp = this.notesSharp[1];
	this.sharpD =  this.notesSharp[2];
	this.sharpDSharp = this.notesSharp[3];
	this.sharpE = this.notesSharp[4];
	this.sharpF = this.notesSharp[5];
	this.sharpFSharp = this.notesSharp[6];
	this.sharpG = this.notesSharp[7];
	this.sharpGSharp = this.notesSharp[8];
	this.sharpA = this.notesSharp[9];
	this.sharpASharp = this.notesSharp[10];
	this.sharpB = this.notesSharp[11];

	// notesFlat
	this.flatC = this.notesFlat[0];
	this.flatDFlat = this.notesFlat[1];
	this.flatD = this.notesFlat[2];
	this.flatEFlat = this.notesFlat[3];
	this.flatE = this.notesFlat[4];
	this.flatF = this.notesFlat[5];
	this.flatGFlat = this.notesFlat[6];
	this.flatG = this.notesFlat[7];
	this.flatAFLat = this.notesFlat[8];
	this.flatA = this.notesFlat[9];
	this.flatBFlat = this.notesFlat[10];
	this.flatB = this.notesFlat[11];




	
		// 取得や設定するメソッドをアクション（？）として宣言しないといけないらしい
		this.getKey = getKey;
		
		this.getNotesSharp = getNotesSharp;
		this.getNotesFlat = getNotesFlat;

		this.setKey = setKey;
		
		this.setNotesSharp = setNotesSharp;
		this.setNotesFlat = setNotesFlat;

		this.setSharpC = setSharpC;
		this.setSharpCSharp = setSharpCSharp;
		this.setSharpD = setSharpD;
		this.setSharpDSharp = setSharpDSharp;
		this.setSharpE = setSharpE;
		this.setSharpF = setSharpF;
		this.setSharpFSharp = setSharpFSharp;
		this.setSharpG = setSharpG;
		this.setSharpGSharp = setSharpGSharp;
		this.setSharpA = setSharpA;
		this.setSharpASharp = setSharpASharp;
		this.setSharpB = setSharpB;

		this.getSharpC = getSharpC;
		this.getSharpCSharp = getSharpCSharp;
		this.getSharpD = getSharpD;
		this.getSharpDSharp = getSharpDSharp;
		this.getSharpE = getSharpE;
		this.getSharpF = getSharpF;
		this.getSharpFSharp = getSharpFSharp;
		this.getSharpG = getSharpG;
		this.getSharpGSharp = getSharpGSharp;
		this.getSharpA = getSharpA;
		this.getSharpASharp = getSharpASharp;
		this.getSharpB = getSharpB;

		this.setFlatC = setFlatC;
		this.setFlatDFlat = setFlatDFlat;
		this.setFlatD = setFlatD;
		this.setFlatEFlat = setFlatEFlat;
		this.setFlatE = setFlatE;
		this.setFlatF = setFlatF;
		this.setFlatGFlat = setFlatGFlat;
		this.setFlatG = setFlatG;
		this.setFlatAFlat = setFlatAFlat;
		this.setFlatA = setFlatA;
		this.setFlatBFlat = setFlatBFlat;
		this.setFlatB = setFlatB;

		this.getFlatC = getFlatC;
		this.getFlatDFlat = getFlatDFlat;
		this.getFlatD = getFlatD;
		this.getFlatEFlat = getFlatEFlat;
		this.getFlatE = getFlatE;
		this.getFlatF = getFlatF;
		this.getFlatGFlat = getFlatGFlat;
		this.getFlatG = getFlatG;
		this.getFlatAFlat = getFlatAFlat;
		this.getFlatA = getFlatA;
		this.getFlatBFlat = getFlatBFlat;
		this.getFLatB = getFlatB;

		this.Tenchou = Tenchou;







	//取得
	function getKey() {
		return this.key;
	}
	
	function getNotesSharp() {
		return this.notesSharp;
	}
	function getNotesFlat() {
		return this.notesFlat;
	}

	//設定
	function setKey(key) {
		this.key = key;
	}
	
	function setNotesSharp(notesSharp) {
		this.notesSharp = notesSharp;
	}
	function setNotesFlat(notesFlat) {
		this.notesFlat = notesFlat;
	}





	// sharpNotes を設定
	function setSharpC(sharpC) {
		this.sharpC = sharpC;
	}
	function setSharpCSharp(sharpCSharp) {
		this.sharpCSharp = sharpCSharp;
	}
	function setSharpD(sharpD) {
		this.sharpD = sharpD;
	}
	function setSharpDSharp(sharpDSharp) {
		this.sharpDSharp = sharpDSharp;
	}
	function setSharpE(sharpE) {
		this.sharpE = sharpE;
	}
	function setSharpF(sharpF) {
		this.sharpF = sharpF;
	}
	function setSharpFSharp(sharpFSharp) {
		this.sharpFSharp = sharpFSharp;
	}
	function setSharpG(sharpG) {
		this.sharpG = sharpG;
	}
	function setSharpGSharp(sharpGSharp) {
		this.sharpGSharp = sharpGSharp;
	}
	function setSharpA(sharpA) {
		this.sharpA = sharpA;
	}
	function setSharpASharp(sharpASharp) {
		this.sharpASharp = sharpASharp;
	}
	function setSharpB(sharpB) {
		this.sharpB = sharpB;
	}


	// sharpNotes を取得
	function getSharpC() {
		return this.sharpC;
	}
	function getSharpCSharp() {
		return this.sharpCSharp;
	}
	function getSharpD() {
		return this.sharpD;
	}
	function getSharpDSharp() {
		return this.sharpDSharp;
	}
	function getSharpE() {
		return this.sharpE;
	}
	function getSharpF() {
		return this.sharpF;
	}
	function getSharpFSharp() {
		return this.sharpFSharp;
	}
	function getSharpG() {
		return this.sharpG;
	}
	function getSharpGSharp() {
		return this.sharpGSharp;
	}
	function getSharpA() {
		return this.sharpA;
	}
	function getSharpASharp() {
		return this.sharpASharp;
	}
	function getSharpB() {
		return this.sharpB;
	}

	


	// flatNotes を設定する
	function setFlatC(flatC) {
		this.flatC = flatC;
	}
	function setFlatDFlat(flatDFlat) {
		this.flatDFlat = flatDFlat;
	}
	function setFlatD(flatD) {
		this.flatD = flatD;
	}
	function setFlatEFlat(flatEFlat) {
		this.flatEFlat = flatEFlat;
	}
	function setFlatE(flatE) {
		this.flatE = flatE;
	}
	function setFlatF(flatF) {
		this.flatF = flatF;
	}
	function setFlatGFlat(flatGFlat) {
		this.flatGFlat = flatGFlat;
	}
	function setFlatG(flatG) {
		this.flatG = flatG;
	}
	function setFlatAFlat(flatAFLat) {
		this.flatAFLat = flatAFLat;
	}
	function setFlatA(flatA) {
		this.flatA = flatA;
	}
	function setFlatBFlat(flatBFlat) {
		this.flatBFlat = flatBFlat;
	}
	function setFlatB(flatB) {
		this.flatB = flatB;
	}



	// flatNotes を取得する
	function getFlatC() {
		return this.flatC;
	}
	function getFlatDFlat() {
		return this.flatDFlat;
	}
	function getFlatD() {
		return this.flatD;
	}
	function getFlatEFlat() {
		return this.flatEFlat;
	}
	function getFlatE() {
		return this.flatE;
	}
	function getFlatF() {
		return this.flatF;
	}
	function getFlatGFlat() {
		return this.flatGFlat;
	}
	function getFlatG() {
		return this.flatG;
	}
	function getFlatAFlat() {
		return this.flatAFLat;
	}
	function getFlatA() {
		return this.flatA;
	}
	function getFlatBFlat() {
		return this.flatBFlat;
	}
	function getFlatB() {
		return this.flatB;
	}







	function Tenchou(uta) {

		
		// var oldSharpCPosition = notesArray.indexOf("C"); を、前に宣言しとけばいい
		// そうすると、一回だけ宣言する必要がある

		
		var notesArray = uta.getNotesSharp();
		var notesArrayFlat = uta.getNotesFlat();

		
		var oldKey = uta.getKey();
		var position1 = notesArray.indexOf(oldKey);


		var newKey = document.getElementById("keyHako").value;
		var position2 = notesArray.indexOf(newKey);

		++position1;
		++position2;

		var sa = 0;

		if (position1 == position2) {
			
			uta.setSharpC("C");
			uta.setSharpCSharp("C♯");
			uta.setSharpD("D");
			uta.setSharpDSharp("D♯");
			uta.setSharpE("E");
			uta.setSharpF("F");
			uta.setSharpFSharp("F♯");
			uta.setSharpG("G");
			uta.setSharpGSharp("G♯");
			uta.setSharpA("A");
			uta.setSharpASharp("A♯");
			uta.setSharpB("B");

			uta.setFlatC("C");
			uta.setFlatDFlat("D♭");
			uta.setFlatD("D");
			uta.setFlatEFlat("E♭");
			uta.setFlatE("E");
			uta.setFlatF("F");
			uta.setFlatGFlat("G♭");
			uta.setFlatG("G");
			uta.setFlatAFlat("A♭");
			uta.setFlatA("A");
			uta.setFlatBFlat("B♭");
			uta.setFlatB("B");

		}
		else if (position1 < position2) {
			//上がった
			//これを全部 for文にしたいけど、全ての音符はぞれぞれの設定する関数があるからできる？？

			

			sa = position2 - position1;

			var oldSharpCPosition = notesArray.indexOf("C");
			var newSharpCPosition = oldSharpCPosition + sa;
				if (newSharpCPosition > 11) {
					newSharpCPosition -= 12;
				}
			uta.setSharpC(notesArray[newSharpCPosition]);


			var oldSharpCSharpPosition = notesArray.indexOf("C♯");
			var newSharpCSharpPosition = oldSharpCSharpPosition + sa;
				if (newSharpCSharpPosition > 11) {
					newSharpCSharpPosition -= 12;
				}
			uta.setSharpCSharp(notesArray[newSharpCSharpPosition]);

			var oldSharpDPosition = notesArray.indexOf("D");
			var newSharpDPosition = oldSharpDPosition + sa;
				if (newSharpDPosition > 11) {
					newSharpDPosition -= 12;
				}
			uta.setSharpD(notesArray[newSharpDPosition]);

			var oldSharpDSharpPosition = notesArray.indexOf("D♯");
			var newSharpDSharpPosition = oldSharpDSharpPosition + sa;
				if (newSharpDSharpPosition > 11) {
					newSharpDSharpPosition -= 12;
				}
			uta.setSharpDSharp(notesArray[newSharpDSharpPosition]);

			var oldSharpEPosition = notesArray.indexOf("E");
			var newSharpEPosition = oldSharpEPosition + sa;
				if (newSharpEPosition > 11) {
					newSharpEPosition -= 12;
				}
			uta.setSharpE(notesArray[newSharpEPosition]);

			var oldSharpFPosition = notesArray.indexOf("F");
			var newSharpFPosition = oldSharpFPosition + sa;
				if (newSharpFPosition > 11) {
					newSharpFPosition -= 12;
				}
			uta.setSharpF(notesArray[newSharpFPosition]);

			var oldSharpFSharpPosition = notesArray.indexOf("F♯");
			var newSharpFSharpPosition = oldSharpFSharpPosition + sa;
				if (newSharpFSharpPosition > 11) {
					newSharpFSharpPosition -= 12;
				}
			uta.setSharpFSharp(notesArray[newSharpFSharpPosition]);

			var oldSharpGPosition = notesArray.indexOf("G");
			var newSharpGPosition = oldSharpGPosition + sa;
				if (newSharpGPosition > 11) {
					newSharpGPosition -= 12;
				}
			uta.setSharpG(notesArray[newSharpGPosition]);

			var oldSharpGSharpPosition = notesArray.indexOf("G♯");
			var newSharpGSharpPosition = oldSharpGSharpPosition + sa;
				if (newSharpGSharpPosition > 11) {
					newSharpGSharpPosition -= 12;
				}
			uta.setSharpGSharp(notesArray[newSharpGSharpPosition]);

			var oldSharpAPosition = notesArray.indexOf("A");
			var newSharpAPosition = oldSharpAPosition + sa;
				if (newSharpAPosition > 11) {
					newSharpAPosition -= 12;
				}
			uta.setSharpA(notesArray[newSharpAPosition]);

			var oldSharpASharpPosition = notesArray.indexOf("A♯");
			var newSharpASharpPosition = oldSharpASharpPosition + sa;
				if (newSharpASharpPosition > 11) {
					newSharpASharpPosition -= 12;
				}
			uta.setSharpASharp(notesArray[newSharpASharpPosition]);

			var oldSharpBPosition = notesArray.indexOf("B");
			var newSharpBPosition = oldSharpBPosition + sa;
				if (newSharpBPosition > 11) {
					newSharpBPosition -= 12;
				}
			uta.setSharpB(notesArray[newSharpBPosition]);

			
			// 変（フラット）
			var oldFlatCPosition = notesArrayFlat.indexOf("C");
			var newFlatCPosition = oldFlatCPosition + sa;
				if (newFlatCPosition > 11) {
					newFlatCPosition -= 12;
				}
			uta.setFlatC(notesArrayFlat[newFlatCPosition]);

			var oldFlatDFlatPosition = notesArrayFlat.indexOf("D♭");
			var newFlatDFlatPosition = oldFlatDFlatPosition + sa;
				if (newFlatDFlatPosition > 11) {
					newFlatDFlatPosition -= 12;
				}
			uta.setFlatDFlat(notesArrayFlat[newFlatDFlatPosition]);

			var oldFlatDPosition = notesArrayFlat.indexOf("D");
			var newFlatDPosition = oldFlatDPosition + sa;
				if (newFlatDPosition > 11) {
					newFlatDPosition -= 12;
				}
			uta.setFlatD(notesArrayFlat[newFlatDPosition]);

			var oldFlatEFlatPosition = notesArrayFlat.indexOf("E♭");
			var newFlatEFlatPosition = oldFlatEFlatPosition + sa;
				if (newFlatEFlatPosition > 11) {
					newFlatEFlatPosition -= 12;
				}
			uta.setFlatEFlat(notesArrayFlat[newFlatEFlatPosition]);

			var oldFlatEPosition = notesArrayFlat.indexOf("E");
			var newFlatEPosition = oldFlatEPosition + sa;
				if (newFlatEPosition > 11) {
					newFlatEPosition -= 12;
				}
			uta.setFlatE(notesArrayFlat[newFlatEPosition]);

			var oldFlatFPosition = notesArrayFlat.indexOf("F");
			var newFlatFPosition = oldFlatFPosition + sa;
				if(newFlatFPosition > 11) {
					newFlatFPosition -= 12;
				}
			uta.setFlatF(notesArrayFlat[newFlatFPosition]);

			var oldFlatGFlatPosition = notesArrayFlat.indexOf("G♭");
			var newFlatGFlatPosition = oldFlatGFlatPosition + sa;
				if(newFlatGFlatPosition > 11) {
					newFlatGFlatPosition -= 12;
				}
			uta.setFlatGFlat(notesArrayFlat[newFlatGFlatPosition]);

			var oldFlatGPosition = notesArrayFlat.indexOf("G");
			var newFlatGPosition = oldFlatGPosition + sa;
				if (newFlatGPosition > 11) {
					newFlatGPosition -= 12;
				}
			uta.setFlatG(notesArrayFlat[newFlatGPosition]);

			var oldFlatAFlatPosition = notesArrayFlat.indexOf("A♭");
			var newFlatAFlatPosition = oldFlatAFlatPosition + sa;
				if (newFlatAFlatPosition > 11) {
					newFlatAFlatPosition -= 12;
				}
			uta.setFlatAFlat(notesArrayFlat[newFlatAFlatPosition]);

			var oldFlatAPosition = notesArrayFlat.indexOf("A");
			var newFlatAPosition = oldFlatAPosition + sa;
				if (newFlatAPosition > 11) {
					newFlatAPosition -= 12;
				}
			uta.setFlatA(notesArrayFlat[newFlatAPosition]);

			var oldFlatBFlatPosition = notesArrayFlat.indexOf("B♭");
			var newFlatBFlatPosition = oldFlatBFlatPosition + sa;
				if (newFlatBFlatPosition > 11) {
					newFlatBFlatPosition -= 12;
				}
			uta.setFlatBFlat(notesArrayFlat[newFlatBFlatPosition]);

			var oldFlatBPosition = notesArrayFlat.indexOf("B");
			var newFlatBPosition = oldFlatBPosition + sa;
				if (newFlatBPosition > 11) {
					newFlatBPosition -= 12;
				}
			uta.setFlatB(notesArrayFlat[newFlatBPosition]);





		} else if (position1 > position2) {
			//下がった
			sa = position1 - position2;


			var oldSharpCPosition = notesArray.indexOf("C");
			var newSharpCPosition = oldSharpCPosition - sa;
				if (newSharpCPosition < 0) {
					newSharpCPosition += 12;
				}
			uta.setSharpC(notesArray[newSharpCPosition]);

			var oldSharpCSharpPosition = notesArray.indexOf("C♯");
			var newSharpCSharpPosition = oldSharpCSharpPosition - sa;
				if (newSharpCSharpPosition < 0) {
					newSharpCSharpPosition += 12;
				}
			uta.setSharpCSharp(notesArray[newSharpCSharpPosition]);

			var oldSharpDPosition = notesArray.indexOf("D");
			var newSharpDPosition = oldSharpDPosition - sa;
				if (newSharpDPosition < 0) {
					newSharpDPosition += 12;
				}
			uta.setSharpD(notesArray[newSharpDPosition]);

			var oldSharpDSharpPosition = notesArray.indexOf("D♯");
			var newSharpDSharpPosition = oldSharpDSharpPosition - sa;
				if (newSharpDSharpPosition < 0) {
					newSharpDSharpPosition += 12;
				}
			uta.setSharpDSharp(notesArray[newSharpDSharpPosition]);

			var oldSharpEPosition = notesArray.indexOf("E");
			var newSharpEPosition = oldSharpEPosition - sa;
				if (newSharpEPosition < 0) {
					newSharpEPosition += 12;
				}
			uta.setSharpE(notesArray[newSharpEPosition]);

			var oldSharpFPosition = notesArray.indexOf("F");
			var newSharpFPosition = oldSharpFPosition - sa;
				if (newSharpFPosition < 0) {
					newSharpFPosition += 12;
				}
			uta.setSharpF(notesArray[newSharpFPosition]);

			var oldSharpFSharpPosition = notesArray.indexOf("F♯");
			var newSharpFSharpPosition = oldSharpFSharpPosition - sa;
				if (newSharpFSharpPosition < 0) {
					newSharpFSharpPosition += 12;
				}
			uta.setSharpFSharp(notesArray[newSharpFSharpPosition]);

			var oldSharpGPosition = notesArray.indexOf("G");
			var newSharpGPosition = oldSharpGPosition - sa;
				if (newSharpGPosition < 0) {
					newSharpGPosition += 12;
				}
			uta.setSharpG(notesArray[newSharpGPosition]);

			var oldSharpGSharpPosition = notesArray.indexOf("G♯");
			var newSharpGSharpPosition = oldSharpGSharpPosition - sa;
				if (newSharpGSharpPosition < 0) {
					newSharpGSharpPosition += 12;
				}
			uta.setSharpGSharp(notesArray[newSharpGSharpPosition]);

			var oldSharpAPosition = notesArray.indexOf("A");
			var newSharpAPosition = oldSharpAPosition - sa;
				if (newSharpAPosition < 0) {
					newSharpAPosition += 12;
				}
			uta.setSharpA(notesArray[newSharpAPosition]);

			var oldSharpASharpPosition = notesArray.indexOf("A♯");
			var newSharpASharpPosition = oldSharpASharpPosition - sa;
				if (newSharpASharpPosition < 0) {
					newSharpASharpPosition += 12;
				}
			uta.setSharpASharp(notesArray[newSharpASharpPosition]);

			var oldSharpBPosition = notesArray.indexOf("B");
			var newSharpBPosition = oldSharpBPosition - sa;
				if (newSharpBPosition < 0) {
					newSharpBPosition += 12;
				}
			uta.setSharpB(notesArray[newSharpBPosition]);



			// 変（フラット）
			var oldFlatCPosition = notesArrayFlat.indexOf("C");
			var newFlatCPosition = oldFlatCPosition - sa;
				if (newFlatCPosition < 0) {
					newFlatCPosition += 12;
				}
			uta.setFlatC(notesArrayFlat[newFlatCPosition]);

			var oldFlatDFlatPosition = notesArrayFlat.indexOf("D♭");
			var newFlatDFlatPosition = oldFlatDFlatPosition - sa;
				if (newFlatDFlatPosition < 0) {
					newFlatDFlatPosition += 12;
				}
			uta.setFlatDFlat(notesArrayFlat[newFlatDFlatPosition]);

			var oldFlatDPosition = notesArrayFlat.indexOf("D");
			var newFlatDPosition = oldFlatDPosition - sa;
				if (newFlatDPosition < 0) {
					newFlatDPosition += 12;
				}
			uta.setFlatD(notesArrayFlat[newFlatDPosition]);

			var oldFlatEFlatPosition = notesArrayFlat.indexOf("E♭");
			var newFlatEFlatPosition = oldFlatEFlatPosition - sa;
				if (newFlatEFlatPosition < 0) {
					newFlatEFlatPosition += 12;
				}
			uta.setFlatEFlat(notesArrayFlat[newFlatEFlatPosition]);

			var oldFlatEPosition = notesArrayFlat.indexOf("E");
			var newFlatEPosition = oldFlatEPosition - sa;
				if (newFlatEPosition < 0) {
					newFlatEPosition += 12;
				}
			uta.setFlatE(notesArrayFlat[newFlatEPosition]);

			var oldFlatFPosition = notesArrayFlat.indexOf("F");
			var newFlatFPosition = oldFlatFPosition - sa;
				if (newFlatFPosition < 0) {
					newFlatFPosition += 12;
				}
			uta.setFlatF(notesArrayFlat[newFlatFPosition]);

			var oldFlatGFlatPosition = notesArrayFlat.indexOf("G♭");
			var newFlatGFlatPosition = oldFlatGFlatPosition - sa;
				if (newFlatGFlatPosition < 0) {
					newFlatGFlatPosition += 12;
				}
			uta.setFlatGFlat(notesArrayFlat[newFlatGFlatPosition]);

			var oldFlatGPosition = notesArrayFlat.indexOf("G");
			var newFlatGPosition = oldFlatGPosition - sa;
				if (newFlatGPosition < 0) {
					newFlatGPosition += 12;
				}
			uta.setFlatG(notesArrayFlat[newFlatGPosition]);

			var oldFlatAFlatPosition = notesArrayFlat.indexOf("A♭");
			var newFlatAFlatPosition = oldFlatAFlatPosition - sa;
				if (newFlatAFlatPosition < 0) {
					newFlatAFlatPosition += 12;
				}
			uta.setFlatAFlat(notesArrayFlat[newFlatAFlatPosition]);

			var oldFlatAPosition = notesArrayFlat.indexOf("A");
			var newFlatAPosition = oldFlatAPosition - sa;
				if (newFlatAPosition < 0) {
					newFlatAPosition += 12;
				}
			uta.setFlatA(notesArrayFlat[newFlatAPosition]);

			var oldFlatBFlatPosition = notesArrayFlat.indexOf("B♭");
			var newFlatBFlatPosition = oldFlatBFlatPosition - sa;
				if (newFlatBFlatPosition < 0) {
					newFlatBFlatPosition += 12;
				}
			uta.setFlatBFlat(notesArrayFlat[newFlatBFlatPosition]);

			var oldFlatBPosition = notesArrayFlat.indexOf("B");
			var newFlatBPosition = oldFlatBPosition - sa;
				if (newFlatBPosition < 0) {
					newFlatBPosition += 12;
				}
			uta.setFlatB(notesArrayFlat[newFlatBPosition]);

		}



		//ここに case文をしたらいいかもしれない
		//case 1 というのは position1 = notesArray[0]; か直接に position1= "C";


		//uta.setNewKey(uta.getKey); //これが要るかどうか知らん。よく考えてから書いとけばいいかも。
		


		return uta;
	}
}	






































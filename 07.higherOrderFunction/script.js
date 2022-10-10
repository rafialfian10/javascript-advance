// //higher order function adalah function yang beroperasi pada function lain. Baik digunakan dalam argumen, maupun sebagai return value. 
// //Didalam javascript, function itu disebut dengan first class function. artinya inti dari javascript itu adalah function. Dimana function dalam javascript itu diperlakukan sebagai object.

function view(matkul, finish){
// 	//function view itu disebut dengan higher order function karena memliki function didalam argumen, sedangkan argumen finish dalam bentuk function itu disebut dengan callback 
	this.matkul = matkul;
	console.log('Mata kuliah ' + this.matkul + ' telah selesai');
	finish();
}

function finish(){
	alert('selamat telah meyelesaikan mata kuliah');
}

const matkul1 = new view('Pemrograman WEB', finish);

// //contoh lain paada higher orde function juga terdapat dalam:

setTimeout(function(){ //setTimeout juga dapat disebut HOF karena terdapat function didalam function.

},1000);

//contoh lain

function waktu(waktu){ //ini juga dapat dsebut HOF karena pada function terdapat return function
	
	return function nama(nama){
		console.log('Halo ' + nama + ' , selamat ' + waktu);
	}
}

let ucapanSalam = waktu('malam');
ucapanSalam('Rafi');

/*
	Contoh beberapa Higher Order Function yang sering digunakan dalam pengelolaan array

	1. Array..prototype.map()
	2. Array..prototype.filter()
	3. Array..prototype.redude()
*/


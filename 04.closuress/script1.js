
// //sebelumnya belajar closures ada beberapa pengantar yaitu execution context, hoisting daan scope.

// //Closures merupakan kombinasi antara function dan lingkungan leksikal (leksikal scope) diddalam function tersebut. Atau sebuah function keika memiliki akses ke parent scope-nya meskipun parent scpe-nya sudah selesai di eksekusi. Atau sebuuah function dikembalikan oleh function yang lain, yang memilki akses ke lngkungan saat dia diciptakan(intinya function me return function).

// //lexical scope

// function init(){
// 	let name = 'Rafi Alfian'; //local variabel

// 	function tampilNama(){ // inner function (closure), jadi ketika tampilNama()line 14 dipanggil, itu dia membutuhkan data name, sedangkan didalam function tampilNama itu tidak ada data name / variabel name, jika itu terjadi dia akan naik keatas(function init()). Hal itulah yang dinamakan closure, karena menggunakan lexical scope (function tampilNama() mengaambil data dari function lain, yaitu (function inti())
// 		//jika misal terdapat variabel yang isinya name, maka ini bukan lagi closure.
// 		// let name = 'Rafi Alfian'; 
// 		console.log(name); //akses ke parent variabel
// 	}
// 	//untuk memastikan closure atau tidak, maka dapat menggunakan console.dir(tampilNama) fungsi tanpa kurung, maka kita dapat melihat object didalamnya,dan kita dapat mencari ada / tidak-nya closure didalam function init(). disebut closure karena membutuhkan variabel name dari parent-nya.
// 	console.dir(tampilNama);
// }
// init();

// // ---------------------------

// function init1(){
// 	let name = 'Rafi Alfian';
// 	let nim = 'A710170021'; // jika kita tambah dan panggil satu variabel lagi, maka closure akan bertambah menjadi 2.

// 	function tampilNama1(){ 
// 		console.log(name); 
// 		console.log(nim);
// 	}
// 	// return tampilNama1();
// 	return tampilNama1; //jika tanpa kurung maka akan mengembalikan fungsinya saja / tanpa menjalankan / tanpa mengekskusi hasil.
// }
// //init();
// //hasilnya tidak akan menampilkan apapun, karena init() dipanggil,  lalu function tampilNama1 dijalankan, tapi karena function tampilNama1 hanya return tampilNama1 tanpa kurung, intinya adalah function init() hanya dijalankan sebagian 

// //agar tampilNama dapat berjalan, maka simpan function init() kedalam variabel lalu panggil.
// let panggilNama1 = init1();
// panggilNama1();

// // ini memungkinkan kita bisa melakukan yang disebut dengan function factory.


// //----------------------------
// function init2(){
// 	// let name = 'Rafi Alfian';
// 	// let nim = 'A710170021';

// 	function tampilNama2(name, nim){ 
// 		console.log(name); 
// 		console.log(nim);
// 	}

// 	return tampilNama2; 
// }
// // init2() //function init2() dipanggil, lalu masuk ke function tampilNama2() dan mengembalikan tampilNama2 tanpa kurung sehingga hasilnya tidak tampil apapun. Agar dapat melihat menampilkan hasil dari tampilNama2(), maka simpan init2() kedalam variabel lalu panggil, misal jika panggilNama2() diberikan parameter dan tampilNama2 diberi parameter untuk menangkap parameter dari panggilNama2, lalu let name dan nim dihapus, 
// let panggilNama2 = init2();
// panggilNama2('Rafi Alfian', 'A710170021');
// panggilNama2('Ervin Alfianto', 'A410140105');

// //kenapa harus menggunakan closure? alasannya adalah untuk membuat function factories, dan untuk membuat private method


// function a(){
// 	console.log('Ini adalah a');

// 	function b(){
// 		console.log('Ini adalah b');
		
// 		function c(){
// 			console.log('Ini adalah c');
// 		}
// 		c();
// 	}
// 	b();
// }
// a();

let angka = (function(){
	let x = 1;
	function cetakangka(a){
		return x++;
	}
	return cetakangka;
})();

x = 10;

console.log(angka())







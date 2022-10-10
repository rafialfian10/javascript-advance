function init(){

	// let nama = 'Rafi Alfian';
	// let nim = 'A710170021';

	function tampilNama(nama, nim){
		console.log(nama);
		console.log(nim);
	}
	return tampilNama;
}

let panggilNama = init();
panggilNama('Rafi Alfian', 'A710170021');
panggilNama('Ervin Alfianto', 'A410140105');

//tujuan closure adalah untuk membuat function factories dan untuk membuat private method. contoh kasus

function ucapanSalam(waktu){
	//kita bisa gunakan function tanpa nama, jika menggunakan function tanpa nama , maka tidak perlu menggunakan return
	// return function(nama){
	// 	console.log('Hallo ' + nama + ' , selamat ' + waktu + ' , semoga harimu menyenangkan!');
	// }

	function nama(nama){
		console.log('Hallo ' + nama + ' , selamat ' + waktu + ' , semoga harimu menyenangkan!');
	}
	return nama;
}

let selamatPagi = ucapanSalam('pagi'); //ucapanSalam() mengacu pada parameter waktu
let selamatSiang = ucapanSalam('siang'); 
let selamatMalam = ucapanSalam('malam');

selamatPagi('Rafi Alfian'); // selamatPagi() mengacu pada nama
selamatSiang('Ervin Alfianto');
selamatMalam('Ali Imron');











//Cara membuat function biasa
function tampilPesan1(nama, waktu){
	document.writeln('Halo ' + nama + ', selamat ' + waktu);
}

tampilPesan1('Rafi Alfian', 'pagi');

document.writeln('<hr>');
//----------------------------------


//cara membuat dengan arrow function di dalam functin expression
let tampilPesan2 = (nama, waktu) => { //function dihapus lalu tambahkan => setelah argumen
	document.writeln('Halo ' + nama + ', selamat ' + waktu);
}

tampilPesan2('Ervin Alfianto', 'siang');

document.writeln('<hr>');
//----------------------------------


let tampilPesan3 = nama => document.writeln('Halo ' + nama); //jika argumen hanya satu, bisa tanpa menggunakan kurung, jika lebih dari satu / tanpa argumen, maka wajib menggunakan kurung. Dan dapat juga tanpa mengunakan kurung kurawal {}. 
	
tampilPesan3('Ali Imron');

document.writeln('<hr>');
//----------------------------------

//contoh kasus lain, membuat function map untuk memetakan sebuah function kedalam array

let mahasiswa1 = ['Rafi Alfian', 'Ervin Alfianto', 'Ali Imron', 'Dayu'];
let jumlahHuruf1 = mahasiswa1.map((nama) => nama.length); 
//mahasiswa.map untuk menghitung jumlah huruf pada setiap elemen array.Lalu boleh tidak menggunakan return dan menghilangkan kurung kurawalnya. Ini disebut dengan implisit return.
console.table(jumlahHuruf1);

//----------------------------------

//cara mengembalikan dalam bentuk objet (bukan array)

let mahasiswa2 = ['Rafi Alfian', 'Ervin Alfianto', 'Ali Imron', 'Dayu'];
let jumlahHuruf2 = mahasiswa2.map((nama) => {return ({NAMA: nama, JUMLAH_HURUF: nama.length}); }); //simpan kurung kurawal {} didalam kurung (), jika tidak disimpan didalam (), maka akan dianggap sebagai return. Lalu buat property nama yang diisi dengan argumen(nama. nama diambil dari elemen array), dan jumlahHuruf diisi dengan argumen(nama.length)

console.table(jumlahHuruf2);

let angka = [1,3,6,9,5,2,8,7,4,15,10];

let sortAngka = angka.sort((a, b) => {return a-b });

console.table(sortAngka);








//Destructring variable / assigment adalah expression pada javascript yang membuat kita dapat membongkar array / property object kedalam variabel yang terpisah. intinya kita membongkar array / property pada object



//cara mengambil salah satu elemen pada array dengan cara biasa yang dilakukan

// const waktu = ['pagi', 'siang', 'malam'];
// const pagi = waktu[0];
// console.log(pagi);


//contoh destructring array
const perkenalan = ['Halo, selamat pagi', 'nama', 'saya', 'Rafi Alfian'];

const [salam, satu, dua, nama] = perkenalan //buat variable baru tapi berntuknya array, lalu petakan setiap elemen ke ddalam variabel terpisah yang namanya bebas, yang di assigment ke array perkenalan, jadi array perkenalan itu akan dibongkar / unpack.
console.log(salam); // hasilnya adalah Halo, selamat pagi


//skipping items pada destructuring array
const data = ['Rafi Alfian', 'A710170021', 'rafialfian770gmail.com', 'Teknik Informatika'];

const [name, , , jurusan] = data; //jadi elemen yang akan di skip itu tidak perlu di petakan kedalam variabel baru, cukup dikosongi saja.
console.log(jurusan); // hasilnya Teknik Informatika


//swap array / menukar isi dari array
let a = 10;
let b = 20;

console.log(a); // hasilnya 10
console.log(b); // hasilnya 20
//lalu tukar isinya
[a, b] = [b, a]
console.log(a); // hasilnya 20
console.log(b); // hasilnya 10


//return value pada function
function angka(){
	return [1, 2, 3]; //return boleh array
}

const arr = angka();
console.log(arr[2]); //maka hasilnya adalah 3

//jika menggunakan destructuring array, maka return pada function(elemen) bisa langsung dipetakan / dipecah
const [i, j, k] = angka(); // jadi i = 1, j = 2, k = 3
console.log(j); //maka hasilnya adalah 2


//rest parameter
const [x, ...values] = [10, 20, 30, 40, 50, 60]; // dengan enggunakan rest parameter, kita tidak perlu memetakan elemen satu per satu.
console.log(x); // hasilnya 10
console.log(values); //hasilnya 20 - 60 tapi dalam brntuk array

//--------------------




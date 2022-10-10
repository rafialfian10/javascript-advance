
// //contoh selanjutnya adalah membuat program sederhana untuk mengetahui berapa kali button telah ditekan.

let counter = 1;

function add(){
	return counter++;
}


counter = 100; //misal jika sewwaktu-waktu counter ditulis kembali, maka hal tersebut akan mempengaruhi function add().



console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());


//hasilnya adalah counter telah ditamplan 5 kali (1-5). Tapi terdapa problem lain jika sewaktu kita menulis ulang counter tersebut dibaris bawah, misal counter = 100, itu akan mempengaruhi function add(), jika dijalankan maka hasilnya tidak dimulai dari angka 0 tapi dimula dari angka 100. jadi untuk mengatasi agar counter baru(counter = 100) tidak mempengaruhi function add(), maka dapat menggunakan counter, seeperti contoh dibawah ini


//----------------

// function add1(){

// 	let counter1 = 1; // jadi disini counter menjadi private dan tidak bisa diakses dari luar tapi nilainya tetap dipertahankan karena menjadi closure

// 	 function angka(angka){
// 		return counter1++;
// 	}
// 	return angka;
// }

// counter1 = 100; //misal jika sewwaktu-waktu counter ditulis kembali, maka hal tersebut akan mempengaruhi function add().

// let a = add1(); //function add() untuk menjalankan semuanya

// console.log(a()); // sedangkan a() untuk menjalakan function angka()
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// //sebenarnya function dapat dipanggil tanpa menyimpan add() kedalam variabel, caranya dengan menggunakan immediatly invoke function jadi bisa lebih efektif. seperti cotoh dibawwah ini


// //----------------

// let add2 = (function(){ //buat function expression tapi simpan dengan kurung buka dan kurung tutup diakhir dan setelah diakhir tambahkan kurung lagi ();

// 	let counter = 10; // jadi disini counter menjadi private dan tidak bisa diakses dari luar tapi nilainya tetap dipertahankan karena menjadi closure

// 	 function angka(angka){
// 		return counter++;
// 	}
// 	return angka;
// })();

// counter = 100; //misal jika sewwaktu-waktu counter ditulis kembali, maka hal tersebut akan mempengaruhi function add().


// console.log(add2()); // sedangkan a() untuk menjalakan function angka()
// console.log(add2());
// console.log(add2());
// console.log(add2());
// console.log(add2());
// console.log(add2());







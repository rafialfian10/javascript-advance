/* fo..of dan for..in
merupakan loooing terbaru pada javascript. sebuah pengulangan / looping yang dia bisa mengulang / menelususir object iterable. Beberapa object iterable:
	1. array
	2. strings
	3. arguments / node list
	4. object
	5. map
	6. set
	7. typed array
	8. user-dedefined iterable
*/

// for..of pada array

const mhs1 = ['Rafi Alfian', 'Dawam Mahfudz', 'R.A.Chandra', 'Ali Zaenal'];

//menampilkan dengan cara biasa (for)
// for(i = 0; i < mhs1.length; i++){
// 	document.writeln(mhs1[i]); 
// }

document.writeln('<hr>');


//menampilkan dengan forEach
mhs1.forEach((m1, i) => document.writeln(`${m1} adalah mahasiswa ke ${i + 1}${'<br>'}`)  );
document.writeln('<hr>');


//mnampilkan dengan for..of
for(const [i, m1] of mhs1.entries() ){ //jika ingin menampilkan index-nya, maka gunakan method entris() dan menambahkan [] pada elemen yang direpesentasikan
	document.writeln(`${m1} adalah mahasiswa ke ${i + 1}${'<br>'}`);
}
document.writeln('<hr>');

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//for..of pada string 
const str = 'RAFI ALFIAN';

for(const s of str){
	console.log(s); // hasilnya dia akan me looping tiap karakter huruf
	document.writeln(s);
}
document.writeln('<hr>');


//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//for..of pada node list (query dulu dari halaman html)
const AllMhs = document.querySelectorAll('.mhs');

// menampilkan dengan for
for (i = 0; i < AllMhs.length; i++){
	document.writeln(`looping dengan for${'<br>'}${AllMhs[i].innerHTML}`);
}
document.writeln('<hr>');

//menampilkan dengan forEach
AllMhs.forEach(am => document.writeln(`looping dengan forEach${'<br>'}${am.innerHTML}`));
document.writeln('<hr>');

//menampilan dengan for..of
for(const am of AllMhs){
	document.writeln(`looping dengan for..of${'<br>'}${am.innerHTML}`);
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//for..of pada arguments

function penjumlahan() { // pda kasus ini, saya tidak perlu menangkap argumen dengan parameter, karena secara default argumen sudah disimpan oleh arguments
	// console.log(arguments); // isi dari arguments adalah [1,2,3,4,5,6,7,8,9,10] walaupun memakai [], tapi bukan array, jika bukan array, maka pengulangan for, forEach, ataupun higher order function tidak akan bisa, jika dengan for..of maka bisa

	// let jumlah = 0;
	// arguments.forEach(a => jumlah += a);
	// return jumlah; // ini akan error

	// arguments.reduce((acc, curr) => console.log(acc + curr)); // ini juga akan error

	let jumlah = 0;
	for(const p of arguments){
		jumlah += p;
	}
	return jumlah;

	
}

console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

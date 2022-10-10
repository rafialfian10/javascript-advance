//Destructuring pada function

//Destruction pada return value

function perkalianPenjumlahan(a, b){

	return [a + b, a * b]; //misal jika nilai yang dikembalikan dalam benuk array supaya lebih dari satu
}
// const penjumlahan = perkalianPenjumlahan(5, 5);
// console.log(penjumlahan); // maka hasilnya adalah array [10, 25], untuk mengatasi itu, maka tambahkan index, seperti contoh dibawah ini

const perkalian = perkalianPenjumlahan(5, 5)[1];
console.log(perkalian); //hasilnya adalah 25, tapi buka dalam bentuk array
//Cara diatas adalah cara biasa, bukan menggunakan destructuring,



//menggunakan destructuring
const [penjumlahan1, perkalian1] = perkalianPenjumlahan(3, 5);

console.log(penjumlahan1);
console.log(perkalian1);


//Menambhakan nama property pada return object
function kalkulasi(a, b){

	return { //return-nya buat object agar dapat diberikan nama pada kalkulasinya
		tambah: a + b,
		kurang: a - b,
		kali: a * b,
		bagi: a / b
	}
}

const {kali, kurang, tambah, bagi} = kalkulasi(10, 5); //meskipun pemetaan namanya tidak sesuai urutan pada function, maka itu tidak berpengaruh 

console.log(kali);
console.log(kurang);
console.log(bagi);
console.log(tambah);


//--------------------

//Destructuring pada Argument

 const mahasiswa1 = {

 	nama: 'Rafi Alfian',
 	nim: 'A710170021',
 	jurusan: 'Teknik Informatika',
 	nilai: { //ini adalah object didalam object
 		pemrogramanWeb: 'A',
 		artificialIntelegence: 'AB',
 		gameEducation: 'A',
 		animation: 'AB'
 	}
 }

 function cetakMhs({nama, nim, jurusan, nilai:{pemrogramanWeb, artificialIntelegence, gameEducation, animation}}){
	return `<div>
				<p>Nama : ${mahasiswa1.nama}</p>
				<p>NIM : ${mahasiswa1.nim}</p>
				<p>Jurusan : ${mahasiswa1.jurusan}</p>
				<p>Mata kuliah :
					<ol>
						<li>Pemrograman WEB : ${mahasiswa1.nilai.pemrogramanWeb}</li>
						<li>Artificial Intellegence : ${mahasiswa1.nilai.artificialIntelegence}</li>
						<li>Game Education : ${mahasiswa1.nilai.gameEducation}</li>
						<li>Animation : ${mahasiswa1.nilai.animation}</li>
					</ol>
				</p>
			</div>`
 } 

 document.writeln(cetakMhs(mahasiswa1))

 function cetakMahasiswa(mahasiswa){

 	return `Halo, nama saya ${mahasiswa.nama}, nomor induk mahasiswa saya ${mahasiswa.nim}, saya jurusan ${mahasiswa.jurusan}, nilai saya pada semester ini adalah: pemrograman WEB = ${mahasiswa.nilai.pemrogramanWeb}, Artificial Intelegence = ${mahasiswa.nilai.artificialIntelegence}, Game Education = ${mahasiswa.nilai.gameEducation}, Animation = ${mahasiswa.nilai.animation} `;
 }
  //cara ini adalah cara biasa, cara ini kurang efektif karena peemangilan object terlalu panjang, untuk mengatasinya, maka gunakan destructuring pada argument
 console.log(cetakMahasiswa(mahasiswa1))




//cara menggunakan Destruction

// function cetakMhs({nama, nim, jurusan, nilai:{pemrogramanWeb, artificialIntelegence, gameEducation, animation} }){ //terima object mahasiswa1 dan lakukan destructuring agar object dibongkar terlebih dulu, jadi sewaktu dipanggil, tidak perlu menulis terlalu panjang, jangan lupa gunakan {}, dan karena ini object di dalam object, maka untuk mencetak nilai, maka gunakan {} lagi. nilai:{}
// 	return `<p>Nama : ${nama}</p>
// 			<p>NIM : ${nim}</p>
// 			<p>Program Studi : ${jurusan}</p>
// 			<p>Nilai semester 7 : </p>
// 			<ul><li>Pemrograman WEB : ${pemrogramanWeb}</li>
// 			<li>Artificial Intelegence : ${artificialIntelegence}</li>
// 			<li>Game Education : ${gameEducation}</li>
// 			<li>Animation: ${animation}</li></ul>`;
// } // jadi tidak perlu menggunakan mahasiswa.nama untuk mencetak property

//  document.writeln(cetakMhs(mahasiswa1));//cetak function cetakMhs dari object mahasiswa1


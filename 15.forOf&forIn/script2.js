//for..in 
//sebuah pengulangan /looping yang dia bisa mengulang enumerable (property pada object)

const mahasiswa = {

	nama: 'Rafi Alfian',
	nim: 'A710170021',
	prodi: 'Teknik Informatika'
}

//jika looping menggunakan for..of
// for(const mhs of mahasiswa){
// 	console.log(mhs); // maka ini akan error (mahasiswa is not iterable)
// }

for(const mhs in mahasiswa){
	// console.log(mhs); // ini yang tampil hanya property-nya, tidak dengan value
	console.log(mahasiswa[mhs]) // ini yan tampil adalah value-ya
}

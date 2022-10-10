//Menggunakan JQuery
// $.ajax({
// 	url: 'json/mahasiswa.json',
// 	success: (mahasiswa) => { // dengan menggunakan ajax, maka data yang diembalikan sudah otomatis dalam bentuk object, adi tidak perlu melakukan JSON.parse()
// 		mahasiswa.forEach(mhs => console.log(mhs.nama, mhs.nim));
// 	}, 
// 	error: (e) => {
// 		console.log(e.responseText);
// 	}
// });

$.ajax({
	url: 'json/mahasiswa.json',
	success: (mhs) => {
		mhs.map(m => console.log(m.nama))
	},
	error: (e) => {
		console.log(e.responseText)
	} 
})
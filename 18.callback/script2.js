//Asynchronous callback

//Ambil data mahasiswa.json dan tampilkan hanya nama-nya saja
//menggunakan vanila javascript / javascript murni / jadul
function getDataMhs(url, success, error) { //parameter 1: sumber data / alamat tempat penyimpanan data, parameter2: function success, parameter3: function error
	
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			success(xhr.response); //jika halaman sudah siap, maka function success aka di isi dengan response, data yang diambil dari mahasiswa.json
		} else if (xhr.readyState == 0 && xhr.status == 404){
			error();
		}
	}

	xhr.open('get', url); //get harus huruf kecil, url sesuai data yang nanti akan dikirim dar parameter, 
	xhr.send();
}

function success(result){ //parameter result adalah xhr.response diatas, yang diambil dari mahasiswa.json
	const mhs = JSON.parse(result);
	mhs.forEach(m => console.log(m.nama));
}

function error(){
	console.log('Data tidak ditemukan!');
}

getDataMhs('json/mahasiswa.json', success, error);

//-----------------

// //kita bisa langsung mebuat anonymus function

// getDataMhs('json/mahasiswa.json',(result) => { //result adalah data dari mahasiswa.json
// 	let i = 1;
// 	const mahasiswa = JSON.parse(result); // karena data dari mahasiswa masaih dalam bentuk text, maka lakukan JSON.parse dulu agar diubah dalam bentuk object
// 	mahasiswa.forEach(mhs => document.writeln(`${i++}. ${mhs.nama} ${'<br>'}`));
// }, () => {
// 	console.log('Data tidak ditemukan!');
// });

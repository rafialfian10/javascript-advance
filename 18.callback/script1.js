//callback merupakan funtion yang dikirimkan sebagai parameter pada function yang lain

//atau function yang dieksekusi setelah function lain selesai dijalankan

//contoh sederhana callback
function halo(nama){
	alert(`Hi, nama saya ${nama}`);
}
//function ini akan dijadikan sebagai parameter di daalam fuction lain

function tampilpesan(callback){ //nama parameter bebas
	const inputName = prompt(`Masukan nama anda :...`);
	callback(inputName);// callback ini aakan dikiriman ke function halo
}

tampilpesan(halo); //halo ini adalah function, tidak perlu mengunakan (), karena jika menggunakan () akan langsung di eksekusi, sehingga hasilnya Hi, nama saya undefined
// //contoh diatas merupakan synchronus callback



//----------------

//cara 2

function tampilPesan2(callback){
	const inputName = prompt(`Input your name :...`);
	callback(inputName);// callback ini aakan dikiriman ke function halo
}

tampilPesan2(name => alert(`Hi, my name is ${name}`))//langsung gunakan anonymus function, jadi tidaak perlu membuat function halo() seperti diatas




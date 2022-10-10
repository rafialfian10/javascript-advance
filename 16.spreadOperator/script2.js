//Tampilkan semua data li, ubah menjadi array dan tampilkan di console.log

//query data li
const li = document.querySelectorAll('ul li'); // ini akan menghasilkan nodelist
//ubah nodelist menjadi array dan lakukan pengulangan

// mengunakan for
	let arr = [];
	for (let i = 0; i < li.length; i++){
		arr.push(li[i].innerHTML);
	}
	console.log(arr);

//menggunakam higher order function
	const newLi = [...li].map(a => a.textContent); //ubah nodelist menjadi array dengan menambahkan [...] pada li 
	console.log(newLi);

//------------------------

//Buat ketika per huruf di mouse move, maka akan otomatis di zoom

const h1 = document.querySelector('.nama');
console.log(h1)
const newH1 = [...h1.textContent]; // pecah menjadi per karakter
console.log(newH1);

const huruf = newH1.map(a => `<span>${a}</span>`).join(''); //lalu looping dan simpan per elemen ke span
console.log(huruf)

h1.innerHTML = huruf;








//Template literal / template string merupakan string literal yang memungkinkaan adanya exxpression didalamnya

//ada 3 cara menggunakan string literal:
// 1. titik satu ('')
// 2. titik dua ("")
// 3. back tick (``) dengan menggunakan back tick maka dapat memungkinkan melakukan template literal. dengan mnggunakan ini maka bisa melakukan
	//multi-line string, embedded expression, HTML fragments. expression interpolation, tagged template. contoh:


//Multi-line string (HTML Fragment) 
	const mahasiswa = {

		nama: 'Rafi Alfian',
		nim: 'A710170021',
		prodi: 'Teknik Informatika',
		email: 'a710170021@student.ums.ac.id'
	};

	const mhs1 = `<div class="mahasiswa">
					<h4>${mahasiswa.nama}</h4>
					<p>${mahasiswa.nama}</p>
					<p>${mahasiswa.prodi}</p>
					<p>${mahasiswa.email}</p>
				</div>`;
	document.writeln(mhs1);



	//Embedded expression
	let nama = 'Rafi Alfian';
	let umur = 25;
	let waktu = 'Malam';
	console.log(`Halo, selamat ${waktu}, nama saya ${nama}, umur saya ${umur}`);


	//Expressio interpolation
	let a = 10;
	let b = 20;
	console.log(`Jika a = 10 dan b = 20, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);


	//menyimpan operator ternary
	let c = 10;
	console.log(`${(c % 2 == 0) ? 'genap' : 'ganjil'} `);

	//memanggil method
	console.log(`${alert('Hello World')}`);











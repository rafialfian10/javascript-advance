
// this pada arrow function constructor
// penting : arrow function tidak memiliki konsep this

let mahasiswa1 = function(){ //ini tidak bisa diganti menjadi arrow function
	this.nama = 'Rafi alfian';
	this.nim = 'A710170021';
	this.jurusan = 'Teknik Informatika';
	
	this.viewData = () => { //jika method dapat diganti menjadi arrow function
		return `Halo nama saya :  ${this.nama}, NIM : ${this.nim}, Prodi ${this.jurusan}`;
	}
}

let mhs1 = new mahasiswa1();


// tapi hal ini akan berbeda jika diterapkan pada object literal


// -----------------------------------

// this pada arrow function literal

const mahasiswa2 = {
	nama: 'Rafi Alfian',
	nim: 'A710170021',
	jurusan: 'Teknik Informatika',

	viewData: () => { //jika function diganti arrow maka hasilnya akan undefined(nama,nim,jurusan) karena this tidak terdapat lexical scope-nya, baik di mahasiswa2 dan window
		console.log('Halo nama saya : ' + this.nama +  ', NIM : ' + this.nim + ', Prodi : ' + this.jurusan);//panggil mahasiswa2.viewData() pada console.log
		console.log(this)//maka ini akan menampilkan window, bukan object mahasiswa2
	}
}

// -----------------------------------

const mahasiswa3 = function(){ //ini tidak bisa diganti menjadi arrow function
	this.nama = 'Rafi alfian';
	this.umur = 25;

	this.viewData = function() { //function expression, this-nya akan melakukan lexical scope ke object meskipun tanpa menggunakan arrow
		console.log('Halo nama saya : ' + this.nama +  ', saya ' + this.umur + ' tahun.') ;
	}

	//misal jika ditambahkan setInterval() untuk menambahkan umur secara otomatis pada setiap 1 detik.

	setInterval( () => {
		console.log(`Halo nama saya ${this.nama}, saya ${this.umur++} tahun.`) ;
	}, 1000);
	
	//setInterval ini adalah function declaration, sehingga jika dipanggil this.umur, maka dia tidak melakukan leical scope ke object mahasiswa3 melainkan ke window, untuk mengatasi hal tersebut maka gunakan arrow, agar lexical scope mengarah ke object mahasiswa3
}

let mhs3 = new mahasiswa3();




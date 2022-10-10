// const box = document.querySelector('.box');

// box.addEventListener('click', function(){

// 	let size = 'size';
// 	let bColor = 'bColor';

// 	if (this.classList.contains(bColor)){//didalam contains boleh diisi size / bColor, hasilnya sama saja
// 		[size, bColor] = [bColor, size];
// 	}

// 	// console.log(this) // ini akan berisi object box

// 	this.classList.toggle(size);
	
// 	setTimeout( () => { //function harus diubah menjadi arrow agar lexical scope-nya dapat ke object box

// 		//console.log(this) //ini akan menghasilkan window, jadi function harus diubah arrow function
// 		this.classList.toggle(bColor);
// 	}, 1500);
// 	//tapi jika toggle ditekan kembali, maka class yang hilang (size) dulu baru class (bColor), jadi ingin class (bColor) yang hilang dulu maka simpan tiap class kedalam variabel, lalu gunakan contains
// });

const box = document.querySelector('.box');

box.addEventListener('click', function(){

	let size = 'size';
	let bColor = 'bColor';

	if(this.classList.contains('bColor')){
		[size, bColor] = [bColor, size]
	}

	this.classList.toggle(size);

	setTimeout(() => {
		this.classList.toggle(bColor);
	},1000);
});
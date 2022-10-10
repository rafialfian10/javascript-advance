function players(name, health){ //inheritance versi prototype
	//sebenarnya yang terjadi dibelakang layar pada object players sudah membuat let this = {}; dan return this;. Tidak hanya itu, sebenarnya object players juga memanggil object players(memanggil dirinya sendiri). jadi sebenarnya ada default yang dijadikan sebuah parent namanya prototype, jadi kita tidak perlu membuat objek baru untuk dijasikan sebuah parent. seperti contoh komentar dibawah. 

	// let this = Object.create(players.prototype); //jadi players.prototype itu sebagai parent yang bisa digunakan untuk membuat object lain

	this.name = name;
	this.health = health;
}

players.prototype.posion = function(posion) {
	this.health +=posion;
	console.log('Hallo ' + this.name + ' your health = ' + this.health);
};

players.prototype.sleep = function(sleep){
	this.health += sleep * 3;
	console.log('Hallo ' + this.name + ' your health = ' + this.health);
}

players.prototype.damage = function(damage){
	this.health -= damage;
	console.log('Hallo ' + this.name + ' your health = ' + this.health);
}

//sebenarnya konsep ini mirip dengan konsep class yang seperti java dan oop(PHP) dimana sama-sama memiliki ineritance(pewarisan). karena itu pada javascript disebut dengan prototyple inheritance(pewarisannya menggunakan prototype). sebenarnta pada javascript juga dapat memakai class seperti ada halaman class.html. Penting : prototyple inheritanca dan class javascript itu sama tapi dengan menggunakan class lebih mudah penulisannya. 


player1 = new players('Raf Alfian', 10);









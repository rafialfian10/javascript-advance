//object create() berfungsi untuk memanggil objek lain yang akan dijadikan sebuah method/function, misal terdapat 2 object:

const players = {

	potion : function(potion){
		this.health += potion;
		console.log('Hai, ' + this.name + ' your health = ' + this.health);
	},

	sleep : function(sleep){
		this.health += sleep * 3;
		console.log('Hai, ' + this.name + ' your health = ' + this.health);
	},

	damage : function(damage){
		this.health -= damage;
		console.log('Hai, ' + this.name + ' your health = ' + this.health);
	}
}

function player1(name, health){

	let player = Object.create(players);//parameter mengacu pada parent dari object yaang akan diambil.
	player.name = name;
	player.health = health;

	//cara menghubungkan dengan objek player

	// player.potion = players.potion; //buat property player dari let player .potion (potion diambil dari objek player)
	// player.sleep = players.sleep;
	// player.damage = players.damage;

	//tapi ini masih ada problem karena masih ditulis dengan cara manual, jika pada objek players dibuat maethod baru, maka pada objek player1 harus dibuat. begitu juga jika dihapus. jadi kita harus mengelola 2 objek, sehingga ini kurang efektif, agar lebih efektif, maka gunakan object create(). objek.create dibuat pada awal saat membuat variabel. normalnya ditulis let player = {}; diganti 	menjadi let player = Object.create() dan diberi parameter mana yang akan diambil parent object-nya.

	return player;
}
//sebenarnya cara ini juga masih kurarg efektif karena kita harus membuat 2 object, sehingga terlalu memakan banyak memori, untuk membuatnya lebih efektif lagi, maka dapat menggunakan prototype.  

const rplayer = player1('Rafi', 10);



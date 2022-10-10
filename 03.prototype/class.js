class players { // inheritance versi class

	constructor(name, health){
		this.name = name;
		this.health = health;
	} 

	potion(potion){//tidak perlu menggunakan function
		this.health += potion;
		console.log('Halo ' + this.name + ' your health = ' + this.health);
	}

	sleep(sleep){//tidak perlu menggunakan function
		this.health += sleep * 3;
		console.log('Halo ' + this.name + ' your health = ' + this.health);
	}

	damage(damage){//tidak perlu menggunakan function
		this.health -= damage;
		console.log('Halo ' + this.name + ' your health = ' + this.health);
	}
}

//hasilnya akan sama dengan inheritance versi prototype, tapi versi class lebih simple.

player1 = new players('Rafi Alfian', 10);




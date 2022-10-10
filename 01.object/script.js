
//function declaration
function player1(name, health){

	let player = {};

	player.name = name;
	player.health = health

	player.potion = function(potion){
		this.health += potion;
		console.log('Hai' + this.name + ', you health = ' + this.health )
	}
	return player;
}

const ePlayer = player1('Ervin', 20);

//function construct
function player2(name, health){

	this.name = name;
	this.health = health;

	this.potion = function(potion){
		this.health += potion;
		console.log('Hai' + this.name + ', you health = ' + this.health );
	}

	this.damage = function(damage){
		this.health -= damage;
		console.log('Hai' + this.name + ', you health = ' + this.health );
	}
}

const rPlayer = new player2 ('Rafi', 10);


//function literal (tidak efektif untuk membuat objek yang banyak)
const player3 = {

	name : 'Rafi',
	health : 20,
	
	potion : function(potion){
		this.health += potion;
		console.log('Hai' + this.name + ', you health = ' + this.health);
	},

	damage : function(damage){
		this.health -= damage;
		console.log('Hai' + this.name + ', you health = ' + this.health);
	}
}





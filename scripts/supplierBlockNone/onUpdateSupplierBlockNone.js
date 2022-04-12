var MAX = 64;
var energy = itemstack.getIntData("energy");
if(energy == -1) energy = 0;
var meta = itemstack.getDamage();

var inventory = player.getInventory();
var count = inventory.getItemCount("Tutorial:blockNone", 0);
var addenergy = 0;
if(meta == 0){
	if(count > MAX){
		inventory.remove("Tutorial:blockNone", count-MAX, 0);
		addenergy += count-MAX;
	}else{
		inventory.add("Tutorial:blockNone", MAX-count, 0);
		addenergy -= MAX-count;
	}
}else{
	inventory.remove("Tutorial:blockNone", count, 0);
	addenergy += count;
}

energy += addenergy;

if(energy < 0){
	inventory.remove("Tutorial:blockNone", Math.abs(energy), 0);
	energy = 0;
}

if(energy != itemstack.getIntData("energy")){
	itemstack.setIntData("energy", energy);
}


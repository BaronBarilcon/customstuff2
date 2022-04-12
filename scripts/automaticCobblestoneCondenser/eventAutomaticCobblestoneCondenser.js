var inventory = world.getInventory(position);
var flag = false;
for(var i = 7; i > 0; i--){
	var count = inventory.getItemCount("Tutorial:compressedCobblestone", i-1);
	if(9 <= count){
		var num = inventory.add("Tutorial:compressedCobblestone", 1, i);
		if(num == 1){
			inventory.remove("Tutorial:compressedCobblestone", 9, i-1);
			flag = true;
			break;
		}
	}
}

if(!flag){
	var count = inventory.getItemCount("minecraft:cobblestone", 0);
	if(9 <= count){
		var num = inventory.add("Tutorial:compressedCobblestone", 1, 0);
		if(num == 1){
			inventory.remove("minecraft:cobblestone", 9, 0);
		}
	}
}
itemstack.setIntData("test", 2);

if(!player.isSprinting() && !player.isSneaking()){
	var mode = itemstack.getIntData("mode");
	if(mode == -1) mode = 0;

	var x = position.x;
	var y = position.y;
	var z = position.z;
	//player.sendMessage(side);

	// side values
	//Y- : 0
	//Y+ : 1
	//Z- : 2
	//Z+ : 3
	//X- : 4
	//X+ : 5
	
	switch(side){
	case 0:
		y--;
		break;
	case 1:
		y++;
		break;
	case 2:
		z--;
		break;
	case 3:
		z++;
		break;
	case 4:
		x--;
		break;
	case 5:
		x++;
		break;
	}
	var name = world.getBlockName(x, y, z);
	var list = [
		"minecraft:air",
		"minecraft:water",
		"minecraft:flowing_water"
	];

	var flag = false;
	for(var i = 0; i < list.length; i++){
		if(list[i] == name){
			flag = true;
		}
	}
	
	if(flag){
		if(mode == 0){ //Water
			world.setBlock(x, y, z, "minecraft:flowing_water");
			world.playSound("game.player.swim", position, 1.5, 1.0);
			//player.placeBlock(position, side, "minecraft:water", 0, false);
		}
		if(mode == 1){
			world.setBlock(x, y, z, "minecraft:ice");
			world.playSound("dig.glass", position, 1.0, 0.8);
			//player.placeBlock(position, side, "minecraft:ice", 0, false);
		}
		itemstack.damageItem(1);
		player.swingItem();
	}
}
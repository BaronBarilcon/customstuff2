var mode = itemstack.getIntData("mode");
if(mode == -1) mode = 0;

if(player.isSneaking()){
	switch(mode){
	case 0:
		mode = 1;
		player.sendMessage("Mode: 3x3");
		break;
	case 1:
		mode = 2;
		player.sendMessage("Mode: 5x5");
		break;
	case 2:
		mode = 0;
		player.sendMessage("Mode: 1x1");
		break;
	}
	itemstack.setIntData("mode", mode);
}else{
	var radius = 0;
	var damage = 0;
	
	switch(mode){
	case 0:
		radius = 0;
		damage = 1;
		break;
	case 1:
		radius = 1;
		damage = 4;
		break;
	case 2:
		radius = 2;
		damage = 16;
		break;
	}

	var x = position.x;
	var y = position.y;
	var z = position.z;
	
	var progress = itemstack.getIntData("progress");
	if(progress == -1) progress = 0;

	var a = radius;
	var b = radius;
	var c = radius;

	switch(side){
	case 0:
	case 1:
		b = 0;
		break;
	case 2:
	case 3:
		c = 0;
		break;
	case 4:
	case 5:
		a = 0;
		break;
	}

	var blackList = [
		"minecraft:air",
		"minecraft:bedrock",
		"minecraft:portal",
		"minecraft:end_portal",
		"minecraft:end_portal_frame"
	];
	
	//var torchFlag = false;
	for(var i = -a; i <= a; i++){
		for(var j = -b; j <= b; j++){
			for(var k = -c; k <= c; k++){
				var flag = true;
				var name = world.getBlockName(x+i, y+j, z+k);
				for(var l = 0; l < blackList.length; l++){
					if(name == blackList[l]) flag = false;
				}
				if(flag){
					world.harvestBlock(x+i, y+j, z+k);
					progress += damage;
					
					/*
					if(!torchFlag){
						if(world.getBlockLightLevel(x+i, y+j, z+k) < 7){
							if(world.getBlockName(x+i, y+j-1, z+k) != "minecraft:air"){
								if(player.placeBlock(x+i, y+j-1, z+k, 0, "minecraft:torch", 0, true)){
									torchFlag = true;
								}
							}
						}
					}
					*/
				}
			}
		}
	}

	while(progress >= 256){
		itemstack.damageItem(1);
		progress -= 256;
	}
	
	if(	player.getItemCount("minecraft:torch", 0) > 0){
		var px = player.getPosX()-1;
		var py = player.getPosY();
		var pz = player.getPosZ()-1;
		if(world.getBlockLightLevel(px, py, pz) < 8){
			world.setBlock(px, py, pz, "minecraft:torch");
			player.remove("minecraft:torch", 1, 0);
		}
	}

	itemstack.setIntData("progress", progress);
	player.swingItem();
}
var x = player.getLookX();
var y = player.getLookY();
var z = player.getLookZ();

var px = player.getPosX();
var py = player.getPosY();
var pz = player.getPosZ();

if(player.isSneaking()){
}else{
	var progress = itemstack.getIntData("progress");
	if(progress == -1) progress = 0;
	
	if(!(x == -1 && y == -1 && z == -1)){
		var ny = y;
		var bedrockflag = false;
		for(ny = y; ny < 255; ny++){
			var name = world.getBlockName(x, ny, z);
			var name2 = world.getBlockName(x, ny+1, z);
			if(name == "minecraft:bedrock"){
				bedrockflag = true;
				break;
			}
			if(name == "minecraft:air" && name2 == "minecraft:air"){
				break;
			}
		}
		
		if(bedrockflag == false){
			var distance = Math.floor(Math.sqrt(Math.pow(x - px, 2) + Math.pow(ny - py, 2) + Math.pow(z - pz, 2)));
			progress += distance;

			player.setPosition(x + 0.5, ny, z + 0.5);
			player.setFallDistance(0.0)
			world.playSound("mob.endermen.portal", x, ny, z, 1.0, 1.0);
			
		}
	}else{
		/*
		var vAngle = player.getVerticalAngle() * Math.PI / 180.0;
		var hAngle = player.getHorizontalAngle() * Math.PI / 180.0;
		var vx = (-Math.sin(hAngle)) * Math.cos(vAngle);
		var vy = -Math.sin(vAngle);
		var vz = Math.cos(hAngle) * Math.cos(vAngle);
		player.setVelocity(vx*2.0, vy*2.0, vz*2.0);
		*/
		player.addVelocityToLookingDirection(1.0);
		progress += 8;
		world.playSound("mob.endermen.portal", px, py, pz, 0.7, 1.5);
	}
	while(progress >= 16){
		itemstack.damageItem(1);
		progress -= 16;
	}
	player.swingItem();
	itemstack.setIntData("progress", progress);
	
}
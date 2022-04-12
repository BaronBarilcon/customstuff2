var x = player.getLookX();
var y = player.getLookY() + 1;
var z = player.getLookZ();

var px = player.getPosX();
var py = player.getPosY();
var pz = player.getPosZ();

var mode = itemstack.getIntData("mode");
// -1: fire mode,  1: fireball mode

if(player.isSprinting()){
	if( !(x == -1 && y == 0 && z == -1) ){
		world.playSound("mob.ghast.fireball", px, py, pz, 1.0, 1.0);
		var rand = Math.floor(Math.random()*10000) + 2000;
		var entities = world.enumEntities(x, y, z, 8.0, "mob");
		for(var i = 0; i < entities.length; i++){
			entities[i].setFire(15);
			entities[i].asLiving().attack(50);
		}
		
		for(var i = -4; i <= 4; i++){
			for(var j = -1; j <= 1; j++){
				for(var k = -4; k <= 4; k++){
					var name = world.getBlockName(x+i, y+j, z+k);
					if(name == "minecraft:air" && (Math.abs((x+i)*(y+j)*(z+k))*itemstack.getDamage() % 100) / 100.0 < 0.3){
						world.setBlock(x+i, y+j, z+k, "minecraft:fire");
					}
					if(name == "minecraft:water" || name == "minecraft:flowing_water"){
						var uname = world.getBlockName(x+i, y+j+1, z+k);
						if(uname != "minecraft:water" && uname != "minecraft:flowing_water"){
							if( (Math.abs((x+i)*(y+j)*(z+k))*itemstack.getDamage() % 100) / 100.0 < 0.15 ){
								world.setBlock(x+i, y+j, z+k, "minecraft:air");
							}
						}
					}
					if(name == "minecraft:ice"){
						world.setBlock(x+i, y+j, z+k, "minecraft:flowing_water");
					}
					//TFC
					if(name == "terrafirmacraft:Ice"){
						var metadata = world.getBlockMetadata(x+i, y+j, z+k);
						if(metadata == 0){
							world.setBlock(x+i, y+j, z+k, "terrafirmacraft:SaltWaterStationary");
						}else{
							world.setBlock(x+i, y+j, z+k, "terrafirmacraft:FreshWaterStationary");
						}
					}
				}
			}
		}
		var entities = world.enumEntities(x, y, z, 5.0, "mob");
		for(var i = 0; i < entities.length; i++){
			entities[i].setFire(1);
		}
		if(world.isRaining()){
			world.setWeather("sun", rand);
		}else if(world.isThundering()){
			world.setWeather("rain", rand);
		}
		itemstack.damageItem(3);
		player.swingItem();
	}
} else if(player.isSneaking()){
	if(mode == 1){ //fireball
		itemstack.setIntData("mode", -1);
		player.sendMessage("Mode: Fire Only");
	}else{ //fire only
		itemstack.setIntData("mode", 1);
		player.sendMessage("Mode: Fireball");
	}

}else{
	
	if(mode == 1){ //fireball
		if( !(x == -1 && y == 0 && z == -1) ){
			world.playSound("mob.ghast.fireball", px, py, pz, 1.0, 1.0);
			var vAngle = player.getVerticalAngle() * Math.PI / 180.0;
			var hAngle = player.getHorizontalAngle() * Math.PI / 180.0;
			var vx = (-Math.sin(hAngle)) * Math.cos(vAngle) * 2.0;
			var vy = -Math.sin(vAngle) * 2.0;
			var vz = Math.cos(hAngle) * Math.cos(vAngle) * 2.0;
			world.spawnMob(px+vx, py+vy+1.0, pz+vz, "Fireball");
			
			var entities = world.enumEntities(px, py, pz, 4.0, "all");
			for(var i = 0; i < entities.length; i++){
				if(entities[i].getName() == "Fireball"){
					var tmpvx = entities[i].getVelocityX();
					var tmpvy = entities[i].getVelocityY();
					var tmpvz = entities[i].getVelocityZ();
					if(tmpvx == 0.0 && tmpvy == 0.0 && tmpvz == 0.0){
						entities[i].setVelocity(vx*2.0, vy*2.0, vz*2.0);
					}
				}
			}
			itemstack.damageItem(1);
			player.swingItem();
		}
	}
	
	
	
	if(mode == -1){ //fire only
		if( !(x == -1 && y == 0 && z == -1) ){
			var name = world.getBlockName(x, y, z);
			if(name == "minecraft:air" || name == "minecraft:fire"){
				world.setBlock(x, y, z, "minecraft:fire");
				world.playSound("mob.ghast.fireball", px, py, pz, 1.0, 1.0);
				itemstack.damageItem(1);
				player.swingItem();
				
				var entities = world.enumEntities(x, y, z, 4.0, "mob");
				for(var i = 0; i < entities.length; i++){
					entities[i].setFire(10);
					entities[i].asLiving().attack(50);
				}
			}
			if(name == "minecraft:water" || name == "minecraft:flowing_water"){
				world.setBlock(x, y, z, "minecraft:air");
				world.playSound("mob.ghast.fireball", px, py, pz, 1.0, 1.0);
				itemstack.damageItem(1);
				player.swingItem();
			}
			for(var i = -1; i <= 1; i++){
				for(var j = -1; j <= 1; j++){
					for(var k = -1; k <= 1; k++){
						var name = world.getBlockName(x+i, y+j, z+k);
						if(name == "minecraft:ice"){
							world.setBlock(x+i, y+j, z+k, "minecraft:flowing_water");
						}
					}
				}
			}
		}
	}
}
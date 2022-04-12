itemstack.setIntData("test", 1);

var x = player.getLookX();
var y = player.getLookY() + 1;
var z = player.getLookZ();

var px = player.getPosX();
var py = player.getPosY();
var pz = player.getPosZ();

var mode = itemstack.getIntData("mode");
if(mode == -1) mode = 0;
// 0: water mode,  1: freeze mode

if(player.isSneaking()){
	if(mode == 1){ //freeze mode
		itemstack.setIntData("mode", 0);
		player.sendMessage("Mode: Water");
	}else{ //water mode
		itemstack.setIntData("mode", 1);
		player.sendMessage("Mode: Freeze");
	}

}else if(player.isSprinting()){

	if(mode == 1){ //Freeze
		if( !(x == -1 && y == 0 && z == -1) ){
			var lavaFlag = false;
			var iceFlag = false;
			var blocks = [];
			var blocks2 = [];
			var ii = 0;
			for(var i = -4; i <= 4; i++){
				for(var j = -4; j <= 4; j++){
					for(var k = -4; k <= 4; k++){
						blocks[ii] = world.getBlockName(x+i, y+j, z+k);
						blocks2[ii] = world.getBlockName(x+i, y+j+1, z+k);
						ii++;
					}
				}
			}
			ii = 0;
			for(var i = -4; i <= 4; i++){
				for(var j = -4; j <= 4; j++){
					for(var k = -4; k <= 4; k++){
						var name = blocks[ii];
						var uname = blocks2[ii];
						//player.sendMessage(uname);
						if(name == "minecraft:flowing_water" || name == "minecraft:water"){
							iceFlag = true;
							if(uname != "minecraft:water" && uname != "minecraft:flowing_water"){
								var metadata = world.getBlockMetadata(x+i, y+j, z+k);
								if(metadata == 0){
									world.setBlock(x+i, y+j, z+k, "minecraft:ice");
								}else{
									world.setBlock(x+i, y+j, z+k, "minecraft:air");
								}
							}
						}
						
						if(name == "minecraft:lava" || name == "minecraft:flowing_lava"){
							lavaFlag = true;
							var metadata = world.getBlockMetadata(x+i, y+j, z+k);
							if(metadata == 0){
								world.setBlock(x+i, y+j, z+k, "minecraft:obsidian");
							}else{
								world.setBlock(x+i, y+j, z+k, "minecraft:cobblestone");
							}
						}
						
						//TFC
						if(name == "terrafirmacraft:SaltWater" || name == "terrafirmacraft:SaltWaterStationary"){
							iceFlag = true;
							if(uname != "terrafirmacraft:SaltWater" && uname != "terrafirmacraft:SaltWaterStationary"){
								var metadata = world.getBlockMetadata(x+i, y+j, z+k);
								if(metadata == 0){
									world.setBlockAndMetadata(x+i, y+j, z+k, "terrafirmacraft:Ice", 0);
								}else{
									world.setBlock(x+i, y+j, z+k, "minecraft:air");
								}
							}
						}
						if(name == "terrafirmacraft:FreshWater" || name == "terrafirmacraft:FreshWaterStationary"){
							iceFlag = true;
							if(uname != "terrafirmacraft:FreshWater" && uname != "terrafirmacraft:FreshWaterStationary"){
								var metadata = world.getBlockMetadata(x+i, y+j, z+k);
								if(metadata == 0){
									world.setBlockAndMetadata(x+i, y+j, z+k, "terrafirmacraft:Ice", 1);
								}else{
									world.setBlock(x+i, y+j, z+k, "minecraft:air");
								}
							}
						}
						if(name == "terrafirmacraft:Lava" || name == "terrafirmacraft:LavaStationary"){
							lavaFlag = true;
							var metadata = world.getBlockMetadata(x+i, y+j, z+k);
							if(metadata == 0){
								world.setBlock(x+i, y+j, z+k, "minecraft:obsidian");
							}else{
								world.setBlock(x+i, y+j, z+k, "terrafirmacraft:StoneIgExCobble");
							}
						}
						
						ii++;
					}
				}
			}
			if(iceFlag){
				world.playSound("dig.glass", px, py, pz, 1.0, 0.8);
			}
			if(lavaFlag){
				world.playSound("random.fizz", px, py, pz, 1.0, 0.7);
			}
			
			if(iceFlag || lavaFlag){
				itemstack.damageItem(2);
				player.swingItem();
			}
		}
	}
	
	if(mode == 0){ //Water
		if( !(x == -1 && y == 0 && z == -1) ){
			var waterFlag = false;
			for(var i = -4; i <= 4; i++){
				for(var j = 2; j >= -2; j--){
					for(var k = -4; k <= 4; k++){
						var name = world.getBlockName(x+i, y+j, z+k);
						if(name == "minecraft:air"){
							var uname = world.getBlockName(x+i, y+j-1, z+k);
							if(uname != "minecraft:air"){
								world.setBlock(x+i, y+j, z+k, "minecraft:flowing_water");
								waterFlag = true;
							}
						}
					}
				}
			}
			if(waterFlag){
				world.playSound("game.player.swim", px, py, pz, 1.5, 1.0);
				itemstack.damageItem(1);
			}
		}
	}
	
}
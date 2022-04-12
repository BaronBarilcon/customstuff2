var mode = itemstack.getDamage();
// mode: 0  OFF
// mode: 1  -> Normal
// mode: 2  -> Mossy
// mode: 3  -> Cracked

if( player.isSneaking() ){
	switch(mode){
	case 0:
		itemstack.setDamage(1);
		player.sendMessage("Mode changed. [Mossy]");
		break;
	case 1:
		itemstack.setDamage(2);
		player.sendMessage("Mode changed. [Cracked]");
		break;
	case 2:
		itemstack.setDamage(0);
		player.sendMessage("Mode changed. [Normal]");
		break;
	}
}else{
	var Blocks = [
		[
			["minecraft:moster_egg", 2],
			["minecraft:moster_egg", 3],
			["minecraft:moster_egg", 4]
		],
		[
			["minecraft:stonebrick", 0],
			["minecraft:stonebrick", 1],
			["minecraft:stonebrick", 2]
		],
		[
			["TwilightForest:tile.TFMazestone", 1],
			["TwilightForest:tile.TFMazestone", 5],
			["TwilightForest:tile.TFMazestone", 4]
		],
		[
			["TwilightForest:tile.TFTowerStone", 0],
			["TwilightForest:tile.TFTowerStone", 3],
			["TwilightForest:tile.TFTowerStone", 2]
		],
		[
			["TwilightForest:tile.TFUnderBrick", 0],
			["TwilightForest:tile.TFUnderBrick", 1],
			["TwilightForest:tile.TFUnderBrick", 2]
		],
		[
			["TwilightForest:tile.TFDeadrock", 0],
			[null, -1],
			["TwilightForest:tile.TFDeadrock", 1]
		],
		[
			["TwilightForest:tile.CastleBrick", 0],
			[null, -1],
			["TwilightForest:tile.CastleBrick", 2]
		],
	]
	var SIZE = 8;
	
	var x = Math.floor( player.getPosX() );
	var y = Math.floor( player.getPosY() );
	var z = Math.floor( player.getPosZ() );
	
	for(var i = -SIZE; i <= SIZE; i++){
		for(var j = -SIZE; j <= SIZE; j++){
			for(var k = -SIZE; k <= SIZE; k++){
				var nx = x + i;
				var ny = y + j;
				var nz = z + k;
				var name = world.getBlockName(nx, ny, nz);
				var meta = world.getBlockMetadata(nx, ny, nz);
				for(var l = 0; l < Blocks.length; l++){
					for(var m = 0; m < Blocks[l].length; m++){
						if(m == mode) continue;
						if(name == Blocks[l][m][0] && meta == Blocks[l][m][1]){
							if(Blocks[l][mode][0] == null) continue;
							world.setBlockAndMetadata(nx, ny, nz, Blocks[l][mode][0], Blocks[l][mode][1]);
							world.playSound("random.levelup", nx, ny, nz, 0.1, 2.0);
							world.spawnParticle("happyVillager", nx, ny, nz, 1.0, 1.0, 1.0);
						}
					}
				}
			}
		}
	}
}
var mode = itemstack.getDamage();

if( player.isSneaking() ){
	switch(mode){
	case 0:
		itemstack.setDamage(1);
		player.sendMessage("Mode changed. [Cell]");
		break;
	case 1:
		itemstack.setDamage(0);
		player.sendMessage("Mode changed. [Remove]");
		break;
	}
}else{
	var Fluid = [
		["minecraft:water", "IC2:itemCellEmpty", 1],
		["minecraft:flowing_water", "IC2:itemCellEmpty", 1],
		["minecraft:lava", "IC2:itemCellEmpty", 2],
		["minecraft:flowing_lava", "IC2:itemCellEmpty", 2]
	];
	var CellResults = [];
	for(var i = 0; i < Fluid.length; i++){
		CellResults[i] = 0;
	}
	
	var cell_count = player.getItemCount("IC2:itemCellEmpty", 0);
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
				for(var l = 0; l < Fluid.length; l++){
					if(name == Fluid[l][0]){
						if(mode == 1){
							if(meta == 0){
								if( 0 < cell_count ){
									CellResults[l]++;
									cell_count--;
									world.setBlock(nx, ny, nz, "minecraft:air");
									world.playSound("random.levelup", nx, ny, nz, 0.1, 2.0);
								}
							}else{//meta != 0
								world.setBlock(nx, ny, nz, "minecraft:air");
								world.playSound("random.levelup", nx, ny, nz, 0.1, 2.0);
							}
						}else{//mode == 1
							world.setBlock(nx, ny, nz, "minecraft:air");
							world.playSound("random.levelup", nx, ny, nz, 0.1, 2.0);
						}
					}
				}
			}
		}
	}
	
	if(mode == 1){
		for(var i = 0; i < CellResults.length; i++){
			player.remove("IC2:itemCellEmpty", CellResults[i], 0);
			player.add(Fluid[i][1], CellResults[i], Fluid[i][2]);
		}
	}
}
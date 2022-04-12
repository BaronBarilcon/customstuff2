
if(player.isSneaking()){
	var name = world.getBlockName(position);
	var meta = world.getBlockMetadata(position);
	
	var x = position.x;
	var y = position.y;
	var z = position.z;
	
	if(mod.isItemInOreDictClass(name, meta, "stoneObsidian")){
		var count = 0;
		for(var i = -3; i <= 3; i++){
			for(var j = -3; j <= 3; j++){
				var nx = x+i;
				var nz = z+j;
				
				var name = world.getBlockName(nx, y, nz);
				var meta = world.getBlockMetadata(nx, y, nz);
				if(name == "Thaumcraft:blockStoneDevice" && meta == 1){
					var num = world.getContainerItemCount(nx, y, nz, "Thaumcraft:ItemEldritchObject", 0);
					if(num == 1){
						count++;
					}
				}
			}
		}
		if(count == 4){
			for(var i = -3; i <= 3; i++){
				for(var j = -3; j <= 3; j++){
					var nx = x+i;
					var nz = z+j;
					
					var name = world.getBlockName(nx, y, nz);
					var meta = world.getBlockMetadata(nx, y, nz);
					if(name == "Thaumcraft:blockStoneDevice" && meta == 1){
						var num = world.getContainerItemCount(nx, y, nz, "Thaumcraft:ItemEldritchObject", 0);
						if(num == 1){
							world.removeFromContainer(nx, y, nz, "Thaumcraft:ItemEldritchObject", 1, 0);
						}
					}
				}
			}
			
			world.setBlock(position, "Tutorial:generatorEldritchObelisk");
			itemstack.damageItem(2000);
		}
	}
}
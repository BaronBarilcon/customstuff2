
if(!player.isSneaking()){
	var x = Math.floor(player.getPosX());
	var y = Math.floor(player.getPosY());
	var z = Math.floor(player.getPosZ());

	var range = 22;
	var range2 = 15;

	var count = 0;
	var regBlockName = itemstack.getStringData("blockName");
	
	if(regBlockName == "null"){
		player.sendMessage("No Register Block.");
	}else{
		for(var i = -range2; i <= range2; i++){
			for(var j = -range; j <= range; j++){
				for(var k = -range2; k <= range2; k++){
					var blockName = world.getBlockName(x+i, y+j, z+k);
					if(blockName == regBlockName){
						count++;
						//world.harvestBlock(x+i, y+j, z+k);
					}
				}
			}
		}
		/*
		player.sendMessage("--[SEARCH BLOCK]------------");
		player.sendMessage("Search: " + regBlockName);
		player.sendMessage(" count: " + count);
		*/
		player.sendMessage(count);
		itemstack.damageItem(2);
	}


}
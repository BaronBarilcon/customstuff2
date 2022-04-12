if(player.isSneaking()){
	var blockName = world.getBlockName(position);
	itemstack.setStringData("entityName", "null");
	itemstack.setStringData("blockName", blockName);
	
	/*
	player.sendMessage("--[REGISTER BLOCK]----------");
	player.sendMessage("registered Block.");
	player.sendMessage(" BlockName: " + blockName);
	*/
	player.sendMessage("registered Block.");
	player.sendMessage(" BlockName: " + blockName);
	itemstack.damageItem(1);
}
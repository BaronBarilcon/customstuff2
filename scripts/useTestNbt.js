var inventory = player.getInventory();
for(var i = 0; i < 36; i++){
	var item = inventory.getStack(i);
	if(item == null) continue;
	player.sendMessage(i + ":" + item.getItemName());
	
	var nbt = item.getNbt();
	var string = nbt.getString("cs2stringData_blockName");
	if(string == null) continue;
	player.sendMessage(" " + string);
}
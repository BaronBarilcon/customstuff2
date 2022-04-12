var px = player.getPosX();
var py = player.getPosY();
var pz = player.getPosZ();
var time = world.getTime();
var unit = 2000;
var unit2 = 6000;
var mode = itemstack.getIntData("mode");
if(mode == -1) mode = 0;

if( player.isSneaking() ){
	if(mode == 1){ //Rewind
		itemstack.setIntData("mode", 0);
		player.sendMessage("Mode: Forward");
	}else if(mode == 0){ //Forward
		itemstack.setIntData("mode", 1);
		player.sendMessage("Mode: Rewind");
	}
}else if(player.isSprinting()){
	if(mode == 0){
		time += unit2;
	}else if(mode == 1){
		time -= unit2;
		if(time < 0) time += 24000;
	}
	world.setTime(time);
	world.playSound("mob.endermen.portal", px, py, pz, 1.0, 1.0);
	itemstack.damageItem(3);
	player.swingItem();
}else{
	if(mode == 0){
		time += unit;
	}else if(mode == 1){
		time -= unit;
		if(time < 0) time += 24000;
	}
	world.setTime(time);
	world.playSound("mob.endermen.portal", px, py, pz, 1.0, 1.0);
	itemstack.damageItem(1);
	player.swingItem();
}

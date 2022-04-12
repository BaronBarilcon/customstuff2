var x = player.getLookX();
var y = player.getLookY() + 1;
var z = player.getLookZ();

if(x == -1 && y == 0 && z == -1){
	
}else{
	world.createThunderbolt(x, y, z);
	if(player.isSneaking()){
		for(var i = 0; i < 5; i++){
			var nx = Math.floor(Math.random()*13)-6;
			var nz = Math.floor(Math.random()*13)-6;
			world.createThunderbolt(x+nx, y, z+nz);
		}
		if(world.isRaining()){
			world.setWeather("thundering", 24000);
		}else if(!world.isThundering()){
			world.setWeather("rain", 24000);
		}
		
		itemstack.damageItem(10);
		player.swingItem();
	}else{
		itemstack.damageItem(2);
		player.swingItem();
	}
}
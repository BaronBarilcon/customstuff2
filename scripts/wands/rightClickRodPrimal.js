
if(player.isSneaking()){
	var x = player.getPosX();
	var y = player.getPosY();
	var z = player.getPosZ();
	
	var DAMAGE = 800;
	if(player.getVelocityX() < 0.1 && player.getVelocityY() < 0.1 && player.getVelocityZ() < 0.1){
		var entities = world.enumEntities(x, y, z, 32.0, "hostile");
		var playerdamage = 0;
		for(var i = 0; i < entities.length; i++){
			var health = entities[i].asLiving().getHealth();
			if(health > 0){
				entities[i].asLiving().attack(DAMAGE);
				var health2 = entities[i].asLiving().getHealth();
				if(health2 < health){
					playerdamage += (health < DAMAGE)? health : DAMAGE;
					world.playSound("random.orb", player.getPosX(), player.getPosY(), player.getPosZ(), 0.1, 0.5);
				}
			}
		}
		player.attack(playerdamage / 16);
		player.addExperience(playerdamage / 640);
		itemstack.damageItem(playerdamage / 160);
	}
}
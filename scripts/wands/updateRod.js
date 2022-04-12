
if( world.getTime() % 60 == 0){
	var damage = itemstack.getDamage();
	if(damage > 0){
		itemstack.setDamage(damage-1);
	}
}
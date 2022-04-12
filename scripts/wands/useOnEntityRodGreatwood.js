
var health = living.getHealth();
var maxHealth = living.getMaxHealth();
if(health < maxHealth){
	living.setHealth(health + 100);
	world.playSound("random.orb", player.getPosX(), player.getPosY(), player.getPosZ(), 1.0, 2.0);
	itemstack.damageItem(1);
}
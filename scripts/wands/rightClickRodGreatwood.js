
var health = player.getHealth();
var maxHealth = player.getMaxHealth();
if(health < maxHealth * (2/3)){
	player.setHealth(health + 50);
	player.addPotionEffect("moveSlowdown", 300, 4);
	player.addPotionEffect("digSlowDown", 300, 4);
	player.addPotionEffect("weakness", 300, 4);
	world.playSound("random.orb", player.getPosX(), player.getPosY(), player.getPosZ(), 1.0, 2.0);
	itemstack.damageItem(4);
}

var entityhealth = living.getHealth();
var playerhealth = player.getHealth();

world.playSound("random.orb", player.getPosX(), player.getPosY(), player.getPosZ(), 1.0, 2.0);
world.playSound("random.orb", player.getPosX(), player.getPosY(), player.getPosZ(), 1.0, 0.5);
living.attack(5000);
player.setHealth(playerhealth + 1000);
player.addExperience(20);
itemstack.damageItem(1000);
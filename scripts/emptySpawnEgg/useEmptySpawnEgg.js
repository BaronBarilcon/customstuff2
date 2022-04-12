var name = living.getName();
var metadata = -1;

var obj = new Object();
//TFC
obj["squidTFC"] = 3;
obj["fishTFC"] = 4;
obj["cowTFC"] = 5;
obj["wolfTFC"] = 6;
obj["bearTFC"] = 7;
obj["chickenTFC"] = 23;
obj["pigTFC"] = 24;
obj["deerTFC"] = 25;
obj["skeletonTFC"] = 26;
obj["zombieTFC"] = 27;
obj["spiderTFC"] = 28;
obj["slimeTFC"] = 29;
obj["silverfishTFC"] = 30;
obj["ghastTFC"] = 31;
obj["caveSpiderTFC"] = 32;
obj["blazeTFC"] = 33;
obj["endermanTFC"] = 34;
obj["pigZombieTFC"] = 35;
obj["irongolemTFC"] = 36;
obj["creeperTFC"] = 37;
obj["sheepTFC"] = 38;
obj["pheasantTFC"] = 39;
obj["horseTFC"] = 67;
obj["standTFC"] = 70;

//Vanilla
obj["Creeper"] = 50;
obj["Skeleton"] = 51;
obj["Spider"] = 52;
obj["Zombie"] = 54;
obj["Slime"] = 55;
obj["Ghast"] = 56;
obj["PigZombie"] = 57;
obj["Enderman"] = 58;
obj["CaveSpider"] = 59;
obj["Silverfish"] = 60;
obj["Blaze"] = 61;
obj["LavaSlime"] = 62;
obj["LavaSlime"] = 62;
obj["Bat"] = 65;
obj["Witch"] = 66;
obj["Pig"] = 90;
obj["Sheep"] = 91;
obj["Cow"] = 92;
obj["Chicken"] = 93;
obj["Squid"] = 94;
obj["Wolf"] = 95;
obj["MushroomCow"] = 96;
obj["Ozelot"] = 98;
obj["EntityHorse"] = 100;
obj["Villager"] = 120;
obj["SnowMan"] = 97;
obj["VillagerGolem"] = 99;

metadata = obj[name];
if(metadata != undefined){
	
	var health = living.getHealth();
	var maxHealth = living.getMaxHealth();
	var x = living.getPosX();
	var y = living.getPosY();
	var z = living.getPosZ();
	
	var border = 5;
	if(metadata <= 39 || metadata == 67 || metadata == 70){
		border = 50;
	}
	
	if(health <= border){
		world.spawnItem(x, y, z, "minecraft:spawn_egg", 1, metadata);
		world.playSound("portal.travel", x, y, z, 0.75, 2.0);
		living.setDead();
		player.sendMessage("Captured " + name + "!");
	}else{
		living.attack(2);
		health = living.getHealth();
		world.playSound("dig.glass", x, y, z, 1.0, 0.5);
		player.sendMessage("Failure...  (" + name + ": " + health + "/" + maxHealth + ")");
	}
	itemstack.setStackSize(itemstack.getStackSize()-1);
	player.swingItem();
}else{
	player.sendMessage(name + " isn't able to be capture.");
}
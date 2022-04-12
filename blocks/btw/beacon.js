name = "beacon";
material = "rock";
stepSound = "stone";
creativeTab = "Tutorial";
tickrate = 80;

addToCreative[0] = true;
hardness[0] = 50;
resistance[0] = 120.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 0;
pick[0] = "Tutorial:beacon:0";
drop[0] = "Tutorial:beacon:0";
textureFileXP[0] = "/obsidian.png";
textureFileXN[0] = "/obsidian.png";
textureFileYP[0] = "btw/beacon_top_off.png";
textureFileYN[0] = "btw/beacon_top_off.png";
textureFileZP[0] = "/obsidian.png";
textureFileZN[0] = "/obsidian.png";

information[0] = "Place on Beacon, unleashes Beacon's the True Potential.";
blocksPiston = false;

onUpdate[0] = "mod.loadScript('beacon/onUpdateBeacon.js');";

addToCreative[1] = false;
hardness[1] = 50;
resistance[1] = 120.0;
toolClass[1] = "pickaxe";
harvestLevel[1] = 0;
pick[1] = "Tutorial:beacon:0";
drop[1] = "Tutorial:beacon:0";
textureFileXP[1] = "btw/beacon_side_on.png";
textureFileXN[1] = "btw/beacon_side_on.png";
textureFileYP[1] = "btw/beacon_top_on.png";
textureFileYN[1] = "btw/beacon_top_on.png";
textureFileZP[1] = "btw/beacon_side_on.png";
textureFileZN[1] = "btw/beacon_side_on.png";

onUpdate[1] = "mod.loadScript('beacon/onUpdateBeacon.js');";
onBreak[1] = "mod.loadScript('beacon/onBreakBeacon.js');";
blocksPiston = false;

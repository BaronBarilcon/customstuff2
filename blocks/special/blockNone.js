name = "blockNone";
material = "glass";
stepSound = "glass";
creativeTab = "Tutorial";
transparent = true;
tickrate = 10;
opacity = 0;

addToCreative[0] = true;
hardness[0] = 0.0;
resistance[0] = 0.0;
harvestLevel[0] = 0;
drop[0] = "";
textureFileXP[0] = "blockNone.png";
textureFileXN[0] = "blockNone.png";
textureFileYP[0] = "blockNone.png";
textureFileYN[0] = "blockNone.png";
textureFileZP[0] = "blockNone.png";
textureFileZN[0] = "blockNone.png";
hasCollision[0] = false;

onUpdate[0] = "world.setBlock(position, 'minecraft:air'); ";
onNeighborChange[0] = "world.setBlock(position, 'minecraft:air'); ";
name = "lampRedstoneInvert";
material = "glass";
stepSound = "glass";
creativeTab = "Tutorial";

addToCreative[0] = false;
hardness[0] = 0.3;
resistance[0] = 0.3;
harvestLevel[0] = 0;
light[0] = 0;
drop[0] = "Tutorial:lampRedstoneInvert:1";
textureFileXP[0] = "lampRedstoneInvert_off.png";
textureFileXN[0] = "lampRedstoneInvert_off.png";
textureFileYP[0] = "lampRedstoneInvert_off.png";
textureFileYN[0] = "lampRedstoneInvert_off.png";
textureFileZP[0] = "lampRedstoneInvert_off.png";
textureFileZN[0] = "lampRedstoneInvert_off.png";

addToCreative[1] = true;
hardness[1] = 0.3;
resistance[1] = 0.3;
harvestLevel[1] = 0;
light[1] = 15;
drop[1] = "Tutorial:lampRedstoneInvert:1";
textureFileXP[1] = "lampRedstoneInvert_on.png";
textureFileXN[1] = "lampRedstoneInvert_on.png";
textureFileYP[1] = "lampRedstoneInvert_on.png";
textureFileYN[1] = "lampRedstoneInvert_on.png";
textureFileZP[1] = "lampRedstoneInvert_on.png";
textureFileZN[1] = "lampRedstoneInvert_on.png";

onRedstoneSignal[0] = "if (!redstoneSignal) { world.setBlockMetadata(position, 1); }";
onRedstoneSignal[1] = "if (redstoneSignal) { world.setBlockMetadata(position, 0); }";
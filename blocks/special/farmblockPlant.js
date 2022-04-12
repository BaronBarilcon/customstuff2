name = "farmblockPlant";
material = "iron";
stepSound = "metal";
creativeTab = "Tutorial";
tickrate = 10;

addToCreative[0] = true;
hardness[0] = 5.0;
resistance[0] = 30.0;
toolClass[0] = "pickaxe";
drop[0] = "Tutorial:farmblockPlant";
pick[0] = "Tutorial:farmblockPlant";

hasTileEntity[0] = true;
tileEntity[0] = "farmblockPlant";

onUpdate[0] = "mod.loadScript('onUpdateFarmblockPlant.js');";
onActivated[0] = "player.openGui('farmblockPlant', position); result = true;";
onRedstoneSignal[0] = "mod.loadScript('onRedstoneSignalTileEntity.js');";

textureFileXP[0] = "farmblockPlant_side.png";
textureFileXN[0] = "farmblockPlant_side.png";
textureFileYP[0] = "farmblockPlant_top.png";
textureFileYN[0] = "farmblockPlant_bottom.png";
textureFileZP[0] = "farmblockPlant_side.png";
textureFileZN[0] = "farmblockPlant_side.png";


addToCreative[1] = false;
hardness[1] = 5.0;
resistance[1] = 30.0;
toolClass[1] = "pickaxe";
drop[1] = "Tutorial:farmblockPlant";
pick[1] = "Tutorial:farmblockPlant";

hasTileEntity[1] = true;
tileEntity[1] = "farmblockPlant";

onUpdate[1] = "mod.loadScript('onUpdateFarmblockPlant.js');";
onActivated[1] = "player.openGui('farmblockPlant', position); result = true;";
onRedstoneSignal[1] = "mod.loadScript('onRedstoneSignalTileEntity.js');";

textureFileXP[1] = "farmblockPlant_side.png";
textureFileXN[1] = "farmblockPlant_side.png";
textureFileYP[1] = "farmblockPlant_top_on.png";
textureFileYN[1] = "farmblockPlant_bottom.png";
textureFileZP[1] = "farmblockPlant_side.png";
textureFileZN[1] = "farmblockPlant_side.png";

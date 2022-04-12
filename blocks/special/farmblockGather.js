name = "farmblockGather";
material = "iron";
stepSound = "metal";
creativeTab = "Tutorial";
tickrate = 400;

addToCreative[0] = true;
hardness[0] = 5.0;
resistance[0] = 30.0;
toolClass[0] = "pickaxe";
drop[0] = "Tutorial:farmblockGather";
pick[0] = "Tutorial:farmblockGather";

hasTileEntity[0] = true;
tileEntity[0] = "farmblockGather";

onUpdate[0] = "mod.loadScript('farmblock/onUpdateFarmblockGather.js');";
onActivated[0] = "player.openGui('farmblockGather', position); result = true;";
onRedstoneSignal[0] = "mod.loadScript('farmblock/onRedstoneSignalTileEntity.js');";

textureFileXP[0] = "farmblockGather_side.png";
textureFileXN[0] = "farmblockGather_side.png";
textureFileYP[0] = "farmblockGather_top.png";
textureFileYN[0] = "farmblockGather_bottom.png";
textureFileZP[0] = "farmblockGather_side.png";
textureFileZN[0] = "farmblockGather_side.png";


addToCreative[1] = false;
hardness[1] = 5.0;
resistance[1] = 30.0;
toolClass[1] = "pickaxe";
drop[1] = "Tutorial:farmblockGather";
pick[1] = "Tutorial:farmblockGather";

hasTileEntity[1] = true;
tileEntity[1] = "farmblockGather";

onUpdate[1] = "mod.loadScript('farmblock/onUpdateFarmblockGather.js');";
onActivated[1] = "player.openGui('farmblockGather', position); result = true;";
onRedstoneSignal[1] = "mod.loadScript('farmblock/onRedstoneSignalTileEntity.js');";

textureFileXP[1] = "farmblockGather_side.png";
textureFileXN[1] = "farmblockGather_side.png";
textureFileYP[1] = "farmblockGather_top_on.png";
textureFileYN[1] = "farmblockGather_bottom.png";
textureFileZP[1] = "farmblockGather_side.png";
textureFileZN[1] = "farmblockGather_side.png";

name = "siftingTable";
material = "iron";
stepSound = "metal";
creativeTab = "Tutorial";
tickrate = 1;

addToCreative[0] = true;
hardness[0] = 5.0;
resistance[0] = 30.0;
toolClass[0] = "pickaxe";
drop[0] = "Tutorial:siftingTable";
pick[0] = "Tutorial:siftingTable";

hasTileEntity[0] = true;
tileEntity[0] = "siftingTable";

onActivated[0] = "mod.loadScript('siftingTable/onActivatedSiftingTable.js');";

textureFileXP[0] = "siftingTable_side.png";
textureFileXN[0] = "siftingTable_side.png";
textureFileYP[0] = "siftingTable_top.png";
textureFileYN[0] = "siftingTable_bottom.png";
textureFileZP[0] = "siftingTable_side.png";
textureFileZN[0] = "siftingTable_side.png";


addToCreative[1] = false;
hardness[1] = 5.0;
resistance[1] = 30.0;
toolClass[1] = "pickaxe";
drop[1] = "Tutorial:siftingTable";
pick[1] = "Tutorial:siftingTable";

hasTileEntity[1] = true;
tileEntity[1] = "siftingTable";

onActivated[1] = "mod.loadScript('siftingTable/onActivatedSiftingTable.js');";

textureFileXP[1] = "siftingTable_side.png";
textureFileXN[1] = "siftingTable_side.png";
textureFileYP[1] = "siftingTable_top_on.png";
textureFileYN[1] = "siftingTable_bottom.png";
textureFileZP[1] = "siftingTable_side.png";
textureFileZN[1] = "siftingTable_side.png";
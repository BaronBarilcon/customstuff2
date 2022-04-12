name = "automaticCobblestoneCondenser2";
material = "rock";
stepSound = "stone";
creativeTab = "Tutorial";
tickrate = 1;


addToCreative[0] = true;
hardness[0] = 8.0;
resistance[0] = 120.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 0;
drop[0] = "Tutorial:automaticCobblestoneCondenser2";

hasTileEntity[0] = true;
tileEntity[0] = "automaticCobblestoneCondenser2TileEntity";

onUpdate[0] = "mod.loadScript('automaticCobblestoneCondenser/eventAutomaticCobblestoneCondenser2.js')";

onActivated[0] = "player.openGui('automaticCobblestoneCondenser2Gui', position); result = true;";

textureFileXP[0] = "automaticCobblestoneCondenser2_side.png";
textureFileXN[0] = "automaticCobblestoneCondenser2_side.png";
textureFileYP[0] = "automaticCobblestoneCondenser2_top.png";
textureFileYN[0] = "automaticCobblestoneCondenser2_bottom.png";
textureFileZP[0] = "automaticCobblestoneCondenser2_side.png";
textureFileZN[0] = "automaticCobblestoneCondenser2_side.png";
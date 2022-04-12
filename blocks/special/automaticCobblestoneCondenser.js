name = "automaticCobblestoneCondenser";
material = "rock";
stepSound = "stone";
creativeTab = "Tutorial";
tickrate = 1;


addToCreative[0] = true;
hardness[0] = 8.0;
resistance[0] = 120.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 0;
drop[0] = "Tutorial:automaticCobblestoneCondenser";

hasTileEntity[0] = true;
tileEntity[0] = "automaticCobblestoneCondenserTileEntity";

onUpdate[0] = "mod.loadScript('automaticCobblestoneCondenser/eventAutomaticCobblestoneCondenser.js')";

onActivated[0] = "player.openGui('automaticCobblestoneCondenserGui', position); result = true;";

textureFileXP[0] = "automaticCobblestoneCondenser_side.png";
textureFileXN[0] = "automaticCobblestoneCondenser_side.png";
textureFileYP[0] = "automaticCobblestoneCondenser_top.png";
textureFileYN[0] = "automaticCobblestoneCondenser_bottom.png";
textureFileZP[0] = "automaticCobblestoneCondenser_side.png";
textureFileZN[0] = "automaticCobblestoneCondenser_side.png";
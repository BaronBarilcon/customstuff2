name = "fluidTank";
material = "iron";
stepSound = "metal";
creativeTab = "Tutorial";
tickrate = 20;

addToCreative[0] = true;
hardness[0] = 5.0;
resistance[0] = 30.0;
toolClass[0] = "pickaxe";
drop[0] = "Tutorial:fluidTank";
pick[0] = "Tutorial:fluidTank";

hasTileEntity[0] = true;
tileEntity[0] = "fluidTank";

onActivated[0] = "player.openGui('fluidTank', position); result = true;";
onUpdate[0] = "mod.loadScript('onUpdateFluidTank.js');";

textureFileFront[0] = "fluidTank_side.png";
textureFileBack[0] = "fluidTank_side.png";
textureFileSides[0] = "fluidTank_side.png";
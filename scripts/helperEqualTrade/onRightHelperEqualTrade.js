//minecraft:log
// 0: oak, 1: spruce, 2:birch, 3:jungle
//minecraft:log2
// 0: acacia, 1: dark oak
//Thaumcraft:blockMagicalLog
// 0: greatwood, 1: silverwood
//TwilightForest:tile.TFLog
// 0: twilight oak, 1: canopy, 2: mangrove, 3: darkwood

var x = Math.floor(player.getPosX());
var y = Math.floor(player.getPosY());
var z = Math.floor(player.getPosZ());

if(player.isSneaking()){
    var range = 10;
    for(var i = -range; i < range; i++){
        for(var j = -range; j < range; j++){
            for(var k = -range; k < range; k++){
                var nx = x + i;
                var ny = y + j;
                var nz = z + k;
                
                var blockName = world.getBlockName(nx, ny, nz);
                if(blockName == "minecraft:torch"){
                    world.harvestBlock(nx, ny, nz);
                }
            }
        }
    }
}else{
    var range = 20;
    for(var i = -range; i < range; i++){
        for(var j = -range; j < range; j++){
            for(var k = -range; k < range; k++){
                var nx = x + i;
                var ny = y + j;
                var nz = z + k;
                
                var blockName = world.getBlockName(nx, ny, nz);
                
                // Wood Metadata
                if(blockName == "minecraft:log"
                || blockName == "minecraft:log2"
                || blockName == "Thaumcraft:blockMagicalLog"
                || blockName == "TwilightForest:tile.TFLog"){
                    var metadata = world.getBlockMetadata(nx, ny, nz);
                    if(3 < metadata){
                        world.setBlockMetadata(nx, ny, nz, metadata % 4);
                        world.playSound("random.levelup", nx, ny, nz, 1.0, 1.0);
                    }
                }
                
                // Slab
                if(blockName == "minecraft:stone_slab"
                || blockName == "minecraft:wooden_slab"){
                    var metadata = world.getBlockMetadata(nx, ny, nz);
                    world.setBlockMetadata(nx, ny, nz, metadata % 8);
                    world.playSound("random.levelup", nx, ny, nz, 1.0, 1.0);
                }
                
                // Mushroom
                if(blockName == "minecraft:brown_mushroom_block"){
                    world.setBlockAndMetadata(nx, ny, nz, "etfuturum:brown_mushroom", 0);
                    world.playSound("random.levelup", nx, ny, nz, 1.0, 1.0);
                }
                if(blockName == "minecraft:red_mushroom_block"){
                    world.setBlockAndMetadata(nx, ny, nz, "etfuturum:red_mushroom", 0);
                    world.playSound("random.levelup", nx, ny, nz, 1.0, 1.0);
                }
            }
        }
    }
}
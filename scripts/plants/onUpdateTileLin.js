var METADATA_MAX = 4;

var x = position.x;
var y = position.y;
var z = position.z;

var rand = Math.random();
var probability = 0;

var farmland = world.getBlockName(x, y - 1, z);
var farmlandMeta = world.getBlockMetadata(x, y - 1, z);
if(farmland == 'minecraft:farmland'){
    if(0 < farmlandMeta){
        probability = 0.01;
    }else{
        probability = 0.005;
    }
}

if(rand < probability){
    var metadata = world.getBlockMetadata(position);
    // 1’i–Ú¬nÏ‚Ý
    if(metadata == METADATA_MAX){
        if(rand < (probability / 2)){
            var name = world.getBlockName(x, y + 1, z);
            if(name == 'minecraft:air'){
                world.setBlockAndMetadata(x, y + 1, z, 'Tutorial:tileLin', METADATA_MAX + 1);
            }
        }
    }
    // 1’i–Ú–¢¬n
    else if(0 <= metadata && metadata < METADATA_MAX){
        world.setBlockMetadata(position, metadata + 1);
    }
}
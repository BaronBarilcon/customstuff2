var x = position.x;
var y = position.y;
var z = position.z;

var rand = Math.random();
var probability = 0;

var lightLevel = world.getBlockLightLevel(x, y + 2, z);
var lightLevel2 = world.getBlockLightLevel(x, y + 1, z);

if(lightLevel == 15 && lightLevel2 == 14){
    probability = 0.05;
}else{
    var farmland = world.getBlockName(x, y - 1, z);
    var farmlandMeta = world.getBlockMetadata(x, y - 1, z);
    if(farmland == 'minecraft:farmland'){
        if(0 < farmlandMeta){
            probability = 0.01;
        }else{
            probability = 0.005;
        }
    }
}

if(rand < probability){
    var metadata = world.getBlockMetadata(position);
    // 1’i–Ú¬nÏ‚Ý
    if(metadata == 7){
        if(rand < (probability / 4)){
            var name = world.getBlockName(x, y + 1, z);
            if(name == 'minecraft:air'){
                world.setBlockAndMetadata(x, y + 1, z, 'Tutorial:tileHemp', 8);
            }
        }
    }
    // 1’i–Ú–¢¬n
    else if(0 <= metadata && metadata < 7){
        world.setBlockMetadata(position, metadata + 1);
    }
}
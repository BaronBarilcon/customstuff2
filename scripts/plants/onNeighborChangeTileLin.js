var METADATA_MAX = 4;

var x = position.x;
var y = position.y;
var z = position.z;

var linMetadata = world.getBlockMetadata(x, y, z);

// 1マス下のブロック
var name = world.getBlockName(x, y - 1, z);
var metadata = world.getBlockMetadata(x, y - 1, z);

// 2段目
if(linMetadata == METADATA_MAX + 1){
    if(name != 'Tutorial:tileLin' || metadata != METADATA_MAX){
        world.harvestBlock(position);
    }
}
// 1段目
else{
    if(name != 'minecraft:farmland'){
        world.harvestBlock(position);
    }
}
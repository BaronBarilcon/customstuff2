var METADATA_MAX = 4;

var x = position.x;
var y = position.y;
var z = position.z;

var linMetadata = world.getBlockMetadata(x, y, z);

// 1�}�X���̃u���b�N
var name = world.getBlockName(x, y - 1, z);
var metadata = world.getBlockMetadata(x, y - 1, z);

// 2�i��
if(linMetadata == METADATA_MAX + 1){
    if(name != 'Tutorial:tileLin' || metadata != METADATA_MAX){
        world.harvestBlock(position);
    }
}
// 1�i��
else{
    if(name != 'minecraft:farmland'){
        world.harvestBlock(position);
    }
}
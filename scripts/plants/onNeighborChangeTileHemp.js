var x = position.x;
var y = position.y;
var z = position.z;

var hempMetadata = world.getBlockMetadata(x, y, z);

// 1�}�X���̃u���b�N
var name = world.getBlockName(x, y - 1, z);
var metadata = world.getBlockMetadata(x, y - 1, z);

// 2�i��
if(hempMetadata == 7 + 1){
    if(name != 'Tutorial:tileHemp' || metadata != 7){
        world.harvestBlock(position);
    }
}
// 1�i��
else{
    if(name != 'minecraft:farmland'){
        world.harvestBlock(position);
    }
}
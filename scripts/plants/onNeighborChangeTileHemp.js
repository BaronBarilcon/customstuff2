var x = position.x;
var y = position.y;
var z = position.z;

var hempMetadata = world.getBlockMetadata(x, y, z);

// 1マス下のブロック
var name = world.getBlockName(x, y - 1, z);
var metadata = world.getBlockMetadata(x, y - 1, z);

// 2段目
if(hempMetadata == 7 + 1){
    if(name != 'Tutorial:tileHemp' || metadata != 7){
        world.harvestBlock(position);
    }
}
// 1段目
else{
    if(name != 'minecraft:farmland'){
        world.harvestBlock(position);
    }
}
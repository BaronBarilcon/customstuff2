var x = position.x;
var y = position.y;
var z = position.z;

var farmland = world.getBlockName(position);
var farmlandMeta = world.getBlockMetadata(position);
if(farmland == 'minecraft:farmland' &&  0 <= farmlandMeta && side == 1){
    var name = world.getBlockName(x, y + 1, z);
    if(name == 'minecraft:air'){
        world.setBlockAndMetadata(x, y + 1, z, 'Tutorial:tileLin', 0);
        itemstack.setStackSize( itemstack.getStackSize() - 1 );
        player.swingItem();
    }
}

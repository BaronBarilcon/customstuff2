
if(player.isSneaking()){
    world.harvestBlock(position);
}else{
    var blockName = world.getBlockName(position);
    var blockMetadata = world.getBlockMetadata(position);

    world.setBlockAndMetadata(position, blockName + "Ignited", blockMetadata);
    world.setTileEntityFloatData(position, 'horizontalAngle', player.getHorizontalAngle());
    world.setTileEntityFloatData(position, 'verticalAngle', player.getVerticalAngle());
    world.playSound('game.tnt.primed', position, 1, 1);
}

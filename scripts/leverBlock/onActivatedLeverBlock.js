
var blockMedatata = world.getBlockMetadata(position);
if(blockMedatata == 0){
    blockMedatata = 1;
    world.playSound('random.click', position, 1, 0.6);
}else{
    blockMedatata = 0;
    world.playSound('random.click', position, 1, 0.5);
}
world.setBlockMetadata(position, blockMedatata);

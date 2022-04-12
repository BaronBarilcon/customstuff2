var v = player.getVerticalAngle();
var h = player.getHorizontalAngle();
if(v < -45.0 || 45.0 < v){
	world.setBlockMetadata(position, 0);
} else {
	if((-135 < h && h <= -45.0) || (45.0 < h && h <= 135.0)){
		world.setBlockMetadata(position, 4);
	} else {
		world.setBlockMetadata(position, 8);
	}
}

var x = Math.floor(player.getPosX());
var y = Math.floor(player.getPosY());
var z = Math.floor(player.getPosZ());

var progress = itemstack.getIntData("progress");
if(progress == -1) progress = 0;

if(!player.isSneaking()){

	var range = 17;
	var count = 0;
	for(var i = -range; i <= range; i++){
		for(var j = 0; j <= y; j++){
			for(var k = -range; k <= range; k++){
				var blockName = world.getBlockName(x+i, j, z+k);
				
				if( (blockName.indexOf("ore") != -1) || (blockName.indexOf("Ore") != -1) ){// �z�΂̏ꍇ
					//��O����
					if(blockName.indexOf("Sycamore") != -1) continue;
					if(blockName.indexOf("TwilightForest") != -1) continue;
					
					count++;
				}
			}
		}
	}
	player.sendMessage(count);
	progress += count;
}else{
	//�n�w����
	var layers = [["", 0, 0]];
	var layer_num = 0;
	for(var i = 255; i >= 0; i--){
		var blockName = world.getBlockName(x, i, z);
		var blockMetadata = world.getBlockMetadata(x, i, z);
		
		if(blockName == "terrafirmacraft:StoneIgIn" || blockName == "terrafirmacraft:StoneIgEx" || blockName == "terrafirmacraft:StoneSed" || blockName == "terrafirmacraft:StoneMM"){
			if(layers[layer_num][0] != blockName || layers[layer_num][1] != blockMetadata){
				layer_num++;
				layers.push([blockName, blockMetadata, i]);
			}
		}
	}
	
	player.sendMessage("=== Layer Checking Result ===");
	for(var i = 0; i < layer_num; i++){
		player.sendMessage(layers[i+1][2]+" - "+mod.getLocalizedItemName(layers[i+1][0]+":"+layers[i+1][1]));
		progress += 256;
	}
	if(layer_num == 0){
		player.sendMessage("Error... Not Found Layer.");
	}
}

world.playSound("random.orb", player.getPosX(), player.getPosY(), player.getPosZ(), 1.0, 2.0);
while(progress >= 1024){
	itemstack.damageItem(1);
	progress -= 1024;
}
itemstack.setIntData("progress", progress);
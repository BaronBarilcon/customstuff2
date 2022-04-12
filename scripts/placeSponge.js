var wetFlag = false;
var x = position.x;
var y = position.y;
var z = position.z;

for(var i = -1; i <= 1; i++){
	for(var j = -1; j <= 1; j++){
		for(var k = -1; k <= 1; k++){
			if(Math.abs(i) + Math.abs(j) + Math.abs(k) == 1){
				var name = world.getBlockName(x+i, y+j, z+k);
				if(name == "minecraft:water" || name == "minecraft:flowing_water"){
					wetFlag = true;
				}
				if(name == "terrafirmacraft:SaltWater" || name == "terrafirmacraft:SaltWaterStationary"){
					wetFlag = true;
				}
				if(name == "terrafirmacraft:FreshWater" || name == "terrafirmacraft:FreshWaterStationary"){
					wetFlag = true;
				}
			}
		}
	}
}

if(wetFlag){
	world.setBlockMetadata(position, 1);
	var count = 0;
	var finish = false;
	for(d = 1; d < 7; d++){
		
		for(i = -d; i <= d; i++){
			for(j = -d; j <= d; j++){
				for(k = -d; k <= d; k++){
					var name = world.getBlockName(x+i, y+j, z+k);
					if(name == "minecraft:water" || name == "minecraft:flowing_water" ||
						 name == "terrafirmacraft:SaltWater" || name == "terrafirmacraft:SaltWaterStationary" ||
						 name == "terrafirmacraft:FreshWater" || name == "terrafirmacraft:FreshWaterStationary"){
						world.setBlock(x+i, y+j, z+k, "minecraft:air");
						count++;
						if(count == 65){
							finish = true;
						}
					}
					if(finish) break;
				}
				if(finish) break;
			}
			if(finish) break;
		}
		if(finish) break;
		
	}
}
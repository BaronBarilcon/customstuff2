if(player.isSneaking()){
while(true){
	/*
	[//Item Name
		[outItemId, metadata],
		[inItem1Id, metadata],
		[[inItem2Id, metadata], ...]
	], ...
	*/
	var Recipes = [
		[//Silverwood Sapling
			["Thaumcraft:blockCustomPlant", 1],
			["Thaumcraft:blockCustomPlant", 0],
			[["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3], ["Thaumcraft:ItemResource", 3]]
		],
		[//Necrotic Bone 1
			["TConstruct:materials", 8],
			["minecraft:bone", 0],
			[["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0], ["minecraft:soul_sand", 0]]
		],
		[//Necrotic Bone 2
			["TConstruct:materials", 8],
			["minecraft:bone", 0],
			[["gemCoal", 0], ["gemCoal", 0], ["gemCoal", 0], ["gemCoal", 0], ["gemCoal", 0], ["gemCoal", 0], ["gemCoal", 0], ["gemCoal", 0]]
		],
		[//Necrotic Bone 3
			["TConstruct:materials", 8],
			["minecraft:bone", 0],
			[["dustCoal", 0], ["dustCoal", 0], ["dustCoal", 0], ["dustCoal", 0], ["dustCoal", 0], ["dustCoal", 0], ["dustCoal", 0], ["dustCoal", 0]]
		],
		[//Wither Skeleton Skull 1
			["minecraft:skull", 1],
			["minecraft:skull", 0],
			[["TConstruct:materials", 8], ["TConstruct:materials", 8], ["TConstruct:materials", 8], ["TConstruct:materials", 8]]
		],
		[//Wither Skeleton Skull 2
			["minecraft:skull", 1],
			["minecraft:skull", 0],
			[["Thaumcraft:blockEldritch", 4], ["Thaumcraft:blockEldritch", 4], ["Thaumcraft:blockEldritch", 4], ["Thaumcraft:blockEldritch", 4]]
		],
		[//Glowing Crusted Stone
			["Thaumcraft:blockEldritch", 4],
			["minecraft:glowstone", 0],
			[["Thaumcraft:blockCosmeticSolid", 14], ["Thaumcraft:blockCosmeticSolid", 14], ["Thaumcraft:blockCosmeticSolid", 14], ["Thaumcraft:blockCosmeticSolid", 14]]
		]
	];
	
	var x = position.x;
	var y = position.y;
	var z = position.z;
	
	//クリックしたブロックが『Glowing Crusted Stone』
	var name = world.getBlockName(x, y, z);
	var meta = world.getBlockMetadata(x, y, z);
	if(name != "Thaumcraft:blockEldritch" || meta != 4){
		break;
	}
	
	//クリックしたブロックの1個上が『Arcane Pedestal』
	var name = world.getBlockName(x, y+1, z);
	var meta = world.getBlockMetadata(x, y+1, z);
	if(name != "Thaumcraft:blockStoneDevice" || meta != 1){
		break;
	}
	
	//inputItem1取得
	var name = world.getContainerSlotItemName(x, y+1, z, 0);
	var meta = world.getContainerSlotMetadata(x, y+1, z, 0);
	var input1 = [name, meta];
	var bonus = 0;
	
	//inputItem2（List）取得
	var input2 = [];
	for(var i = -7; i <= 7; i++){
		for(var j = -3; j <= 3; j++){
			for(var k = -7; k <= 7; k++){
				
				if(i == 0 && j == 1 && k == 0) continue;
				var nx = x+i;
				var ny = y+j;
				var nz = z+k;
				
				var name = world.getBlockName(nx, ny, nz);
				var meta = world.getBlockMetadata(nx, ny, nz);
				if(name == "Thaumcraft:blockStoneDevice" && meta == 1){
					var name = world.getContainerSlotItemName(nx, ny, nz, 0);
					var meta = world.getContainerSlotMetadata(nx, ny, nz, 0);
					if(meta != -1){
						input2.push([name, meta, false, [nx, ny, nz]]);
					}
				}
				
				if(name == "Thaumcraft:blockEldritch" && meta == 4){
					bonus += 4;
				}
				if(name == "Thaumcraft:blockCosmeticSolid" && meta == 14){
					bonus += 1;
				}
			}
		}
	}
	if(bonus > 500) bonus = 500;
	if(bonus < 20){
		player.sendMessage("Crusted Stone Point is "+(20-bonus)+" points short...");
		break;
	}
	
	if(input1[1] == -1){
		player.sendMessage("Current Crusted Stone Point: "+bonus+" / 500");
		break;
	}
	
	var recipeId = -1;
	for(var i = 0; i < Recipes.length; i++){
		//input2 フラグ初期化
		for(var k = 0; k < input2.length; k++){
			input2[k][2] = false;
		}
		
		//レシピ検索
		if( (Recipes[i][1][0] == input1[0] && Recipes[i][1][1] == input1[1]) || mod.isItemInOreDictClass(input1[0], input1[1], Recipes[i][1][0])){ //input1 一致
			for(var j = 0; j < Recipes[i][2].length; j++){
				for(var k = 0; k < input2.length; k++){
					if(!input2[k][2] && (Recipes[i][2][j][0] == input2[k][0] && Recipes[i][2][j][1] == input2[k][1] || mod.isItemInOreDictClass(input2[k][0], input2[k][1], Recipes[i][2][j][0]))){
						input2[k][2] = true;
						break;
					}
				}
			}
			
			var count = 0;
			for(var k = 0; k < input2.length; k++){
				if(input2[k][2]){
					count++;
				}
			}
			if(count == Recipes[i][2].length){
				recipeId = i;
				break;
			}
		}
	}
	
	if(recipeId != -1){ //レシピ適用
		world.setContainerSlot(x, y+1, z, 0, Recipes[recipeId][0][0], 1, Recipes[recipeId][0][1]);
		for(var k = 0; k < input2.length; k++){
			if(input2[k][2]){
				world.clearContainerSlot(input2[k][3][0], input2[k][3][1], input2[k][3][2], 0);
				if(bonus < 50){
					world.createThunderbolt(input2[k][3][0], input2[k][3][1]+1, input2[k][3][2]);
				}
			}
		}
		var itemname = mod.getLocalizedItemName(Recipes[recipeId][0][0]+":"+Recipes[recipeId][0][1]);
		if(bonus >= 400){
			world.createThunderbolt(x, 1000, z);
		}else{
			world.createThunderbolt(x, y+1, z);	
		}
		
		var score;
		if(bonus < 100){
			score = "Badly";
			player.attack(500);
			player.addPotionEffect("weakness", 1600, 2);
			player.addPotionEffect("poison", 400, 1);
			player.addPotionEffect("confusion", 100, 0);
		}else if(bonus < 200){
			score = "Narrowly";
			player.attack(200);
			player.addPotionEffect("weakness", 400, 1);
			player.addPotionEffect("poison", 100, 0);
		}else if(bonus < 300){
			score = "not Bad";
			player.attack(50);
			player.addPotionEffect("weakness", 100, 0);
		}else if(bonus < 400){
			score = "Safely";
		}else{
			score = "Perfectly";
		}
		player.sendMessage("== "+itemname+" Evocation == Completed "+score+"...");
		
		itemstack.damageItem(150 - (bonus/4));
	}else{ //レシピ見つからない
		player.sendMessage("Evocation Not Found...");
	}
	
	
	break;
}
}
var foodsmetadata = [32505, 32550, 32551, 32552, 32554, 32555, 32556];
var foodname = ["apple", "melon", "carrot", "potato"];
var tmp = Math.floor(Math.random()*11); //0Å`10

if(tmp < foodsmetadata.length){
	player.add("gregtech:gt.metaitem.02", 1, foodsmetadata[tmp]);
} else {
	player.add("minecraft:" + foodname[tmp - foodsmetadata.length], 1, 0);
}
player.add("minecraft:leather", 7, 0);

itemstack.setStackSize(itemstack.getStackSize()-1);
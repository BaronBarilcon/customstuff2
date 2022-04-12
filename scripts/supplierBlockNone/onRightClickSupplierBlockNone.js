if( player.isSneaking() ){
	var mode = itemstack.getDamage();
	switch(mode){
	case 0:
		itemstack.setDamage(1);
		player.sendMessage("OFF");
		break;
	case 1:
		itemstack.setDamage(0);
		player.sendMessage("ON");
		break;
	}
}
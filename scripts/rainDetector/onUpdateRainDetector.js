
var detectorMetadata = world.getBlockMetadata(position);
var x = position.x;
var y = position.y;
var z = position.z;
var enabled = false;

// �J���m��œV�󂪉J�A�܂��͗��J���m��œV�󂪗��J�̏ꍇ
if((detectorMetadata == 0 || detectorMetadata == 8) && world.isRaining() || 
   (detectorMetadata == 1 || detectorMetadata == 9) && world.isThundering()){
    enabled = true;
    // �^��ɋ�C�ȊO�̃u���b�N������ꍇ�͓��삵�Ȃ�
    for(var j = y + 1; j < 256; j++){
        var blockName = world.getBlockName(x, j, z);
        if(blockName != 'minecraft:air'){
            enabled = false;
            break;
        }
    }
}

if(enabled){
    world.setBlockMetadata(position, (detectorMetadata) % 8 + 8);
    // ���b�h�X�g�[���M�����o��
    mod.loadScript('util/signalRedstone.js');
}else{
    world.setBlockMetadata(position, (detectorMetadata) % 8);
}

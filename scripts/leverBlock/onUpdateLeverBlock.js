
var leverMetadata = world.getBlockMetadata(position);
var x = position.x;
var y = position.y;
var z = position.z;

// ���o�[��ON�̏ꍇ
if(leverMetadata != 0){
    // ���b�h�X�g�[���M�����o��
    mod.loadScript('util/signalRedstone.js');
}

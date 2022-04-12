// �ȉ��̕ϐ����K�{
// * mod
// * world
// * position

// ���b�h�X�g�[���A���b�h�X�g�[�����s�[�^�A���b�h�X�g�[���R���p���[�^�ɂ����M�����`���Ȃ��B

// �אڃu���b�N�ւ̑��΍��W�z��
var positions = [
    [0,  0, -1]
  , [1,  0,  0]
  , [0,  0,  1]
  , [-1, 0,  0]
  , [0,  1,  0]
  , [0,  -1, 0]
];

// �אڃu���b�N���ƂɈȉ��̏��������s
for(var l = 0; l < positions.length; l++){
    var nx = x + positions[l][0];
    var ny = y + positions[l][1];
    var nz = z + positions[l][2];
    
    var blockName = world.getBlockName(nx, ny, nz);
    var blockMetadata = world.getBlockMetadata(nx, ny, nz);
    
    // 6�����אڂ̃��b�h�X�g�[���ɐM��OFF
    if(blockName == 'minecraft:redstone_wire'){
        world.setBlockMetadata(nx, ny, nz, 0);
    }
    
    if(positions[l][1] == 0){
        // XZ�אڂ̃��b�h�X�g�[�����s�[�^�ɐM��ON
        if(blockName == 'minecraft:powered_repeater'){
            if(blockMetadata % 4 == l){
                world.setBlockAndMetadata(nx, ny, nz, 'minecraft:unpowered_repeater', blockMetadata);
            }
        }
        // XZ�אڂ̃��b�h�X�g�[���R���p���[�^�ɐM��ON
        if(8 <= blockName == 'minecraft:unpowered_comparator' && blockMetadata){
            if(blockMetadata % 4 == l){
                world.setBlockMetadata(nx, ny, nz, blockMetadata - 8);
            }
        }
    }
}
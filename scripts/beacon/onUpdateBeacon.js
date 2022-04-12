
// ������
var beaconMetadata = world.getBlockMetadata(position);
var enableBeacon = false;
var x = position.x;
var y = position.y;
var z = position.z;

// 1�}�X�����r�[�R���̏ꍇ�݈̂ȉ������s
var blockName = world.getBlockName(x, y - 1, z);
if(blockName == 'minecraft:beacon' || blockName == 'etfuturum:beacon'){
    // �r�[�R���̏�����x���E�܂ŃX�L�����A��C���K���X����ՈȊO�̃u���b�N���Ȃ����m�F
    var existsObstacle = false;
    for(var j = y + 1; j < 256; j++){
        var blockName = world.getBlockName(x, j, z);
        if(blockName != 'minecraft:air' && blockName != 'minecraft:glass' && blockName != 'minecraft:bedrock'){
            existsObstacle = true;
            break;
        }
    }
    
    // ��Q�����Ȃ��ꍇ�݈̂ȉ������s
    if(!existsObstacle){
        // �r�[�R���x�[�X�̎��
        var types = [
            'blockGold'
          , 'blockIron'
          , 'blockSteel'
          , 'blockCopper'
          , 'blockSilver'
          , 'blockTin'
          , 'blockDiamond'
          , 'blockRedstone'
          , 'blockEmerald'
          , 'blockSlime'
          , 'blockUranium'
          , 'blockUranium235'
          , 'blockFlesh'
          , 'blockLead'
          , 'blockBlaze'
          , 'blockLapis'
          , 'glowstone'
          , 'blockCoal'
          , 'blockPlutonium'
          , 'blockNetherStar'
        
        ];
        var type = '';
        var baseBlockName = '';
        var baseBlockMetadata = '';
        
        // �r�[�R����1�}�X���u���b�N���݂ăr�[�R���x�[�X�̎�ނ𔻒�
        var blockName = world.getBlockName(x, y - 2, z);
        var blockMetadata = world.getBlockMetadata(x, y - 2, z);
        
        for(var n = 0; n < types.length; n++){
            if(mod.isItemInOreDictClass(blockName, blockMetadata, types[n])){
                type = types[n];
                baseBlockName = blockName;
                baseBlockMetadata = blockMetadata;
                break;
            }
        }
        
    mod.printLine('BeaconBase: ' + baseBlockName + ':' + baseBlockMetadata + ', Type: ' + type);
        
        // �r�[�R���x�[�X���`�F�b�N���ă��x�����v�Z
        var level;
        var breakFlag = false;
        for(level = 1; level <= 4; level++){
            for(var i = -level; i <= level; i++){
                for(var k = -level; k <= level; k++){
                    var nx = x + i;
                    var ny = y - 1 - level;
                    var nz = z + k;
                    var blockName = world.getBlockName(nx, ny, nz);
                    var blockMetadata = world.getBlockMetadata(nx, ny, nz);
                    // �r�[�R���x�[�X�Ƃ��Ďg�p�ł��Ȃ��u���b�N�����o�����瑖���I���A���x�����m��
                    if(blockName != baseBlockName || blockMetadata != baseBlockMetadata){
                        breakFlag = true;
                        break;
                    }
                }
                if(breakFlag){
                    break;
                }
            }
            if(breakFlag){
                break;
            }
        }
        level--;
        
mod.printLine('BeaconLevel: ' + level);
        
        if(0 < level){
            enableBeacon = true;
            
            // ���x�����甼�a������
            var radiuses = [
                0, 20, 40, 80, 160
            ]
            var radius = radiuses[level];
            var duration = 160;
            var potionLevel = level - 1;
            
mod.printLine('BeaconRadius: ' + radius);
            
            // �v���C���[�Ɋe�\���u���b�N���Ƃ̃|�[�V�������ʂ�t�^
            var entities = world.enumEntities(position, radius, 'player');
            for(var i = 0; i < entities.length; i++){
                if(entities[i].isPlayer()){
                    var player = entities[i].asLiving();
                    // ���u���b�N�͍̌@���x�A�b�v
                    if(type == 'blockGold'){
                        player.addPotionEffect('digSpeed', duration, potionLevel);
                    }
                    // �S�u���b�N�͍̌@���x�_�E��
                    else if(type == 'blockIron'){
                        player.addPotionEffect('digSlowDown', duration, potionLevel);
                    }
                    // �|�u���b�N�͍U���̓A�b�v
                    else if(type == 'blockSteel'){
                        player.addPotionEffect('damageBoost', duration, potionLevel);
                    }
                    // ���u���b�N�̓v���C���[�Ɍ��ʂȂ�
                    
                    // ��u���b�N�͈ړ����x�A�b�v
                    else if(type == 'blockSilver'){
                        player.addPotionEffect('moveSpeed', duration, potionLevel);
                    }
                    // ���u���b�N�̓v���C���[�Ɍ��ʂȂ�
                    else if(type == 'blockTin'){
                    }
                    // �_�C�������h�u���b�N�͖h��̓A�b�v
                    else if(type == 'blockDiamond'){
                        player.addPotionEffect('resistance', duration, potionLevel);
                    }
                    // ���b�h�X�g�[���u���b�N�͓�����
                    else if(type == 'blockRedstone'){
                        player.addPotionEffect('invisibility', duration, potionLevel);
                    }
                    // �G�������h�u���b�N�͍Đ��\��
                    else if(type == 'blockEmerald'){
                        player.addPotionEffect('regeneration', duration, potionLevel);
                    }
                    // �X���C���u���b�N�̓W�����v�̓A�b�v
                    else if(type == 'blockSlime'){
                        player.addPotionEffect('jump', duration, potionLevel);
                    }
                    // �E���j�E��238�u���b�N�̓v���C���[�Ɍ��ʂȂ�
                    
                    // �E���j�E��235�u���b�N�̓v���C���[�Ɍ��ʂȂ�
                    
                    // �]���r���u���b�N�͋�
                    else if(type == 'blockFlesh'){
                        player.addPotionEffect('hunger', duration, potionLevel);
                    }
                    // ���u���b�N�͓f���C
                    else if(type == 'blockLead'){
                        player.addPotionEffect('confusion', duration, potionLevel);
                    }
                    // �u���C�Y�u���b�N�͉Ή��ϐ��A�u���C�Y�u���b�N�͂��ׂĔR���オ��
                    else if(type == 'blockBlaze'){
                        player.addPotionEffect('fireResistance', duration, potionLevel);
                        igniteBeaconBaseBlazeBlocks(level);
                    }
                    // ���s�X�u���b�N�͐����ċz
                    else if(type == 'blockLapis'){
                        player.addPotionEffect('waterBreathing', duration, potionLevel);
                    }
                    // �O���E�X�g�[���͈Î�
                    else if(type == 'glowstone'){
                        player.addPotionEffect('nightVision', duration, potionLevel);
                    }
                    // �ΒY�u���b�N�͖Ӗ�
                    else if(type == 'blockCoal'){
                        player.addPotionEffect('blindness', duration, potionLevel);
                    }
                    // �v���g�j�E���u���b�N�̓v���C���[�Ɍ��ʂȂ�
                    
                    // �l�U�[�X�^�[�u���b�N�͑�����
                    else if(type == 'blockNetherStar'){
                        player.addPotionEffect('heal', duration, potionLevel);
                    }
                }
            }
            
            // ���u�Ɋe�\���u���b�N���Ƃ̃|�[�V�������ʂ�t�^
            var entities = world.enumEntities(position, radius, 'mob');
            for(var i = 0; i < entities.length; i++){
                if(entities[i].isLiving()){
                    var living = entities[i].asLiving();
                    // ���u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �S�u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �|�u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // ���u���b�N�͎�̉�
                    if(type == 'blockCopper'){
                        living.addPotionEffect('weakness', duration, potionLevel);
                    }
                    // ��u���b�N�̓v���C���[�ȊO���ړ����x�A�b�v
                    else if(type == 'blockSilver'){
                        living.addPotionEffect('moveSpeed', duration, potionLevel);
                    }
                    // ���u���b�N�͈ړ����x�_�E��
                    else if(type == 'blockTin'){
                        living.addPotionEffect('moveSlowdown', duration, potionLevel);
                    }
                    // �_�C�������h�u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // ���b�h�X�g�[���u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �G�������h�u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �X���C���u���b�N�̓v���C���[�ȊO���W�����v�̓A�b�v
                    else if(type == 'blockSlime'){
                        living.addPotionEffect('jump', duration, potionLevel);
                    }
                    // �E���j�E���u���b�N�͓�
                    else if(type == 'blockUranium'){
                        living.addPotionEffect('poison', duration, potionLevel);
                    }
                    // �E���j�E��235�u���b�N�̓E�B�U�[���
                    else if(type == 'blockUranium235'){
                        living.addPotionEffect('wither', duration, potionLevel);
                    }
                    // �]���r���u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // ���u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �u���C�Y�u���b�N�̓v���C���[�ȊO���Ή��ϐ�
                    else if(type == 'blockBlaze'){
                        living.addPotionEffect('fireResistance', duration, potionLevel);
                    }
                    // ���s�X�u���b�N�̓v���C���[�ȊO�������ċz
                    else if(type == 'blockLapis'){
                        living.addPotionEffect('waterBreathing', duration, potionLevel);
                    }
                    // �O���E�X�g�[���̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �ΒY�u���b�N�̓v���C���[�ȊO�ɂ͌��ʂȂ�
                    
                    // �v���g�j�E���u���b�N�̓_���[�W
                    else if(type == 'blockPlutonium'){
                        living.addPotionEffect('harm', duration, potionLevel);
                    }
                    // �l�U�[�X�^�[�u���b�N�̓v���C���[�ȊO��������
                    else if(type == 'blockNetherStar'){
                        living.addPotionEffect('heal', duration, potionLevel);
                    }
                }
            }
        }
    }
}

// �r�[�R���̉ғ���ԂŌ����ڂ�ύX�AON/OFF�؂�ւ����ɃT�E���h��炷
if(enableBeacon){
    if(beaconMetadata == 0 || beaconMetadata == 8){
        if(beaconMetadata == 0){
            world.setBlockMetadata(position, 1);
        } else if(beaconMetadata == 8){
            world.setBlockMetadata(position, 9);
        }
        world.playSound('mob.wither.spawn', position, 1.5, 1.07);
    }
}else{
    if(beaconMetadata == 1 || beaconMetadata == 9){
        if(beaconMetadata == 1){
            world.setBlockMetadata(position, 0);
        } else if(beaconMetadata == 9){
            world.setBlockMetadata(position, 8);
        }
        world.playSound('mob.wither.death', position, 1.5, 1);
    }
}

// void igniteBeaconBaseBlazeBlocks(int level)
// �u���C�Y�u���b�N�r�[�R���s���~�b�h�����ׂĒ��΂���
// return �Ȃ�
function igniteBeaconBaseBlazeBlocks(level){
    for(n = 1; n <= level; n++){
        for(var i = -n; i <= n; i++){
            for(var k = -n; k <= n; k++){
                var nx = x + i;
                var ny = y - n;
                var nz = z + k;
                var blockName = world.getBlockName(nx, ny, nz);
                if(blockName == 'minecraft:air'){
                    world.playSound('mob.ghast.fireball', nx, ny, nz, 0.2, 1);
                    world.setBlock(nx, ny, nz, 'minecraft:fire');
                }
            }
        }
    }
}

// 初期化
var beaconMetadata = world.getBlockMetadata(position);
var enableBeacon = false;
var x = position.x;
var y = position.y;
var z = position.z;

// 1マス下がビーコンの場合のみ以下を実行
var blockName = world.getBlockName(x, y - 1, z);
if(blockName == 'minecraft:beacon' || blockName == 'etfuturum:beacon'){
    // ビーコンの上を高度限界までスキャン、空気かガラスか岩盤以外のブロックがないか確認
    var existsObstacle = false;
    for(var j = y + 1; j < 256; j++){
        var blockName = world.getBlockName(x, j, z);
        if(blockName != 'minecraft:air' && blockName != 'minecraft:glass' && blockName != 'minecraft:bedrock'){
            existsObstacle = true;
            break;
        }
    }
    
    // 障害物がない場合のみ以下を実行
    if(!existsObstacle){
        // ビーコンベースの種類
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
        
        // ビーコンの1マス下ブロックをみてビーコンベースの種類を判定
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
        
        // ビーコンベースをチェックしてレベルを計算
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
                    // ビーコンベースとして使用できないブロックを検出したら走査終了、レベルを確定
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
            
            // レベルから半径を決定
            var radiuses = [
                0, 20, 40, 80, 160
            ]
            var radius = radiuses[level];
            var duration = 160;
            var potionLevel = level - 1;
            
mod.printLine('BeaconRadius: ' + radius);
            
            // プレイヤーに各構成ブロックごとのポーション効果を付与
            var entities = world.enumEntities(position, radius, 'player');
            for(var i = 0; i < entities.length; i++){
                if(entities[i].isPlayer()){
                    var player = entities[i].asLiving();
                    // 金ブロックは採掘速度アップ
                    if(type == 'blockGold'){
                        player.addPotionEffect('digSpeed', duration, potionLevel);
                    }
                    // 鉄ブロックは採掘速度ダウン
                    else if(type == 'blockIron'){
                        player.addPotionEffect('digSlowDown', duration, potionLevel);
                    }
                    // 鋼ブロックは攻撃力アップ
                    else if(type == 'blockSteel'){
                        player.addPotionEffect('damageBoost', duration, potionLevel);
                    }
                    // 銅ブロックはプレイヤーに効果なし
                    
                    // 銀ブロックは移動速度アップ
                    else if(type == 'blockSilver'){
                        player.addPotionEffect('moveSpeed', duration, potionLevel);
                    }
                    // 錫ブロックはプレイヤーに効果なし
                    else if(type == 'blockTin'){
                    }
                    // ダイヤモンドブロックは防御力アップ
                    else if(type == 'blockDiamond'){
                        player.addPotionEffect('resistance', duration, potionLevel);
                    }
                    // レッドストーンブロックは透明化
                    else if(type == 'blockRedstone'){
                        player.addPotionEffect('invisibility', duration, potionLevel);
                    }
                    // エメラルドブロックは再生能力
                    else if(type == 'blockEmerald'){
                        player.addPotionEffect('regeneration', duration, potionLevel);
                    }
                    // スライムブロックはジャンプ力アップ
                    else if(type == 'blockSlime'){
                        player.addPotionEffect('jump', duration, potionLevel);
                    }
                    // ウラニウム238ブロックはプレイヤーに効果なし
                    
                    // ウラニウム235ブロックはプレイヤーに効果なし
                    
                    // ゾンビ肉ブロックは空腹
                    else if(type == 'blockFlesh'){
                        player.addPotionEffect('hunger', duration, potionLevel);
                    }
                    // 鉛ブロックは吐き気
                    else if(type == 'blockLead'){
                        player.addPotionEffect('confusion', duration, potionLevel);
                    }
                    // ブレイズブロックは火炎耐性、ブレイズブロックはすべて燃え上がる
                    else if(type == 'blockBlaze'){
                        player.addPotionEffect('fireResistance', duration, potionLevel);
                        igniteBeaconBaseBlazeBlocks(level);
                    }
                    // ラピスブロックは水中呼吸
                    else if(type == 'blockLapis'){
                        player.addPotionEffect('waterBreathing', duration, potionLevel);
                    }
                    // グロウストーンは暗視
                    else if(type == 'glowstone'){
                        player.addPotionEffect('nightVision', duration, potionLevel);
                    }
                    // 石炭ブロックは盲目
                    else if(type == 'blockCoal'){
                        player.addPotionEffect('blindness', duration, potionLevel);
                    }
                    // プルトニウムブロックはプレイヤーに効果なし
                    
                    // ネザースターブロックは即時回復
                    else if(type == 'blockNetherStar'){
                        player.addPotionEffect('heal', duration, potionLevel);
                    }
                }
            }
            
            // モブに各構成ブロックごとのポーション効果を付与
            var entities = world.enumEntities(position, radius, 'mob');
            for(var i = 0; i < entities.length; i++){
                if(entities[i].isLiving()){
                    var living = entities[i].asLiving();
                    // 金ブロックはプレイヤー以外には効果なし
                    
                    // 鉄ブロックはプレイヤー以外には効果なし
                    
                    // 鋼ブロックはプレイヤー以外には効果なし
                    
                    // 銅ブロックは弱体化
                    if(type == 'blockCopper'){
                        living.addPotionEffect('weakness', duration, potionLevel);
                    }
                    // 銀ブロックはプレイヤー以外も移動速度アップ
                    else if(type == 'blockSilver'){
                        living.addPotionEffect('moveSpeed', duration, potionLevel);
                    }
                    // 錫ブロックは移動速度ダウン
                    else if(type == 'blockTin'){
                        living.addPotionEffect('moveSlowdown', duration, potionLevel);
                    }
                    // ダイヤモンドブロックはプレイヤー以外には効果なし
                    
                    // レッドストーンブロックはプレイヤー以外には効果なし
                    
                    // エメラルドブロックはプレイヤー以外には効果なし
                    
                    // スライムブロックはプレイヤー以外もジャンプ力アップ
                    else if(type == 'blockSlime'){
                        living.addPotionEffect('jump', duration, potionLevel);
                    }
                    // ウラニウムブロックは毒
                    else if(type == 'blockUranium'){
                        living.addPotionEffect('poison', duration, potionLevel);
                    }
                    // ウラニウム235ブロックはウィザー状態
                    else if(type == 'blockUranium235'){
                        living.addPotionEffect('wither', duration, potionLevel);
                    }
                    // ゾンビ肉ブロックはプレイヤー以外には効果なし
                    
                    // 鉛ブロックはプレイヤー以外には効果なし
                    
                    // ブレイズブロックはプレイヤー以外も火炎耐性
                    else if(type == 'blockBlaze'){
                        living.addPotionEffect('fireResistance', duration, potionLevel);
                    }
                    // ラピスブロックはプレイヤー以外も水中呼吸
                    else if(type == 'blockLapis'){
                        living.addPotionEffect('waterBreathing', duration, potionLevel);
                    }
                    // グロウストーンはプレイヤー以外には効果なし
                    
                    // 石炭ブロックはプレイヤー以外には効果なし
                    
                    // プルトニウムブロックはダメージ
                    else if(type == 'blockPlutonium'){
                        living.addPotionEffect('harm', duration, potionLevel);
                    }
                    // ネザースターブロックはプレイヤー以外も即時回復
                    else if(type == 'blockNetherStar'){
                        living.addPotionEffect('heal', duration, potionLevel);
                    }
                }
            }
        }
    }
}

// ビーコンの稼働状態で見た目を変更、ON/OFF切り替え時にサウンドを鳴らす
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
// ブレイズブロックビーコンピラミッドをすべて着火する
// return なし
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
mod.loadScript('util.js');
var STRING_MAX = 256;
var STORAGE_MAX = 8;

// �X�j�[�N��

function addOre(key, num){
    if(key in ores){
        ores[key] = Number(ores[key]) + Number(num);
    }else{
        ores[key] = num;
    }
}

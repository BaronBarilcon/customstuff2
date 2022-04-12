mod.loadScript('util.js');
var STRING_MAX = 256;
var STORAGE_MAX = 8;

// スニーク時

function addOre(key, num){
    if(key in ores){
        ores[key] = Number(ores[key]) + Number(num);
    }else{
        ores[key] = num;
    }
}

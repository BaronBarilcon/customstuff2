
var leverMetadata = world.getBlockMetadata(position);
var x = position.x;
var y = position.y;
var z = position.z;

// レバーがONの場合
if(leverMetadata != 0){
    // レッドストーン信号を出力
    mod.loadScript('util/signalRedstone.js');
}

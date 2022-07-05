auto();
launchApp("抖音极速版");
var x1=device.width;
var y=device.height;
setScreenMetrics(x1, y);
function console_启动(){
    console.show();
    sleep(600);
    console.setSize((x1 / 2)-20 , (y / 4)-50);
}

sleep(random(2000,3000));//启动时间，等待程序加载
console_启动();
console.log("抖音极速版启动成功");
var i;
var 视频数量=1;
var 红包出现=text("恭喜你被红包砸中");
var 关闭按钮=id("iv_close");
//用bounds来click
//var b = desc("打开侧拉菜单").findOne().bounds();
//click(b.centerX(), b.centerY());
threads.start(function(){
    while(true){
        
        if(红包出现.exists()){
        console.info("出现红包");
        click(x1 / 2 , y / 2);
        console.info("已经领取");
        var 寻找关闭按钮=关闭按钮.findOne(100);
        if(寻找关闭按钮!=null){
            关闭按钮.click();
        }
        else{
            click(530,1930);
        }
        }
    sleep(600);
    }
} )
function 刷频(){
    for(i=1;i<10;i++)
    {
        var 随机偏移x=random(20,60);
        console.clear();
        var x=random(6000,8500);
        console.log("开始第" + 视频数量 + "个视频");
        swipe(800,1650,800-随机偏移x,300,350);
        console.log("随机播放" + x/1000 + "秒");
        sleep(x);
        视频数量++;
    }
    i=1;
}
while(true)
{
    刷频();
}

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
sleep(random(2000,3000));//启动时间，可以先手动打开，再运行程序
console_启动();
console.log("抖音极速版启动成功");
var i;
var 视频数量=1;
var 红包出现=text("恭喜你被红包砸中");
while(true)
{
    for(i=1;i<10;i++)
    {
        var 随机偏移x=random(20,60);
        console.clear();
        var x=random(5000,6500);
        console.log("开始第" + 视频数量 + "个视频");
        swipe(800,1650,800-随机偏移x,300,350);//无偏移图片过不去
        if(红包出现.exists()) {
            console.info("出现红包");
            click(x1 / 2 , y / 2);
            console.info("已经领取");
            var 关闭按钮=id("iv_close").findOne(100);
            if(关闭按钮!=null){
                关闭按钮.click();
            }
            else{
                click(530,1930);
            }
        }
        console.log("随机播放" + (x+2500)/1000 + "秒");
        sleep(x);
        视频数量++;
    }
    i=1;
}

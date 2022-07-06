auto();
launchApp("抖音极速版");
function console_启动(){
    console.show();
    sleep(600);
    console.setSize((x1 / 2)-20 , (y / 4)-50);
}
var x1=device.width;
var y=device.height;
setScreenMetrics(x1, y);
sleep(random(2000,3000));//启动时间，等待程序加载
console_启动();
console.log("抖音极速版启动成功");
var i;
var 视频数量=1;
var 红包出现=text("恭喜你被红包砸中");
var 关闭按钮=id("iv_close");
var global = 0;
var flag=0;
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
        var x=random(6*1000,8.5*1000);
        console.log("开始第" + 视频数量 + "个视频");
        swipe(800,1650,800-随机偏移x,300,350);
        console.log("随机播放" + x/1000 + "秒");
        global+=x;
        if(global >= 20*60*1000){
            领取宝箱();
            global=0;
        }
        if(flag==1){
            sleep(x*1.8);
        }else{
            sleep(x);
        }
        视频数量++;
    }
    i=1;
}

function 领取宝箱(){
    flag=1;
    click(500,2300);
    sleep(2*1000);//等待界面出现
    click(900,2200);
    sleep(2*1000);
    click(531,1627);
    sleep(2*1000);
    back();
    flag=0;
}

while(true)
{
    刷频();
}

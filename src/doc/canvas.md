# canvas 对象
  canvas 对象属性
   width －－ Canvas的宽度
   height －－ Canvas的
  
  canvas对象的方法
    getContext('2d')    ----获取Canvas 2D上下文环境对象
    toDataURL()     ---- 获取canvas对象产生的位图的字符串

  canvas只支持IE9以上版本  ，IE7和IE8可借助explorercanvas来扩展


# 绘图
    cxt.moveTo(x1, y1);
    cxt.lineTo(x2, y2);
    moveTo：将画笔移动到该点(x1, y1)的位置；然后开始绘图；
    lineTo：将画笔从起点(x1, y1)开始画直线，一直到终点坐标(x2, y2)；

  * 绘制‘描边’矩形
    cxt.strokeStyle = '#000000'   十六进制颜色值／颜色关键字（red）／rgb颜色值（rgb(255,0,0)）／rgba颜色值(rgba(255,0,0,0.8))
    cxt.strokeRect(x, y, width, height): 绘制‘描边’矩形；

  * 绘制‘填充’矩形
    cxt.fillStyle = '';
    cxt.fillRect(x, y, width, height)

  * 清空矩形
    cxt.clearRect(x, y, width, height)

  * 绘制圆
    anticlockwise： false 顺时针； true 逆时针
    cxt.arc(x,y,r,startdegress, enddegress,anticlockwise)

  * 画弧线
    - anticlockwise： false 顺时针； true 逆时针
      cxt.arc(x,y,r,startdegress, enddegress,anticlockwise)
      不使用 cxt.closePath()来闭合

    - cxt.arcTo(cx,cy,x2,y2,radius);
    (cx,cy) 控制点坐标
    (x2,y2) 终点坐标

  * 线条
   - lineWidth 定义线条宽度
    beginPath() 开始心得路径，才会生效不保留原本状态 ，
    用strokeRect()线条宽度为lineWidth，那么绘制出来的矩形实际宽度是width＋lineWidth，实际高度为height＋lineWidth；
    用arc()绘制的圆形 实际半径为radius＋lineWidth


   - lineCap 定义线帽样式
      Butt 默认值，无线帽
      Round  圆形线帽
      Square 正方形线帽

   - lineJoin 定义两个线条交界处样式
      miter  默认值，尖角
      round  圆角
      bevel  斜角

   - setLineDash(array) 定义线条的虚实样式
      ［10，5］ 10px实线，5空白

  * 文本

    - fillText(text, x, y, maxWidth) 填充文本
      text  字符串文本
      x，y 文本左下角坐标
      maxWidth 可选参数，允许最大文本宽度，单位为px， 若文本超出maxWidth，文本则会被压缩

    - strokeText(text, x, y, maxWidth) 描边文本


    - measureText() 获取文本长度


    -  font 文本字体样式
       'font-style font-weight  font-size/line-height  font-family'

    - textAlign 文本水平对齐方式
      start: 指定的横坐标开始
      end：指定的横坐标结束
      left： 左对齐，类似于start
      right：右对齐，类似于end
      center： 文本的中心被放置与指定的横坐标

    - textBaseline 文本垂直对齐方式
     alphabetic： 文本基线是普通英文字母的基线
     top：文本基线是em方框的顶端
     middle： 文本基线是em方框的中心
     bottom：文本基线是em方框的底端

    - fillStyle 画笔填充路径样式
    
    - strokeStyle 画笔描边填充样式

  * 图片操作

  - 绘制图片
    drawImage(image, dx, dy)
      dx,dy 图片左上角坐标

    drawImage(image, dx, dy, dw, dh)  可对图片缩放
      dx,dy 图片左上角坐标
      dw，dh图片宽高

    drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
      sx, sy, sw, sh ： 源图像需截取的范围
      dx, dy, dw, dh： 目标图片
    
  - 平铺图片，还有其他元素都可以
    createPattern(image, type);
      type: 
        repeat: 默认值，在水平和垂直方向同时平铺
        repeat-x: 在水平方向平铺
        repeat-y: 在垂直方向平铺
        no-repeat： 只显示一次（不平铺）

  - 切割图片
    clip()
    步骤
      绘制基本图形；
      使用clip方法；
      绘制图片






   

    
<template>
    <div class="cm-canvas1">
        <canvas id="canvas" style="border:1px dashed gray"></canvas>
        <br/>
        <canvas id="heart" style="border:1px dashed gray"></canvas>
        <br/>
        <canvas id="flower" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        var drawing = document.getElementById('canvas');
        var cxt = drawing.getContext('2d');
        drawing.width = '500'; //设置画布大小
        drawing.height = '500';
        if (drawing.getContext){  //获取绘图上下文
            var content = drawing.getContext("2d");
            this.getCurve(content);
            content.strokeStyle = "red";  //设置描边样式
            content.stroke();  //对路径描边
        }
    },
    methods: {
        getCurve(content) {
            let radian = 0,   //设置初始弧度
            radian_add = Math.PI/180;  //设置弧度增量
            content.beginPath();  //开始绘图
            content.translate(250,250);  //设置绘图原点
            content.moveTo(this.getX(radian),this.getY(radian)); //移动绘图游标至原点
            while(radian <= (Math.PI*2)){  //每增加一次弧度，绘制一条线
                radian += radian_add;
                let X = this.getX(radian);
                let Y = this.getY(radian);
                content.lineTo(X,Y);
            }
        },
        getX(t){   //获取玫瑰线的X坐标
            return 100 * Math.sin(4*t)*Math.cos(t);
        },

        getY(t){  //获取玫瑰线的Y坐标
            return 100 * Math.sin(4*t)*Math.sin(t);
        },

        getX1(t){  //获取心型线的X坐标
            return 15*(16*Math.pow(Math.sin(t),3))
        },

        getY1(t){  //获取心型线的Y坐标
            return -15*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))
        }
    }
}
</script>


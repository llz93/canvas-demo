<template>
    <div class="cm-circle">
        <canvas id="canvas" height="600" width="1000" style="border:1px dashed gray"></canvas>
        <br/>
        <canvas id="curve" height="300" width="1000" style="border:1px dashed gray"></canvas>
        <br/>
        <canvas id="quadratic" height="200" width="1000" style="border:1px dashed gray"></canvas>
        <canvas id="bezier" height="400" width="1000" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
import { mcall } from 'q';
export default {
    mounted() {
        let cnv = document.getElementById('canvas');
        let cxt = cnv.getContext('2d');
        this.createcirlce(cxt);
        this.createcirlceFill(cxt);
        this.pitcharc(cxt);

        let curve = document.getElementById('curve');
        let curveCxt = curve.getContext('2d');
        this.pitcharcTo(curveCxt);
        this.roundRect(curveCxt);
        this.createRoundRect(curveCxt, 130, 160, 20,400,20);
        curveCxt.strokeStyle = 'red'
        curveCxt.stroke();
        let quadratic = document.getElementById('quadratic');
        let quadraticCxt = quadratic.getContext('2d');
        this.createBubble(quadraticCxt);
        let bezier = document.getElementById('bezier');
        let bezierCxt = bezier.getContext('2d');
        this.createHeart(bezierCxt, 40, 20);
        bezierCxt.fillStyle = 'red';
        bezierCxt.fill();
        this.createLeaf(bezierCxt, 4, 400, 60,20,80);
        bezierCxt.fillStyle = 'green';
        bezierCxt.fill();
        this.createLeaf(bezierCxt, 5, 600, 60,20,80);
        bezierCxt.fillStyle = 'green';
        bezierCxt.fill();
        this.createLeaf(bezierCxt, 8, 400, 260,20,80);
        bezierCxt.fillStyle = 'green';
        bezierCxt.fill();
        this.createLeaf(bezierCxt, 12, 600, 260,20,80);
        bezierCxt.strokeStyle = 'green';
        bezierCxt.stroke();
    },
    methods: {
        // 描边圆
        createcirlce(cxt) {
            cxt.beginPath();
            cxt.arc(80, 80, 50, 0, 180 * Math.PI/180,true);
            cxt.closePath();
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();

            // 整圆
            cxt.beginPath();
            cxt.arc(120, 80, 50, 0, 360 * Math.PI/180, true);
            cxt.closePath();
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();
            // 
            cxt.beginPath();
            cxt.arc(220, 80, 50, 0, -90 * Math.PI/180, true);
            cxt.closePath();
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();

            cxt.beginPath();
            cxt.arc(350, 80, 50, 0, -90 * Math.PI/180, false);
            cxt.closePath();
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();
        },
        // 填充圆
        createcirlceFill(cxt){
            cxt.beginPath();
            cxt.arc(80, 280, 50, 0, 180 * Math.PI/180,true);
            cxt.closePath();
            cxt.fillStyle = 'HotPink';
            cxt.fill();

            // 整圆
            cxt.beginPath();
            cxt.arc(120, 280, 50, 0, 360 * Math.PI/180, true);
            cxt.closePath();
            cxt.fillStyle = 'red';
            cxt.fill();
            // 
            cxt.beginPath();
            cxt.arc(220, 280, 50, 0, -90 * Math.PI/180, true);
            cxt.closePath();
            cxt.fillStyle = 'HotPink';
            cxt.fill();

            cxt.beginPath();
            cxt.arc(350, 280, 50, 0, -90 * Math.PI/180, false);
            cxt.closePath();
            cxt.fillStyle = 'HotPink';
            cxt.fill();
        },
        // 弧线 arc
        pitcharc(cxt){
            cxt.beginPath();
            cxt.arc(80, 480, 50, 0, 180 * Math.PI/180,true);
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();

            cxt.beginPath();
            cxt.arc(220, 480, 50, 0, -90 * Math.PI/180, true);
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();

            cxt.beginPath();
            cxt.arc(350, 480, 50, 0, -90 * Math.PI/180, false);
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();

            cxt.beginPath();
            cxt.arc(580, 480, 50, 0, -90 * Math.PI/180,true);
            cxt.strokeStyle = 'HotPink';
            cxt.moveTo(480,430);
            cxt.lineTo(580, 430);
            cxt.stroke();
        },
        // 弧线 arcTo
        pitcharcTo(cxt){
            cxt.moveTo(20,20);
            cxt.lineTo(70,20);
            cxt.arcTo(120,20,120,70,50);
            cxt.lineTo(120,120);
            cxt.strokeStyle = 'HotPink';
            cxt.stroke();
        },
        // 圆角矩形
        roundRect(cxt) {
            cxt.moveTo(220,20);
            cxt.lineTo(320,20);
            cxt.arcTo(340,20,340,40,20);
            cxt.lineTo(340,100);
            cxt.arcTo(340,120,320,120,20);
            cxt.lineTo(320,120);
            cxt.arcTo(200,120,200,100,20);
            cxt.lineTo(200,40);
            cxt.arcTo(200,20,220,20,20);
            cxt.closePath();
            cxt.strokeStyle='HotPink';
            cxt.stroke();
        },
        /**
         * width:宽
         * height：高
         * r：圆角半径
         * x，y最左上角坐标，即长方形左上角坐标
         */
        createRoundRect(cxt, width, height, r, x, y){
            cxt.beginPath();
            cxt.moveTo(x + r, y);
            cxt.lineTo(x + width - r, y);
            cxt.arcTo(x + width, y, x + width , y + r, r);
            cxt.lineTo(x + width, y + height - r);
            cxt.arcTo(x + width, y + height, x + width -r, y + height, r);
            cxt.lineTo(x + r, y + height);
            cxt.arcTo(x, y + height, x, y + height - r,r);
            cxt.lineTo(x, y + r);
            cxt.arcTo(x,y, x + r, y ,r);
            cxt.closePath();
        },
        /**
         * 气泡
         */
        createBubble(cxt) {
            cxt.moveTo(100,30);
            cxt.quadraticCurveTo(50, 30, 50,67);
            cxt.quadraticCurveTo(50, 105, 75,105);
            cxt.quadraticCurveTo(75,125,55,130);
            cxt.quadraticCurveTo(85,125,90,105);
            cxt.quadraticCurveTo(150, 105,150,67);
            cxt.quadraticCurveTo(150,30,100,30);
            cxt.stroke();
        },
        /**
         * 绘制心形
         */
        createHeart(cxt, x, y){
            cxt.beginPath();
            cxt.moveTo(x + 55, y + 15);
            cxt.bezierCurveTo(x + 55, y+12, x+50,y,x+30,y);
            cxt.bezierCurveTo(x, y, x, y+37.5, x, y+37.5);
            cxt.bezierCurveTo(x, y+55, x+20, y+77, x+55, y+95);
            cxt.bezierCurveTo(x+90, y+77, x+110,y+55, x+110, y+37.5);
            cxt.bezierCurveTo(x+110, y+37.5, x+110, y, x+80, y);
            cxt.bezierCurveTo(x+65, y, x+55, y+12, x + 55, y + 15);
            cxt.closePath();
        },
        /**
         * 绘制 n叶草 ，4，5.。
         * n: n片
         * dx，dy叶子中心位置坐标
         * size 叶子大小
         * length 叶子长度
         * 
         */
        createLeaf(cxt, n, dx, dy, size, length) {
            cxt.beginPath();
            cxt.moveTo(dx, dy + size);
            let degree = 2 * Math.PI / n;
            for (let i = 1; i < n + 1; i ++) {
                let cx1 = Math.sin((i-1) * degree) * length + dx;
                let cy1 = Math.cos((i-1) * degree) * length + dy;
                let cx2 = Math.sin(i * degree) * length + dx;
                let cy2 = Math.cos(i * degree) * length + dy;
                let x = Math.sin(i * degree) * size + dx;
                let y = Math.cos(i * degree) * size + dy;
                cxt.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
            }
            cxt.closePath();
        }
        
    }
}
</script>


<!-- 多边形 绘图-->
<template>
    <div class="cm-regular-polygon">
        <!-- 三角形 -->
        <canvas id="canvas3" height="150" width="200" style="border:1px dashed gray"></canvas>
        <br/>
        <!-- 正方形 -->
        <canvas id="canvas4" height="150" width="200" style="border:1px dashed gray"></canvas>
        <br/>
        <!-- 5边形 -->
        <canvas id="canvas5" height="150" width="200" style="border:1px dashed gray"></canvas>
        <br/>
        <!-- 6边形 -->
        <canvas id="canvas6" height="150" width="200" style="border:1px dashed gray"></canvas>
        <br/>
        <!-- 8边形 -->
        <canvas id="canvas8" height="150" width="200" style="border:1px dashed gray"></canvas>
        <br/>
        <!-- 10边形 -->
        <canvas id="canvas10" height="150" width="200" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        let cnv3 = document.getElementById('canvas3');
        let cxt3 = cnv3.getContext('2d');
        this.createPolygon(cxt3, 3, 100, 75, 50);
        cxt3.fillStyle = 'HotPink';
        cxt3.fill();
        // 正方形
        let cnv4 = document.getElementById('canvas4');
        let cxt4 = cnv4.getContext('2d');
        this.createPolygon(cxt4, 4, 100, 75, 50);
        cxt4.fillStyle = 'HotPink';
        cxt4.fill();
        // 5边形
        let cnv5 = document.getElementById('canvas5');
        let cxt5 = cnv5.getContext('2d');
        this.createPolygon(cxt5, 5, 100, 75, 50);
        cxt5.fillStyle = 'HotPink';
        cxt5.fill();
        // 6边形
        let cnv6 = document.getElementById('canvas6');
        let cxt6 = cnv6.getContext('2d');
        this.createPolygon(cxt6, 6, 100, 75, 50);
        cxt6.fillStyle = 'HotPink';
        cxt6.fill();
        // 8边形
        let cnv8 = document.getElementById('canvas8');
        let cxt8 = cnv8.getContext('2d');
        this.createPolygon(cxt8, 8, 100, 75, 50);
        cxt8.fillStyle = 'HotPink';
        cxt8.fill();
        // 10边形
        let cnv10 = document.getElementById('canvas10');
        let cxt10 = cnv10.getContext('2d');
        this.createPolygon(cxt10, 10, 100, 75, 50);
        cxt10.fillStyle = 'HotPink';
        cxt10.fill();
    },
    methods: {
        /**
         * n: n边形
         * dx， dy：n边形中心坐标
         * size： n边形大小
         */
        createPolygon(cxt, n, dx, dy, size) {
            cxt.beginPath();
            var degree = (2 * Math.PI)/n;
            for (var i = 0; i < n; i++) {
                var x = Math.cos(i * degree);
                var y = Math.sin(i * degree);
                cxt.lineTo(x*size + dx, y*size + dy);
            }
            cxt.closePath();
        }
    }
}
</script>


<template>
    <div class="cm-pie-">
        <canvas id="canvas" height="350" width="1000" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        var cnv = document.getElementById('canvas');
        var cxt = cnv.getContext('2d');
        this.createPieChart(cxt,50,50,30,0,360,false);
        cxt.fillStyle = 'blue';
        cxt.fill();
        this.createPieChart(cxt,50,50,30,30,70,false);
        cxt.fillStyle = 'HotPink';
        cxt.fill();
    },
    methods: {
        createPieChart (cxt, x, y, r, startAngle, endAngle, flag) {
            cxt.beginPath();
            cxt.moveTo(x, y);
            cxt.arc(x, y, r, startAngle * Math.PI / 180, endAngle * Math.PI / 180, flag);
            cxt.closePath();
        }
    }
}
</script>


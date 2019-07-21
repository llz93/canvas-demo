<template>
    <div class="cm-canvas1">
        <canvas id="canvas" height="150" width="200" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        var cnv = document.getElementById('canvas');
        var cxt = cnv.getContext('2d');
        cxt.moveTo(40, 60);
        cxt.lineTo(100, 60);
        cxt.lineTo(100, 30);
        cxt.lineTo(150, 75);
        cxt.lineTo(100, 120);
        cxt.lineTo(100, 90);
        cxt.lineTo(40, 90);
        cxt.lineTo(40, 60);
        cxt.stroke();
    }
}
</script>


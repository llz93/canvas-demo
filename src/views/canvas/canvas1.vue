<template>
    <div class="cm-canvas1">
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        var cnv = document.getElementById('canvas');
        var cxt = cnv.getContext('2d');
        cxt.moveTo(50, 100);
        cxt.lineTo(150, 50);
        cxt.stroke();
    }
}
</script>


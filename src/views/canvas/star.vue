<template>
    <div class="cm-star">
        <canvas id="canvas" height="150" width="200" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        var cnv = document.getElementById('canvas');
        var cxt = cnv.getContext('2d');
        this.createStar5(cxt);
        cxt.stroke();
    },
    methods: {
        createStar5(cxt) {
            cxt.beginPath();
            for (let i=0; i<5; i++) {
                cxt.lineTo(Math.cos((18+ i * 72) * Math.PI/180)*50 + 100, -Math.sin((18 + i * 72) * Math.PI/180) * 50 + 100);
                cxt.lineTo(Math.cos((54+ i * 72) * Math.PI/180)*25 + 100, -Math.sin((54 + i * 72) * Math.PI/180) * 25 + 100);
            }
            cxt.closePath();
            cxt.stroke();
        }
    }
}
</script>


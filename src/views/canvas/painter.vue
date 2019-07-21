<template>
    <div class="cm-canvas1">
        <canvas id="canvas" height="150" width="200" style="border:1px dashed gray"></canvas>
        <br/>
        <canvas id="canvas1" height="150" width="200" style="border:1px dashed gray"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        let cnv = document.getElementById('canvas');
        let cxt = cnv.getContext('2d');
        this.createPainter(cxt);
        let cnv1 = document.getElementById('canvas1');
        let cxt1 = cnv1.getContext('2d');
        this.createPainterGradually(cxt1, cnv1);
    },
    methods: {
        createPainter(cxt) {
            for(let i = 0; i < 6; i ++) {
                for (let j = 0; j<6; j++) {
                    cxt.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 *j) + ', 0)';
                    cxt.fillRect(j * 25, i*25, 25, 25); 
                }
            }
        },
        createPainterGradually (cxt, cnv) {
            let r = 255, g = 0, b = 0;
            for (let i = 0; i < 150 ; i ++ ) {
                if (i < 25) {
                    g +=10;
                } else if (i > 25 && i < 50) {
                    r -=10;
                } else if(i > 50 && i < 75) {
                    g -= 10;
                    b += 10;
                } else if(i >= 75 && i < 100) {
                    r ==10;
                } else {
                    b -= 10;
                }
                cxt.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                cxt.fillRect(3 * i, 0, 3, cnv.height);
            }
        }
    }
}
</script>


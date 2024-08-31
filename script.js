window.onload = function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d")

    function criarquadrado (y, x, largura, cor) {
    
        ctx.fillStyle = cor;
        ctx.fillRect(y, x, largura, largura) ;
        }

        function desenharquadrado() {
            const tamanhoquadrado  = 50;
            const distancia = 4;
            const larguraCanvas = canvas.width;
            let x = 0;
            while (x + tamanhoquadrado <= larguraCanvas) {
                criarquadrado(x, 0, tamanhoquadrado, '#000');
                x += tamanhoquadrado + distancia;                
            }

            
        }
    desenharquadrado();
}





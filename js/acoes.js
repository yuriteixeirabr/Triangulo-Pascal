function triangleGeneratePascal(numberRows) {
    var no_row, c = 1, first = false, x = 300, y = 10;
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = "12px Arial";
        no_row = numberRows;
        for (var i = 0; i < no_row; i++) {

            var tempX = x;
            for (var j = 0; j <= i; j++) {
                if (j == 0 || i == 0) {
                    c = 1;
                    if (!first) {
                        ctx.fillStyle = 'black';
                        ctx.fillRect(tempX, y, 30, 30);
                        ctx.fillStyle = 'red';
                        ctx.fillText(c, (tempX + 10), (y + 20));
                        first = true;
                    } else {
                        ctx.fillStyle = 'black';
                        ctx.fillRect(tempX, y, 30, 30);
                        ctx.fillStyle = 'red';
                        ctx.fillText(c, (tempX + 10), (y + 20));
                        tempX = tempX + 30;
                    }
                } else {
                    c = c * (i - j + 1) / j;
                    if (c % 2 == 0) {
                        ctx.fillStyle = 'white';
                        ctx.fillRect(tempX, y, 30, 30);
                        ctx.fillStyle = 'red';
                        ctx.fillText(c, (tempX + 10) - (c.toString().length + 3), (y + 20));
                    } else {
                        ctx.fillStyle = 'black';
                        ctx.fillRect(tempX, y, 30, 30);
                        ctx.fillStyle = 'red';
                        ctx.fillText(c, (tempX + 10) - (c.toString().length + 3), (y + 20));
                    }

                    tempX = tempX + 30;
                }
            }
            x = x - 15;
            y = y + 30;
        }
    }
}
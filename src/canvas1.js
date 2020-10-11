function genships(n) {
    var ships = [];
    for (var i = 0; i < n; i = i + 1) {
        var width = n + 1;
        var starting = n / 2;
        var x = Math.floor(Math.random() * (width) - (starting));
        var y = Math.floor(Math.random() * (width) - (starting));
        ships.push([x, y]);
    }

    return ships;
}

function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function merge(p, i, k, j, index) {
    var result = [];
    var length = 0;

    //position counters
    var c1 = i;
    var c2 = k;

    for (var l = 0; l < i; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    while (c1 < k || c2 < j) {
        if (c1 < k && c2 < j) {
            if (p[c1][index] < p[c2][index]) {
                //result.push(p[c1]);
                result[length++] = p[c1];
                c1 = c1 + 1;
            } else {
                //result.push(p[c2]);
                result[length++] = p[c2];
                c2 = c2 + 1;
            }
        } else if (c1 < k) {
            //result.push(p[c1]);
            result[length++] = p[c1];
            c1 = c1 + 1;
        } else if (c2 < j) {
            //result.push(p[c2]);
            result[length++] = p[c2];
            c2 = c2 + 1;
        }
    }

    for (l = j; l < p.length; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    return result;
}


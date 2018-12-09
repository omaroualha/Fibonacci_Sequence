var express = require('express');
var router = express.Router();


router.get("/evenValue", function (err, res) {
    res.send(getFiboncciSequence());
});


function getNextValue(sequence) {
    var n = sequence.length;
    return sequence[n - 1] + sequence[n - 2];
}


function getFiboncciSequence() {
    var sequence = [1, 2];
    var sum = 0;

    while (sequence[sequence.length - 1] < 4000000) {
        sequence.push(getNextValue(sequence));
    }
    sequence.forEach(function (n) {
        if (n % 2 === 0) {
            sum += n;
        }
    });

    return sum.toString();

}
module.exports = router;

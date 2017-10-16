var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
})(myConstants || (myConstants = {}));
function areaOfSquare(side1, isTicked, side2) {
    if (side2 === void 0) { side2 = side1; }
    if (isTicked) {
        return Math.floor(side1 * side2);
    }
    else
        return side1 * side2;
}
function circumferenceOfCircle(radius) {
    return 2 * radius * myConstants.pi;
}
console.log(circumferenceOfCircle(3) + "\n" + areaOfSquare(5.5, true));

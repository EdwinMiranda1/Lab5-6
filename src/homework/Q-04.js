(function () {
    /* APLICA DRY */
    //EX - 1
    function calculateOperation(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    // EX - 2
    function calculateRectangleArea(length, width) {
        return length * width;
    }
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }
    // EX - 3
    //No es necesario aumentar código en este ejercicio
    function validateEmail(email) {
        //...some code for validate here
        return false;
    }
    function validateUsername(username) {
        //...some code for validate here
        return false;
    }
})();

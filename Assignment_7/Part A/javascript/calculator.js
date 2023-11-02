$(document).ready(function () {

    $(".hide-1, .hide-2").css("color", "red");

    const performOperation = (operation) => {
        let numm1 = false;
        let numm2 = false;
        const num1 = parseFloat($(".input-4").val());
        const num2 = parseFloat($(".input-5").val());
        const check = /^[0-9]\d*(\.\d+)?$/;

        if (isNaN(num1) || !num1.toString().match(check)) {
            $(".hide-1").text("Enter valid Number1");
        } else {
            $(".hide-1").text("");
            numm1 = true;
        }

        if (isNaN(num2) || !num2.toString().match(check)) {
            $(".hide-2").text("Enter valid Number2");
        } else {
            $(".hide-2").text("");
            numm2 = true;
        }

        if (numm1 && numm2) {
            let total;
            if (operation === 'add') {
                total = num1 + num2;
            } else if (operation === 'subtract') {
                total = num1 - num2;
            } else if (operation === 'multiply') {
                total = num1 * num2;
            } else if (operation === 'divide') {
                total = num1 / num2;
            }

            $("#answer").text(`Answer is ${total}`);
            $(".input-4").val("");
            $(".input-5").val("");
        }
    };

    $("#plus").on("click", () => performOperation('add'));
    $("#minus").on("click", () => performOperation('subtract'));
    $("#multiply").on("click", () => performOperation('multiply'));
    $("#divide").on("click", () => performOperation('divide'));
});

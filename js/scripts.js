$(document).ready(function() {
    $("#form1").submit(function(event) {
        event.preventDefault();
        var binary = $("#number").val();
        //var binary = binaryStr.split("").reverse().join("");
        var decimal = 0;
        var power = 0;
        for (var i = binary.length-1; i>=0; i--) {
            console.log(power);
            if (parseInt(binary[i]) === 1) {
                decimal += Math.pow(2, power);
            }
            power+=1;
        }

        $("#binary").text(binary);
        $("#decimal").text(decimal);
        $("#resultBox").show();
    })


});

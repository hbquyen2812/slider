$(document).ready(function () {
    $("#slider-range").slider({
        range: true,
        values: [0, 450],
        min: 0,
        max: 450,
        step: 1,
        slide: function (event, ui) {
            $("#min-price").html(ui.values[0]);

            $("#max-price").html(ui.values[1]);
        }
    });
})
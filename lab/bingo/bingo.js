$(document).ready(function () {
    "use strict";
    var $checkboxes = $('input[type="checkbox"]');
    $checkboxes.change(function () {
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        if (countCheckedCheckboxes === 20) {
            alert("Bingo! We have a winner!");
        }
    });
});
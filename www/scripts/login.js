/**
 * Created by Kenneth on 02/08/2015.
 */
$(document).ready(function () {

    $("#btn-submit").click(function (e) {
        e.preventDefault();

        var href = $(this).attr("href");

        alert("going to " + href);
        window.location = href;
    });
});
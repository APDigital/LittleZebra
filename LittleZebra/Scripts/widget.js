$(function disable() {
    $('#searchInput').keyup(function () {
        if ($(this).val() == '') {
            $('.disableOnInput').prop('disabled', false);
        }
        else {
            $('.disableOnInput').prop('disabled', true);
        }
    })
});
$(function hidden() {
    $('#searchInput').keyup(function () {
        if ($(this).val() <= 10) {
            $('.warn').prop('hidden', false);
        }
        if ($(this).val() == '') {
            $('.warn').prop('hidden', true);
        }
        if ($(this).val() >= 11) {
            $('.warn').prop('hidden', true);
        }
    })
});
$(document).ready(function () {
    $("#animalSelect").change(function () {
        $("img[name=image-swap]").attr("src", $(this).val());

    });

});
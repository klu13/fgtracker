

export const loadIntoDOM = function() {
    const $root = $("#root");
    $(document).on('click', '.dropdown', function(event) {
        event.stopPropagation()
        $('.dropdown').toggleClass('is-active')
    })

}

$(function () {
    loadIntoDOM();
})
export const handleDropdownClick = (event) => {
    let rounds = event.data
    if ($(`#picked-num-rounds`).length == 0) {
        let html = `<div id="display-rounds" class="columns is-multiline">`
        for (let i = 0; i < rounds; i++) {
            html += `
            <div class="column is-one-quarter" style="padding:20px">
                <div class="container">
                    <div class="card" style="height:300px; width: 300px; padding: 25px">Test</div>
                </div>
            </div>
            `
        }
        html += '</div>'
        $("#root").append(html)
        $(`#num-rounds`).replaceWith(`<span id='picked-num-rounds'>${rounds} Rounds</span>`)
    } else {
        let html = `<div id="display-rounds" class="columns is-multiline">`
        for (let i = 0; i < rounds; i++) {
            html += `
            <div class="column is-one-quarter" style="padding:20px">
                <div class="container">
                    <div class="card" style="height:300px; width: 300px; padding: 25px">Test</div>
                </div>
            </div>            
            `
        }
        html += '</div>'
        $("#display-rounds").replaceWith(html)
        $(`#picked-num-rounds`).replaceWith(`<span id='picked-num-rounds'>${rounds} Rounds</span>`)
    }

}

export const loadIntoDOM = function() {
    const $root = $("#root");
    $(document).on('click', '.dropdown', function(event) {
        event.stopPropagation()
        $('.dropdown').toggleClass('is-active')
    }) 
    for (let i = 1; i < 9; i++) {
        $(document).on('click', '#dropdown-'+i, i, handleDropdownClick)
    }
}

$(function () {
    loadIntoDOM();
})
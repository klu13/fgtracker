export const handleDropdownClick = (event) => {
    let rounds = event.data
    let html = `<div id="display-rounds" class="columns is-multiline">`
    let stages = ['Big Fans', 'Block Party', 'Dizzy Heights', 'Door Dash', 'Egg Scramble', 'Egg Siege', 
        'Fall Ball', 'Fall Mountain', 'Fruit Chute', 'Gate Crash', 'Hex A Gone', 'Hit Parade', 'Hoarders', 
        'Hoopsie Daisy', 'Hoopsie Legends', 'Knight Fever', 'Jinxed', 'Jump Club', 'Jump Showdown', 
        'Perfect Match', 'Rock N Roll', 'Roll Out', 'Royal Fumble', 'See Saw', 'Slime Climb', 'Tail Tag', 
        'Team Tail Tag', 'The Whirlygig', 'Tip Toe']
    for (let i = 0; i < rounds; i++) {
        html += `
        <div class="column is-one-quarter" style="margin-top: 20px">
        <div class="card" style="height: 250px; width: 300px; padding: 25px; text-align:center; overflow:visible">
        <h3>Round #${i + 1}</h3>
        ${/*<div class="dropdown" id="dropdown-stage-${i + 1}" style="margin-top:20px;margin-bottom: 20px">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Select stage</span>
                    <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-level" role="menu" style="z-index: 2">
                <div class="dropdown-content">
                    <div class="dropdown-item">
                        <button class="button is-white">Block Party</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Dizzy Heights</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Door Dash</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Egg Scramble</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Egg Siege</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Fall Ball</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Fall Mountain</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Fruit Chute</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Gate Crash</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Hex A Gone</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Hit Parade</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Hoarders</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Hoopsie Daisy</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Hoopsie Legends</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Knight Fever</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Jinxed</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Jump Club</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Jump Showdown</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Perfect Match</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Rock N Roll</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Roll Out</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Royal Fumble</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">See Saw</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Slime Climb</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Tail Tag</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Team Tail Tag</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">The Whirlygig</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white">Tip Toe</button>
                    </div>     
                </div>
            </div>
        </div>*/`
        <div style="padding: 15px;margin-top:20px;margin-bottom: 20px">
        <input class='input' id='select-stage-${i}' type='text' placeholder="Enter stage..."></div>
        `}
        ${i != rounds - 1 ? `<div class="dropdown" id="dropdown-medal-${i + 1}">
        <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" style="z-index:1">
                    <span id="medal-placeholder-${i+1}">Select medal</span>
                    <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu" >
                <div class="dropdown-content" style="width: 158px">
                    <div class="dropdown-item">
                        <button class="button is-white" id="medal-1" data-card="${i + 1}" data-name="None">None</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white" id="medal-2" data-card="${i + 1}" data-name="Bronze">Bronze</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white" id="medal-3" data-card="${i + 1}" data-name="Silver">Silver</button>
                    </div>
                    <div class="dropdown-item">
                        <button class="button is-white" id="medal-4" data-card="${i + 1}" data-name="Gold">Gold</button>
                    </div>
                </div>
            </div>
        </div>` : ``}
        </div>
        </div>
        `
    }
    html += '</div>'
    if ($(`#picked-num-rounds`).length == 0) {
        $("#root").append(html)
        $(`#num-rounds`).replaceWith(`<span id='picked-num-rounds'>${rounds} Rounds</span>`)
    } else {
        $("#display-rounds").replaceWith(html)
        $(`#picked-num-rounds`).replaceWith(`<span id='picked-num-rounds'>${rounds} Rounds</span>`)
    }
    for (let i = 0; i < rounds; i++) {
        let input = document.getElementById(`select-stage-${i}`)
        autocomplete({
            input: input,
            fetch: function(text, update) {
                text = text.toLowerCase();
                let suggestions = stages.filter(n => n.toLowerCase().includes(text))
                update(suggestions);
            },
            onSelect: function(item) {
                input.value = item;
            },
            render: function(item, currentValue) {
                var div = document.createElement("div");
                div.textContent = item;
                return div;
            },
            renderGroup: function(groupName, currentValue) {
                var div = document.createElement("div");
                div.textContent = groupName;
                return div;
            },
            debounceWaitMs: 300,
        })
    }
}

export const handleInputCardDropdownClick = function (event) {
    let cardNumber = event.target.getAttribute("data-card");
    let medalName = event.target.getAttribute("data-name");
    $(`#medal-placeholder-${cardNumber}`).replaceWith(`<span id="medal-placeholder-${cardNumber}">${medalName}</span>`)
}

export const handleCrownClick = (event) => {
    let win = event.data
    if (win) {
        $('#win-crown').replaceWith(`<span id="win-crown">Yes</span>`)
    } else {
        $('#win-crown').replaceWith(`<span id="win-crown">No</span>`)
    }
}

export const loadIntoDOM = function () {
    const $root = $("#root");
    $(document).on('click', '#dropdown-number', function (event) {
        event.stopPropagation()
        $('#dropdown-number').toggleClass('is-active')
    })
    $(document).on('click', '#crown-dropdown', function (event) {
        event.stopPropagation()
        $('#crown-dropdown').toggleClass('is-active')
    })
    $(document).on('click', '#crown-yes', true, handleCrownClick)
    $(document).on('click', '#crown-no', false, handleCrownClick)
    for (let i = 1; i < 9; i++) {
        $(document).on('click', '#dropdown-' + i, i, handleDropdownClick)
        $(document).on('click', `#dropdown-stage-${i}`, function (event) {
            event.stopPropagation()
            $(`#dropdown-stage-${i}`).toggleClass('is-active')
        });
        $(document).on('click', `#dropdown-medal-${i}`, function (event) {
            event.stopPropagation()
            $(`#dropdown-medal-${i}`).toggleClass('is-active')
        })
    }

    for (let i = 1; i < 5; i++) {
        $(document).on('click', '#medal-' + i, i, handleInputCardDropdownClick);
    }
}

$(function () {
    loadIntoDOM();
})
export const handleDropdownClick = (event) => {
    let rounds = event.data
    if ($(`#picked-num-rounds`).length == 0) {
        let html = `<div id="display-rounds" class="columns is-multiline">`
        for (let i = 0; i < rounds; i++) {
            html += `
            <div class="column is-one-quarter" style="padding:20px">
            <div class="card" style="height: 400px; width: 300px; padding: 25px; text-align:center">
            <h3>Round #${i + 1}</h3>
            <div class="dropdown" id="dropdown-stage-${i + 1}" style="margin-bottom: 10px">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Select stage</span>
                        <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-level" role="menu">
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
            </div>
            <div class="dropdown" id="dropdown-medal-${i + 1}">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Select medal</span>
                        <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <button class="button is-white">None</button>
                        </div>
                        <div class="dropdown-item">
                            <button class="button is-white">Bronze</button>
                        </div>
                        <div class="dropdown-item">
                            <button class="button is-white">Silver</button>
                        </div>
                        <div class="dropdown-item">
                            <button class="button is-white">Gold</button>
                        </div>
                    </div>
                </div>
            </div>
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
            <div class="card" style="height: 400px; width: 300px; padding: 25px; text-align:center">
            <h3>Round #${i + 1}</h3>
            <div class="dropdown" id="dropdown-stage-${i + 1}" style="margin-bottom: 10px">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Select stage</span>
                        <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-level" role="menu">
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
            </div>
            <div class="dropdown" id="dropdown-medal-${i + 1}">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Select medal</span>
                        <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <button class="button is-white">None</button>
                        </div>
                        <div class="dropdown-item">
                            <button class="button is-white">Bronze</button>
                        </div>
                        <div class="dropdown-item">
                            <button class="button is-white">Silver</button>
                        </div>
                        <div class="dropdown-item">
                            <button class="button is-white">Gold</button>
                        </div>
                    </div>
                </div>
            </div>
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
    $(document).on('click', '#dropdown-number', function(event) {
        event.stopPropagation()
        $('#dropdown-number').toggleClass('is-active')
    }) 
    for (let i = 1; i < 9; i++) {
        $(document).on('click', '#dropdown-'+i, i, handleDropdownClick)
        $(document).on('click', `#dropdown-stage-${i}`, function(event) {
            event.stopPropagation()
            $(`#dropdown-stage-${i}`).toggleClass('is-active')
        });
        $(document).on('click', `#dropdown-medal-${i}`, function(event) {
            event.stopPropagation()
            $(`#dropdown-medal-${i}`).toggleClass('is-active')
        })  
    }
}

$(function () {
    loadIntoDOM();
})
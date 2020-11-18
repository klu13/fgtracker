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
        <input class='input' id='select-stage-${i+1}' type='text' placeholder="Enter stage..."></div>
        `}
        ${i != rounds - 1 ? `<div class="dropdown" id="dropdown-medal-${i + 1}">
        <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" style="z-index:1">
                    <span id="medal-placeholder-${i+1}" data-name="No selection">Select medal</span>
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
    html += `</div>`
    if ($(`#picked-num-rounds`).length == 0) {
        html += `<button id="submit-button" class="button" style="background-color: #e75480">
                <p style="font-family: Titan One;">Submit!</p>
            </button>`
        $("#root").append(html)
        $(`#num-rounds`).replaceWith(`<span id='picked-num-rounds'>${rounds} Rounds</span>`)
    } else {
        $("#display-rounds").replaceWith(html)
        $(`#picked-num-rounds`).replaceWith(`<span id='picked-num-rounds'>${rounds} Rounds</span>`)
    }
    for (let i = 0; i < rounds; i++) {
        let input = document.getElementById(`select-stage-${i+1}`)
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
            debounceWaitMs: 200,
        })
    }
}

export const handleInputCardDropdownClick = function (event) {
    let cardNumber = event.target.getAttribute("data-card");
    let medalName = event.target.getAttribute("data-name");
    $(`#medal-placeholder-${cardNumber}`).replaceWith(`<span id="medal-placeholder-${cardNumber}" data-name="${medalName}">${medalName}</span>`)
}

export const handleCrownClick = (event) => {
    let win = event.data
    if (win) {
        $('#win-crown').replaceWith(`<span id="win-crown" data-name="Yes">Yes</span>`)
    } else {
        $('#win-crown').replaceWith(`<span id="win-crown" data-name="No">No</span>`)
    }
}

export const renderErrorMessage = function(message) {
    return `<div id="error-message" style="background-color: #e75480; margin-bottom: 30px; padding: 15px">
                <p>${message}</p>
            </div>`
}

export const handleSuccessMessage = function(message) {
    let html = `<div id="error-message" style="background-color: #5dbb63; margin-bottom: 30px; padding: 15px">
                <p>${message}</p>
            </div>`;

    $("#error-message").replaceWith(html);
    $(".column").remove();
    $("#submit-button").remove();
    $("#dropdown-number").remove();
    $("#crown-dropdown").remove();
    let newButtons = `<a class="button" style="background-color: #e75480; margin-right: 30px" href="./index.html">
                        <p style="font-family: Titan One;">Add Another Game</p>
                      </a>`;

    newButtons += `<a class="button" style="background-color: #e75480;">
                        <p style="font-family: Titan One;">View Your Stats</p>
                    </a>`


    $("#game-stats-container").append(newButtons);
}


export const handleSubmitClick = async function(event) {
    const stageList = ['Big Fans', 'Block Party', 'Dizzy Heights', 'Door Dash', 'Egg Scramble', 'Egg Siege', 
        'Fall Ball', 'Fall Mountain', 'Fruit Chute', 'Gate Crash', 'Hex A Gone', 'Hit Parade', 'Hoarders', 
        'Hoopsie Daisy', 'Hoopsie Legends', 'Knight Fever', 'Jinxed', 'Jump Club', 'Jump Showdown', 
        'Perfect Match', 'Rock N Roll', 'Roll Out', 'Royal Fumble', 'See Saw', 'Slime Climb', 'Tail Tag', 
        'Team Tail Tag', 'The Whirlygig', 'Tip Toe'];
    const medalList = ['None', 'Bronze', 'Silver', 'Gold'];
    const finalsList = ['Fall Mountain', 'Hex A Gone', 'Jump Showdown', 'Royal Fumble'];
    let stageSelections = [];
    let medalSelections = [];
    let crownSelection = "";
    let validStages = true;
    let validMedals = true;
    let validCrown = true;
    let userId = event.data

    //validate stages
    for (let i = 1; i < 9; i++) {
        if (document.getElementById(`select-stage-${i}`) == null) {
            break;
        } else if (!stageList.includes($(`#select-stage-${i}`).val())) {
            validStages = false;
            $("#error-message").replaceWith(renderErrorMessage("ERROR: Make sure all stage names are valid!"));
            break;
        } else {
            stageSelections.push($(`#select-stage-${i}`).val());
        }
    }

    //validate medals
    if (validStages) {
        for (let i = 1; i < 8; i++) {
            if (document.getElementById(`dropdown-medal-${i}`) == null) {
                break;
            }
            else if ($(`#medal-placeholder-${i}`).attr("data-name") == "No selection") {
                $("#error-message").replaceWith(renderErrorMessage("ERROR: Make sure you select all medals!"));
                validMedals = false;
                break;
            } 
            else {
                medalList.forEach(medal => {
                    if ($(`#medal-placeholder-${i}`).attr("data-name") == medal) {
                        medalSelections.push(medal);
                    }
                });    
            }    
        }
    }
    
    if (validStages && validMedals) {
        if ($(`#win-crown`).attr("data-name") == "Crown?") {
            validCrown = false;
            $("#error-message").replaceWith(renderErrorMessage("ERROR: Make sure you indicate whether you got a crown or not!"));
        } else {
            crownSelection = $(`#win-crown`).attr("data-name");
            if (crownSelection == "Yes") {
                medalSelections.push("Gold");
            }
        }
    }
    
    if (validStages && validMedals && validCrown) {
        let obj = {};
        obj.numRounds = stageSelections.length;
        obj.stagesPlayed = stageSelections;
        obj.medalsEarned = medalSelections;
        obj.win = crownSelection;

        stageSelections.forEach(async (stage, index) => {
            let saveRound = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/saveRound',
                data: {
                    userId,
                    stage: stage,
                    medal: index != stageSelections.length - 1 ? medalSelections[index] : (crownSelection == 'Yes' ? 'Gold' : 'None'),
                    roundNum: index + 1,
                    qualified: crownSelection == 'Yes' || index != stageSelections.length - 1,
                }
            });
        });

        let numCrowns = 0;
        let numFinals = 0;
        let numGold = 0;
        let numSilver = 0;
        let numBronze = 0;

        medalSelections.forEach(medal => {
            if (medal == "Gold") {
                numGold++;
            } else if (medal == "Silver") {
                numSilver++;
            } else if (medal == "Bronze") {
                numBronze++;
            }
        })


        finalsList.forEach(final => {
            if (stageSelections[stageSelections.length - 1] == final) {
                numFinals = 1;
            }
        })
        if (crownSelection == "Yes") {
            numCrowns = 1;
        }

        let updateUser = await axios({
            method: 'put',
            url: 'http://localhost:5000/api/updateUser',
            data: {
                crowns: numCrowns,
                numFinals: numFinals,
                numRounds: stageSelections.length,
                numGold,
                numSilver,
                numBronze,
                userId
            }
        })
        if (updateUser.status == 201) {
            handleSuccessMessage("Success! Your game has been recorded.");
        } else {
            $("#error-message").replaceWith(renderErrorMessage("ERROR: Your game was not recorded."));
        }
    }
}

export const initialLoad = () => {
    return `
        <div id="game-stats-container">
        <h1 id="input-title" class="title has-text-weight-bold" style="margin-bottom: 30px;">Input Game Stats</h1>
        <div id="error-message"></div>
        <div class="dropdown tooltip" id="dropdown-number" style="margin-right: 15px">
            <span class='tooltiptext'>Select the number of rounds you played</span>
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span id="num-rounds">Rounds Played</span>
                    <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content" style="width: 134px">
                    <button id="dropdown-1" class="dropdown-item button is-white">
                        1
                    </button>
                    <button id="dropdown-2" class="dropdown-item button is-white">
                        2
                    </button>
                    <button id="dropdown-3" class="dropdown-item button is-white">
                        3
                    </button>
                    <button id="dropdown-4" class="dropdown-item button is-white">
                        4
                    </button>
                    <button id="dropdown-5" class="dropdown-item button is-white">
                        5
                    </button>
                    <button id="dropdown-6" class="dropdown-item button is-white">
                        6
                    </button>
                    <button id="dropdown-7" class="dropdown-item button is-white">
                        7
                    </button>
                    <button id="dropdown-8" class="dropdown-item button is-white">
                        8
                    </button>
                </div>
            </div>
        </div>
        <div class="dropdown tooltip" id="crown-dropdown">
            <span class="tooltiptext">Did you win a crown?</span>
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="crown-menu">
                    <span id="win-crown" data-name="Crown?">Crown?</span>
                    <svg style="width:24px;height:24px;margin-left:10px" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </button>
            </div>
            <div class="dropdown-menu" id="crown-menu" role="menu">
                <div class="dropdown-content" style="width: 113px">
                    <button id="crown-yes" class="dropdown-item button is-white">
                        Yes
                    </button>
                    <button id="crown-no" class="dropdown-item button is-white">
                        No
                    </button>
                </div>
            </div>
        </div>
    </div>	
    `
}

export const loadIntoDOM = function () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          const $root = $("#root");
          $root.append(initialLoad())
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
      
          $(document).on('click', "#submit-button", user.uid, handleSubmitClick);
        } else {
          // No user is signed in.
          window.location.replace('../login/index.html')
        }
    });
}

$(function () {
    loadIntoDOM();
})
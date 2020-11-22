export const renderNavbar = function () {
  let html = `
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation" style="background-color: #add8e6;">
      <div class="navbar-brand">
        <a class="navbar-item" href="../index.html">
          <h1 class="title is-1" style="color: #e75480;">FALL GUYS STATS</h1>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="../index.html">
            Home
          </a>

          <a class="navbar-item" href="../community_stats/index.html">
            Community Stats
          </a>

          <a class="navbar-item" href="../input_data/index.html">
            Enter Stats
          </a>

          <a class="navbar-item" href="index.html">
            Career Profile
          </a>

          <a class="navbar-item" href="../extras/index.html">
            Extras
          </a>
        </div>
      </div>
      <div class="navbar-end"></div>
    </nav>
  `
  $("#navbar").append(html)
  let output = firebase.auth().onAuthStateChanged(async function (user) {
    if (user) {
      // User is signed in.
      const db = firebase.firestore();
      var docRef = db.collection("users").doc(`${user.uid}`);
      let username;

      let doc = await docRef.get();

      if (doc.exists) {
        username = doc.data().username;
      }

      let html = `
        <div class="navbar-end">
          <div class="navbar-item">
            <p>${username}</p>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button" id="signOut" style="background-color: #e75480;" href="../login/index.html">
                <p>Sign Out</p>
              </a>
            </div>
          </div>
        </div>`;
      $(".navbar-end").replaceWith(html);
  } else {
      // No user is signed in.
      window.location.replace('../login/index.html')
      }
  });
};

export const renderOverview = (userData, roundsData) => {
  let html = `
    <h1 class="title is-1 has-text-weight-bold">Stats Overview</h1>
    <div class="card" style="display: flex;padding: 25px; height: 150px; text-align:left; overflow:visible;">
    <div style="margin: 0 auto">
    <h2 class="subtitle">Shows</h2>
    <h1 class="title is-1">${userData.gamesPlayed}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Rounds</h2>
    <h1 class="title is-1">${userData.roundsPlayed}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Finals</h2>
    <h1 class="title is-1">${userData.numFinals}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Finals %</h2>
    <h1 class="title is-1">${userData.gamesPlayed > 0 ? Math.round((userData.numFinals/ userData.gamesPlayed)*10000) / 100 : '0'}%</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Crowns</h2>
    <h1 class="title is-1">${userData.crowns}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Win %</h2>
    <h1 class="title is-1">${userData.gamesPlayed > 0 ? Math.round((userData.crowns/ userData.gamesPlayed)*10000) / 100 : '0'}%</h1>
    </div>
    </div>
    <h1 class="title is-1 has-text-weight-bold">Detailed Stats</h1>
    <table class="table is-striped" style="text-align: center">
    <thead>
      <tr>
        <th>Stage</th>
        <th>Played</th>
        <th>Qualified</th>
        <th>Qualified %</th>
        <th>Gold</th>
        <th>Silver</th>
        <th>Bronze</th>
      </tr>
    </thead>
    <tbody>
  `
  let roundKeys = Object.keys(roundsData)
  for (let i = 0; i < roundKeys.length; i++) {
    let stage = roundKeys[i]
    html += `<tr>
    <td>${stage}</td>
    <td>${roundsData[stage].playedCount}</td>
    <td>${roundsData[stage].qualifiedCount}</td>
    <td>${roundsData[stage].playedCount > 0 ? Math.round((roundsData[stage].qualifiedCount/ roundsData[stage].playedCount)*10000) / 100 : '0'}%</td>
    <td>${roundsData[stage].goldCount}</td>
    <td>${roundsData[stage].silverCount}</td>
    <td>${roundsData[stage].bronzeCount}</td>
    </tr>`
  }
  html += `</tbody></table>`

  return html
}

export async function loadIntoDOM() {  
  renderNavbar();
  $(document).on('click', '#signOut', function (event) {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  })
  firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      const $root = $("#root");
      let getUser = await axios({
        method: 'get',
        url: 'http://localhost:5000/api/getUser',
        params: {
          userId: user.uid
        }
      })
      let userData = {}
      let roundsData = {}
      if (getUser.status == 200) {
        userData = getUser.data.userData
        roundsData = getUser.data.roundsData
        $root.append(renderOverview(userData, roundsData))
      }
    } else {
      window.location.replace('../login/index.html')
    }
  })
}

$(function () {
    loadIntoDOM();
});
  
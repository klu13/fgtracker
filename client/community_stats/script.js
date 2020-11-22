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

          <a class="navbar-item" href="index.html">
            Community Stats
          </a>

          <a class="navbar-item" href="../input_data/index.html">
            Enter Stats
          </a>

          <a class="navbar-item" href="../career_profile/index.html">
            Career Profile
          </a>

          <a class="navbar-item" href="../extras/index.html">
            Extras
          </a>
        </div>
      </div>
      <div class="navbar-end"></div>
    </nav>
  `;
  $("#navbar").append(html);
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
      let html = `
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button" style="background-color: #e75480;" href="../login/index.html">
                <p>Login/Sign up</p>
              </a>
            </div>
          </div>
        </div>`;
      $(".navbar-end").replaceWith(html);
    }
  });
};

export const renderOverview = (communityData, roundsData) => {
  let html = `
    <h1 class="title is-1">Community Stats Overview</h1>
    <div class="card" style="display: flex;padding: 25px; height: 150px; text-align:left; overflow:visible;">
    <div style="margin: 0 auto">
    <h2 class="subtitle">Shows</h2>
    <h1 class="title is-1">${communityData.gamesPlayed}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Rounds</h2>
    <h1 class="title is-1">${communityData.roundsPlayed}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Finals</h2>
    <h1 class="title is-1">${communityData.numFinals}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Finals %</h2>
    <h1 class="title is-1">${
      communityData.gamesPlayed > 0
        ? Math.round(
            (communityData.numFinals / communityData.gamesPlayed) * 10000
          ) / 100
        : "0"
    }%</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Crowns</h2>
    <h1 class="title is-1">${communityData.crowns}</h1>
    </div>
    <div style="margin-left: 80px; margin: auto">
    <h2 class="subtitle">Win %</h2>
    <h1 class="title is-1">${
      communityData.gamesPlayed > 0
        ? Math.round(
            (communityData.crowns / communityData.gamesPlayed) * 10000
          ) / 100
        : "0"
    }%</h1>
    </div>
    </div>
    <h1 class="title is-1">Detailed Stats</h1>
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
  `;
  let roundKeys = Object.keys(roundsData);
  for (let i = 0; i < roundKeys.length; i++) {
    let stage = roundKeys[i];
    html += `<tr>
    <td>${stage}</td>
    <td>${roundsData[stage].playedCount}</td>
    <td>${roundsData[stage].qualifiedCount}</td>
    <td>${
      roundsData[stage].playedCount > 0
        ? Math.round(
            (roundsData[stage].qualifiedCount / roundsData[stage].playedCount) *
              10000
          ) / 100
        : "0"
    }%</td>
    <td>${roundsData[stage].goldCount}</td>
    <td>${roundsData[stage].silverCount}</td>
    <td>${roundsData[stage].bronzeCount}</td>
    </tr>`;
  }
  html += `</tbody></table`;

  return html;
};

export async function loadIntoDOM() {
  renderNavbar();
  $(document).on("click", "#signOut", function (event) {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  });
  const $root = $("#root");
  let getUser = await axios({
    method: "get",
    url: "http://localhost:5000/api/communityStats",
  });
  let communityData = {};
  let roundsData = {};
  if (getUser.status == 200) {
    communityData = getUser.data.communityData;
    roundsData = getUser.data.roundsData;
    $root.append(renderOverview(communityData, roundsData));
  }
}

$(function () {
  loadIntoDOM();
});

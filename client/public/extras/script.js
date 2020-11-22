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

          <a class="navbar-item" href="../career_profile/index.html">
            Career Profile
          </a>

          <a class="navbar-item" href="index.html">
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

export const renderOverview = (data) => {
  let todayDate = new Date().toISOString().slice(0,10);
  let html = `
    <h1 class="title is-1 has-text-weight-bold">Today's Shop</h1>
    <img src="https://fallguysapi.tk/api/shop/image?date=${todayDate}" style="border-radius: 7px" alt="Achievement"></img>
    <h1 class="title is-1 has-text-weight-bold">All Achievements</h1>
    <table class="table is-striped" style="text-align: center">
    <thead>
      <tr>
        <th>Icon</th>
        <th>Achievement</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    `
  for (let i = 0; i < data.length; i++) {
    let name = data[i].displayName
    let icon = data[i].icon
    let desc = data[i].description
    html += `<tr>
    <td><img src="${icon}" alt="Achievement" height=50 width=50></img></td>
    <td>${name}</td>
    <td>${desc}</td>
    </tr>`
  }
  html += `</tbody></table>`
  return html
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
  let response = await axios({
    method: 'get',
    url: `https://boiling-spire-11914.herokuapp.com/achievements`,
  })
  $root.append(renderOverview(response.data.body))
}

$(function () {
  loadIntoDOM();
});

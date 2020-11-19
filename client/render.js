export const renderNavbar = function () {
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
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation" style="background-color: #add8e6;">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <h1 class="title is-1" style="color: #e75480;">FALL GUYS STATS</h1>
          </a>
        </div>
    
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="index.html">
              Home
            </a>
    
            <a class="navbar-item" href="input_data/index.html">
              Enter Stats
            </a>

            <a class="navbar-item">
              Career Profile
            </a>
          </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <p>${username}</p>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button" style="background-color: #e75480;" href="login/index.html">
                <p>Sign Out</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>`;
      $("#navbar").append(html);
    } else {
      // No user is signed in.
      let html = `
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation" style="background-color: #add8e6;">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <h1 class="title is-1" style="color: #e75480;">FALL GUYS STATS</h1>
          </a>
        </div>
    
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="index.html">
              Home
            </a>
    
            <a class="navbar-item" href="input_data/index.html">
              Enter Stats
            </a>

            <a class="navbar-item">
              Career Profile
            </a>
          </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button" style="background-color: #e75480;" href="login/index.html">
                <p>Login/Sign up</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>`;
      $("#navbar").append(html);
    }
  });
};

export const renderBody = async function () {
  let html = `
    <section class="section">
      <div class="container">
        <div class="columns" style="height: 83vh">
          <div class="column">
            ${await renderLeaderboard()}
          </div>
          <div class="column is-one-quarter">
            ${renderTwitterFeed()}
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">About Fall Guys Stats<p>
            ${renderAbout()}
          </div>
        </div>
      </div>
    </section>
  `;
  return html;
};

export const renderLeaderboard = async function () {
  let html = `
  <h1 class="title has-text-weight-bold">Leaderboard</h1>
  <table class="table" style="width: 800px;text-align: center; margin-bottom: 50px">
    <thead>
      <tr>
        <th>Username</th>
        <th>Crowns</th>
        <th>Win Percentage</th>
      </tr>
    </thead>
    <tbody>`

  let crownRequest = await axios({
    method: 'get',
    url: 'http://localhost:5000/api/leaderboard'
  })
  let crownArray = []
  if (crownRequest.status == 200) {
    crownArray = crownRequest.data.crownArray
  }
  for (let i = 0; i < crownArray.length; i++) {
    html += `
      <tr>
        <td>${crownArray[i].username}</td>
        <td>${crownArray[i].crowns}</td>
        <td>${crownArray[i].gamesPlayed > 0 ? Math.round(crownArray[i].crowns * 100 / crownArray[i].gamesPlayed) : '0'}%</td>
      </tr>`
  }
  html += `</tbody>
  </table>
  <table class="table" style="width: 800px;text-align: center">
    <thead>
      <tr>
        <th>Username</th>
        <th>Gold Medals</th>
        <th>Qualified Percentage</th>
      </tr>
    </thead>
    <tbody>`
    // <tr>
    //     <td>kevin</td>
    //     <td>150</td>
    //     <td>90%</td>
    //   </tr>
    //   <tr>
    //     <td>Wooziful</td>
    //     <td>140</td>
    //     <td>80%</td>
    //   </tr>
  html += `</tbody></table>`;
  return html;
};

export const renderAbout = function () {
  let html = `<p>Fall Guys Stats is a website dedicated to helping passionate Fall Guys players take their game to the next level. 
  You can track your progress on individual minigames, see how others compare, and keep tabs on your overall career stats.<p>
  <br>
  <strong>Using Fall Guys Stats</strong>
  <br>
  <p>To use Fall Guys Stats, first create an account. After that, you're ready to start logging your stats! 
  Click on "Enter Stats" and fill out the form.
  As you build up stats, you can track your progress from the "Career Profile" page. </p>
  <br>
  <p>
  That's it! We hope you enjoy our site! GLHF
  </p>`;
  return html;
};

export const renderTwitterFeed = function () {
  let html = `<a class="twitter-timeline" data-height="83vh" href="https://twitter.com/FallGuysGame?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  return html;
};

export async function loadIntoDOM() {
  const $root = $("#root");
  // let test = await axios({
  //   method: "get",
  //   url: "http://localhost:5000/api/apiTest",
  // });
  // $root.append(`<p>${test.data.body}</p>`);

  $root.append(await renderBody());
}

$(function () {
  loadIntoDOM();
});

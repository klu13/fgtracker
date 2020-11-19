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

          <a class="navbar-item" href="../input_data/index.html">
            Enter Stats
          </a>

          <a class="navbar-item" href="index.html">
            Career Profile
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

export async function loadIntoDOM() {
  const $root = $("#root");

  renderNavbar();
  $(document).on('click', '#signOut', function (event) {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  })
}

$(function () {
    loadIntoDOM();
});
  
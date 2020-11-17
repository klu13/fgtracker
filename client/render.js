export const renderBody = function () {
  let html = `
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            Leaderboard
            ${renderLeaderboard()}
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

export const renderLeaderboard = function () {
  let html = ``;
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
  let html = `<a class="twitter-timeline" href="https://twitter.com/FallGuysOwl?ref_src=twsrc%5Etfw">Tweets by FallGuysOwl</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  return html;
};

export async function loadIntoDOM() {
  const $root = $("#root");
  // let test = await axios({
  //   method: "get",
  //   url: "http://localhost:5000/api/apiTest",
  // });
  // $root.append(`<p>${test.data.body}</p>`);

  $root.append(renderBody());
}

$(function () {
  loadIntoDOM();
});

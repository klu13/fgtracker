export const renderHeader = function () {};

export const renderNavBar = function () {};

export const renderBody = function () {
  //call renderLeaderboard
  //call renderAbout
  //call renderTwitterFeed
};

export const renderLeaderboard = function () {};

export const renderAbout = function () {};

export const renderTwitterFeed = function () {};

export async function loadIntoDOM() {
  const $root = $("#root");
  let test = await axios({
    method: "get",
    url: "http://localhost:5000/api/apiTest",
  });
  $root.append(`<p>${test.data.body}</p>`);
}

$(function () {
  loadIntoDOM();
});

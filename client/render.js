export async function loadIntoDOM() {
    const $root = $('#root');
    let test = await axios({
        method: 'get',
        url: 'http://localhost:5000/api/apiTest'
    })
    $root.append(`<p>${test.data.body}</p>`) 
};

$(function () {
    loadIntoDOM();
});
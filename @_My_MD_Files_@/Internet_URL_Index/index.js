// document.getElementById("heading").innerHTML = "Hello JavaScript!";
// document.getElementById("root").innerHTML = `
//     <div>hello world</div>
// `;

function back() {
    window.location.href = `index.html`;
};

function inputPwd(e) {
    var pwd = `wkrkdfur`;
    if(e == pwd) {
        console.log('here')
        window.location.href = `___.html`;
    } 
    else {
        window.location.href = `404.html`;;
    }
};

function fakeBtn() {
    alert('You are Bad Guy, Enemy! Admit it? So Get out of my sight~');
}



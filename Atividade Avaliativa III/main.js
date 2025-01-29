const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const chatHeader = document.getElementById('chat-header');

if (name) {
    chatHeader.textContent = `Chat com ${name}`;
}

let me = "BELA"; 

const btnSend = document.getElementById("btn-send");
const inputMessage = document.getElementById("inpt-msg");

btnSend.addEventListener("click", function () {
    sendMessage(inputMessage.value);
    inputMessage.value = ""; 
});

function sendMessage(message) {
    const arr = { user: me, msg: message };
    ws.send(JSON.stringify(arr));
}

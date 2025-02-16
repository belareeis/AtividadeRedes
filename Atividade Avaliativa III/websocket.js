var wsUrl = 'ws://127.0.0.1:50000';
var ws = new WebSocket(wsUrl);
var connected = false;

ws.onopen = function () {
    console.log("Conectado!");
    let arr = { user: "", msg: "Oi, estou disponível!" };
    ws.send(JSON.stringify(arr));
};

ws.onmessage = function (event) {
    try {
        var temp = JSON.parse(event.data);

        if (temp.msg === "Oi, estou disponível!") {
            connected = true;
        }

        if (connected) {
            displayMessage(temp.user, temp.msg);
        }
    } catch (e) {
        console.log("Ocorreu um erro ao processar a mensagem recebida!");
    }
};

ws.onclose = function () {
    console.log("Conexão fechada!");
};

function displayMessage(user, message) {
    const chatBox = document.querySelector(".chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    if (user === me) {
        messageDiv.classList.add("user");
    }
    messageDiv.textContent = `${user}: ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    
}

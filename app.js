function orderNow(gameName) {
    document.getElementById('orderForm').style.display = 'block';
    document.getElementById('game').value = gameName;
    window.scrollTo(0, document.body.scrollHeight);
}

function showQR() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name && email) {
        document.getElementById('payment').style.display = 'block';
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        alert('Please fill all fields!');
    }
}

function toggleChat() {
    let chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === 'none') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
}

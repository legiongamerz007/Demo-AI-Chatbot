function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMsg = input.value.trim();
  if (!userMsg) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  chatBox.innerHTML += `<div><strong>Bot:</strong> <span class="typing">Typing...</span></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const reply = getMockResponse(userMsg); // from mock-response.js
    const lastBot = chatBox.querySelector(".typing");
    if (lastBot) lastBot.parentElement.innerHTML = `<strong>Bot:</strong> ${reply}`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

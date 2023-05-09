// const { response } = require("express");

const form = document.getElementById('transfer-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const recipientAddress = form.elements['recipient-address'].value;
  const senderAddress = form.elements['sender-address'].value;
  const transferAmount = form.elements['transfer-amount'].value;

  const data = {senderAddress, recipientAddress, transferAmount};

  fetch('http://localhost:3000/transact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    message.textContent = `Transfer successful!`;// Transaction ID: ${data.transactionId}`;
    // message.textContent = `Transfer successful! Transaction ID: ${data}`;
    // message.textContent = `Transfer successful! Transaction ID: ${response}`;
    form.reset();
    console.log(data)
  })
  .catch(error => {
    message.textContent = 'Transfer failed. Please try again later.';
    console.error(error);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const placeholderDiv = document.getElementById('placeholderDiv'); // Replace 'placeholderDiv' with the actual ID of the placeholder div

    function handleButtonClick(answer) {
        // Remove existing message containers
        const existingMessages = document.querySelectorAll('.message-container');
        existingMessages.forEach(messageContainer => {
            messageContainer.remove();
        });

        // Create a new message container
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        const message = document.createElement('p');

        // Set different messages based on the user's choice
        if (answer === 'yes') {
            message.textContent = 'Good job, keep it up!';
        } else if (answer === 'no') {
            message.textContent = 'Go drink water, you gremlin!';
        }

        // Append the message to the container
        messageContainer.appendChild(message);

        // Insert the message container after the placeholder div
        placeholderDiv.insertAdjacentElement('afterend', messageContainer);

        // Add event listener to hide the message container on a click outside
        const hideMessageContainer = function (event) {
            if (!messageContainer.contains(event.target) && event.target !== yesBtn && event.target !== noBtn) {
                messageContainer.remove();
                document.removeEventListener('click', hideMessageContainer); // Remove the event listener once used
            }
        };

        document.addEventListener('click', hideMessageContainer);
    }

    // Attach click event listeners to the buttons
    yesBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        handleButtonClick('yes');
    });

    noBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        handleButtonClick('no');
    });
});

const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keydown', (i) => {
    if (i.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        output.innerHTML += `\n> ${command}`;
        handleCommand(command);
    }
});

function handleCommand(command) {
    switch (command.toLowerCase()) {
        case 'help':
            output.innerHTML += '\n> Available commands: help, contact, admin, leave';
            break;
        case 'contact':
            window.location.href = 'contact.html';
            break;
        case 'admin':
            output.innerHTML += '\n> ACCESS DENIED.';
            break;
        case 'leave':
            window.location.href = 'goodbye.html';
            break;
        default:
            output.innerHTML += `\n> Unknown command: ${command}`;
    }
}
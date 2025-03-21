const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        output.innerHTML += `\n> ${command}\n`;
        handleCommand(command);
        console.log("sex gays")
    }
});

console.log("sex")

function handleCommand(command) {
    switch (command.toLowerCase()) {
        case 'help':
            output.innerHTML += 'Available commands: help, contact, admin, leave\n';
            break;
        case 'contact':
            window.location.href = 'contact.html';
            break;
        case 'admin':
            output.innerHTML += 'ACCESS DENIED.\n';
            break;
        case 'leave':
            window.location.href = 'goodbye.html';
            break;
        default:
            output.innerHTML += `Unknown command: ${command}\n`;
    }
}

document.getElementById('leave').addEventListener('click', () => {
    window.location.href = 'goodbye.html';
});

document.getElementById('contact').addEventListener('click', () => {
    window.location.href = 'contact.html';
});

document.getElementById('admin').addEventListener('click', () => {
    output.innerHTML += 'ACCESS DENIED.\n';
});
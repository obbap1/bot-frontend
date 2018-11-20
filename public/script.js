
window.onload = getReminders

function getReminders() {
    const displayTemplate = Handlebars.compile(document.getElementById('display-template').innerHTML);
    
    const totalHeader = document.getElementById('total');

    fetch(`https://firestore.googleapis.com/v1beta1/projects/telegram-bot-b6cf6/databases/(default)/documents/reminder`)
        .then(response =>{
            return response.json()
        })
        .then(myJson =>{
            const reminders = myJson.documents;
            totalHeader.innerHTML = `Total Reminders: ${reminders.length}`;
            const html = displayTemplate({
                'reminders' : reminders
            });

            document.getElementById('container').innerHTML = html;
        })
}
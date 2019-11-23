// Init HarryPotter
const harrypotter = new HarryPotter;
// Init UI
const ui = new UI;

// search input
const searchChar = document.getElementById('searchUser');

searchChar.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    console.log(userText);

    // I think the userText needs to be formatted further as all of the values are being displayed as
    // undefined, but it does seem to find "Harry Potter" for example and return that data. 
    if(userText !== '') {
        harrypotter.getChar(userText)
        .then(data => {
            if(data.charInfo._id === '') {
                // show alert
                // ui.showAlert('User not found');
                console.log('error');
            } else {
                // show character
                console.log(data.charInfo)
                ui.showCharacter(data.charInfo);
            }
        }) 

        
    }
})

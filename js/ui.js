class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    // Display char in UI
    showCharacter(char) {
        
        console.log(char);
        this.profile.innerHTML =  `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
             
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Name: 
                ${char.name}</span>
                <span class="badge badge-secondary">In Dumbledore's Army: 
                ${char.dumbledoresArmy}</span>
                <span class="badge badge-success">House: 
                ${char.house}</span>
                <span class="badge badge-info">patronus: 
                ${char.patronus}</span>
                <br>
                <br>
                <ul class="list-group">
                    <li class="list-group-item">Role: ${char.role}</li>
                    <li class="list-group-item">School: ${char.school}</li>
                    <li class="list-group-item">Species: ${char.species}</li>
                    <li class="list-group-item">Wand: ${char.wand}</li>
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Lates Repos</h3>
        <div id="repos"></div>
      `;

    }
}

//    // <img class="img-fluid mb-2" src="${char.avatar_url}">
//    <a href="${char.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
//    View Profile</a>
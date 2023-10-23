"use strict";

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Name            Role                    Picture
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg' 
    },
    {
        name: 'Angela',
        surname: 'Carroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg' 
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg' 
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg' 
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg' 
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg' 
    }

];
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log (team);

// Stampare le stesse informazioni su DOM sottoforma di stringhe
// Trasformare la stringa foto in una immagine effettiva 

const teamBox = document.getElementById('team-box');

for (let i = 0; i < team.length; i++) {
    teamMember(i);
}

function teamMember(i) {
    const teamMember = document.createElement('div');
    teamMember.classList.add('col-4');
    teamMember.classList.add('mb-4');
    
    /* 
    Nome : ${team[i].name} <br>
    Surname: ${team[i].surname} <br>
    Role: ${team[i].role} <br>
    Picture:<br> <img src='img/${team[i].picture}' alt="team photo">
    */
    let templateCard =`
    <div class="card">
        <img src='img/${team[i].picture}' alt="team photo">
        <div class="card-body">
            <h3 class="card-title">${team[i].name} ${team[i].surname}</h3>
            <div class="card-text">
                ${team[i].role}
            </div>
        </div>
    </div> 
    `
    teamMember.innerHTML = templateCard;
    teamBox.append(teamMember);
}


const leftcard = document.getElementById('left-div');
const rightcard = document.getElementById('right-div');
const arr = [
    { id: 4, name: 'Charmander', type: '🔥', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: '🌊', base_experience: 63 },
    { id: 11, name: 'Metapod', type: '🐞', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: '🚀', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: '🎇', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: '🎆', base_experience: 95 },
    { id: 94, name: 'Gengar', type: '🍻', base_experience: 225 },
    { id: 133, name: 'Eevee', type: '🛵', base_experience: 65 }
  ];

  arr.map((data, i)=>{
    const cardDiv = document.createElement('div');
    leftcard.appendChild(cardDiv);
    cardDiv.classList.add('card-div')

    const name = document.createElement('p');
    cardDiv.append(name)
    name.textContent = data.name;
    name.classList.add('name-tag')

    const type = document.createElement('p');
    cardDiv.append(type)
    type.textContent = data.type;
    type.classList.add('type-tag')

    const base_experience = document.createElement('p');
    cardDiv.append(base_experience)
    base_experience.textContent = data.base_experience;
    base_experience.classList.add('base-tag')


    cardDiv.addEventListener('click', (e)=>{
        if(e.currentTarget.parentElement === rightcard){
            alert("called");
            leftcard.appendChild(cardDiv);
        }else{
            rightcard.appendChild(cardDiv);
        }
     });

  });

  
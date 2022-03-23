const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });







//POST SYNTAX

// function adoptAnimal(animalObj) {
//     fetch('htttp://localhost:3000/animalData')
//     .then(res => res.json())
//     .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
// }

// fetch('http://localhost:3000/animalData',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(animalObj)
// })
// .then(res => res.json())
// .then(animal => console.log(animal))




// //PATCH SYNTAX
// fetch(`http://localhost:3000/animalData/${animalObj.id}`,{
//     method: 'PATCH',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(animalObj)
// })
// .then(res => res.json())
// .then(animal => console.log(animal))

// //DELETE SYNTAX

// card.querySelector('#set_free').addEventListener('click', () => {
//     card.remove()
//     deleteAnimal(animal.id)
// })

// function deleteAnimal(id){
//     fetch(`http://localhost:3000/animalData/${id}`,{
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(animal => console.log(animal))
// }
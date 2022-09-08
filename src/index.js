 let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


fetch('http://localhost:3000/toys')
.then(res => res.json())
.then(function(data){
  for(toy of data){
  // construct of div/h2 for naming toy's
  const div = document.createElement('div')
  div.className = "card"
  const h2 = document.createElement('h2')
  h2.textContent = toy.name
  console.log(h2)
  // construct of <img> for toy's pictures
  const Img = document.createElement('img.toy-avatar')
  console.log(Img)

  }
})
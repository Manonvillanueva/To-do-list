const form = document.getElementById("form");

// => STORAGE PART <=
const storeList = () => {
  window.localStorage.todoList = list.innerHTML;
};

const getTodos = () => {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquer sur un todo pour le supprimer</li>`;
  }
};

getTodos();

// => ADD LI IN LIST <=
form.addEventListener("submit", (e) => {
  // => Utiliser e.preventDefault pour se prémunir de son comportement par défault qui est de recharger la page lors de la validation
  e.preventDefault();
  // => Pour éviter que mon "li" prenne seulement la dernère valeur il faut lui mettre += au lieu de = , comme ça chaque valeur de mon input txt s'incrémente
  list.innerHTML += `<li>${noteArea.value}</li>`;
  // => Valeur de mon input txt
  noteArea.value = "";
  storeList();
});

// => REMOVE LI IN LIST <=
list.addEventListener("click", (e) => {
  // => Pour sélectionner le "li" dans list , il faut utiliser e.target
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});

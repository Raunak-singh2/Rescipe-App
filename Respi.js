
const apiKey="ba1ff18842cf45429c788742fd3497e9";
const recipesList=document.getElementById('recipe-list');


function displayRecipes(recipes){
  recipesList.innerHTML="";

  recipes.forEach((items) => {
  const recipesItemsEl=document.createElement("li");
  recipesItemsEl.classList.add("recipe-items");


  const recipesImage=document.createElement("img");
  recipesImage.src=items.image;
  recipesImage.alt="recipe Image";
  
  recipesTitle=document.createElement("h2");
  recipesTitle.innerText=items.title;

  ingredientEl=document.createElement("p");
  ingredientEl.innerHTML=`
  <strong>Ingredient: </strong>${items.extendedIngredients.map((ingredant)=>ingredant.original).join(", ")}
  
  `
recipesLinks=document.createElement("a")
recipesLinks.href=items.sourceUrl;
recipesLinks.innerText="View Recipes";


  recipesList.appendChild(recipesLinks);
  recipesList.appendChild(recipesTitle);
  recipesList.appendChild(recipesImage);
  recipesList.appendChild(recipesItemsEl)
    });
}

async function getRecipes(){
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${apiKey}`);
    const data=await response.json();
  
   return data.recipes;
}



async function init(){
  const recipes=await getRecipes();  
  // console.log(recipes);
   displayRecipes(recipes);
}

init();
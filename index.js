const API_KEY="c0b92a591b7442b3b6ad6bc94bc22d43";
const recipeList=document.getElementById("recipe-list");

async function getRecipe() {
    const response= await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey='+API_KEY)
    const data=await response.json();
    return data.recipes;
}

function displayRecipe(recipe){
    recipeList.innerHTML="";
    recipe.forEach(recipe => {
     var li = document.createElement("li");
     var pRe = document.createElement("p");
     var pRep = document.createElement("div"); 
     var h2Re = document.createElement("h2");
     var aRe = document.createElement("a");
     var strongRe = document.createElement("strong");
     var imgRecipe=document.createElement("img");
     li.classList.add("recipe-item");
     aRe.href=recipe.sourceUrl;
     aRe.innerHTML="view more";

    
     imgRecipe.src=recipe.image;
     strongRe.innerHTML="Ingredients:";     
     pRe.appendChild(strongRe);
     pRep.innerText=recipe.extendedIngredients.map((ingredient)=>
        ingredient.name
     ).join(", ");
     pRe.append(pRep);
     h2Re.innerText=recipe.title;
     
     
     li.appendChild(imgRecipe);
     li.appendChild(h2Re);
     li.appendChild(pRe);
     li.appendChild(aRe);
     recipeList.appendChild(li);
    });

}

async function init(){
    const recipe = await getRecipe();
    displayRecipe(recipe);
    
}
init();
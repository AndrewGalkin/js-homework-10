import menuIngredientsList from './templates/menu_ingredients.hbs'
import ingredients from './menu.json'



const menuList = document.querySelector(".js-menu")
const ingredientsList = createIngredientsList(ingredients);
menuList.insertAdjacentHTML("beforeend", ingredientsList);

function createIngredientsList(ingredients) {
    return menuIngredientsList(ingredients)
}
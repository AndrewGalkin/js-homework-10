import menuIngredientsList from './templates/menu_ingredients.hbs'
import ingredients from './menu.json'


const menuList = document.querySelector(".js-menu")
const ingredientsList = createIngredientsList(ingredients);
menuList.insertAdjacentHTML("beforeend", ingredientsList);

function createIngredientsList(ingredients) {
    return ingredients.map(menuIngredientsList).join("")
}

const refs = {
    toggleBtn: document.getElementById("theme-switch-toggle"),
    bodyColor: document.querySelector("body")
}
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const changeThemeSwitch = (event) => {
    if (event.target.checked) {
        refs.bodyColor.classList.remove(Theme.LIGHT)
        refs.bodyColor.classList.add(Theme.DARK)

    } else {
        refs.bodyColor.classList.remove(Theme.DARK)
        refs.bodyColor.classList.add(Theme.LIGHT)
    }
}
refs.toggleBtn.addEventListener("change", changeThemeSwitch);














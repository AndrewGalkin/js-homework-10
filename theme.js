const store = localStorage.getItem('theme')

if (!store) {
    localStorage.setItem("theme", "light-theme")

}
const refs = {
    toggleBtn: document.getElementById("theme-switch-toggle"),
    bodyColor: document.querySelector("body")
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.bodyColor.classList.add(store)

if (store === Theme.DARK) {
    refs.toggleBtn.checked = true
}

const changeThemeSwitch = (event) => {
    if (event.target.checked) {
        refs.bodyColor.classList.remove(Theme.LIGHT)
        refs.bodyColor.classList.add(Theme.DARK)
        localStorage.setItem("theme", "dark-theme")

    } else {
        refs.bodyColor.classList.remove(Theme.DARK)
        refs.bodyColor.classList.add(Theme.LIGHT)
        localStorage.setItem("theme", "light-theme")
    }
}
refs.toggleBtn.addEventListener("change", changeThemeSwitch);
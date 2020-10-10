import refs from "./refs.js";
import fetch from "./fetch.js";
import item from "../template/item.hbs";
import moment from "moment"



refs.form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch.city = event.currentTarget.city.value
  refs.input.value = "";
  refs.daysList.innerHTML = "";

  console.log(event.currentTarget.city.value);
  fetch.fetchWeather().then(data => render({ data }));
})
function render(data) {
    const templateItem = item(data);
    refs.daysList.insertAdjacentHTML('beforeend', templateItem)
    console.log(templateItem);
}
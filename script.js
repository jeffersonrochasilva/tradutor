const textareaFrom = document.querySelector("#textareaFrom");
const textareaTo = document.querySelector("#textareaTo");
const btnTranslate = document.querySelector("#btnTranslate");
const selects = document.querySelector("#select");

const countries = {
  "en-GB": "Inglês",
  "es-ES": "Espanhol",
  "it-IT": "Italiano",
  "ja-JP": "Japonês",
  "pt-br": "Português",
};

selects.forEach((tag) => {
  let selected;

  if (tag.className.includes("selectFrom") && country == "pt-br") {
    selected = "selected";
  } else if (tag.className.includes("selectTo") && country == "en-GB") {
    selected = "selected";
  }

  const option = `<option value="${country}" ${selected}>${countries[country]}</option>`;
  tag.insertAdjacentHTML("beforeend", option);
});

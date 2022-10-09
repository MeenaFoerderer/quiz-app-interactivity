const form = document.querySelector('[data-js="form"]');
const main = document.querySelector("main");

/* ---------- eventlistener to submit form data ----------- */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const question = data.form__question;
  const answer = data.form__answer;
  const tags = data.form__tag;

  addNewCard(question, answer, tags);
});

/* ----------- function to create new card ---------- */
function addNewCard(question, answer, tags) {
  //create card elements
  const cardList = document.createElement("ul");
  const cardListItem = document.createElement("li");
  const card = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardButtonAnswer = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTagListItem = document.createElement("li");
  const cardButtonBookmark = document.createElement("div");
  const cardBookmark = document.createElement("button");

  //add classes to elements
  cardList.classList.add("card-list");
  cardListItem.classList.add("card-list__item");
  card.classList.add("card");
  cardQuestion.classList.add("card__question");
  cardButtonAnswer.classList.add("card__button-answer");
  cardAnswer.classList.add("card__answer");
  cardTagList.classList.add("card__tag-list");
  cardTagListItem.classList.add("card__tag-list-item");
  cardButtonBookmark.classList.add("card__button-bookmark");
  cardBookmark.classList.add("bookmark");

  //add attributes to elements
  cardButtonAnswer.setAttribute("data-js", "card__button-answer");
  cardAnswer.setAttribute("data-js", "card__answer");
  cardBookmark.setAttribute("data-js", "card__bookmark");

  //add textcontent to elements
  cardQuestion.textContent = question;
  cardAnswer.textContent = answer;
  cardTagListItem.textContent = tags;
  cardButtonAnswer.textContent = "Show answer";
  cardBookmark.innerHTML = `<svg
      class="bookmark__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 24 24"
      >
        <path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
    </svg>`;

  //nest/append elements
  cardList.append(cardListItem);
  cardListItem.append(card);
  card.append(
    cardQuestion,
    cardButtonAnswer,
    cardAnswer,
    cardTagList,
    cardButtonBookmark
  );
  cardTagList.append(cardTagListItem);
  cardButtonBookmark.append(cardBookmark);

  //append elements below the form
  main.append(cardList);
}

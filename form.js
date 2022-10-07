const form = document.querySelector('[data-js="form"]');

//submit form data

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target);

  //const a = event.target.elements.form__question.value;
  //console.log(a);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const question = data.form__question;
  const answer = data.form__answer;
  const tags = data.form__tag;
});

function addNewCard(question, answer, tags) {
  const cardListItem = document.createElement("li");
  const card = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardButtonAnswer = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTagListItem = document.createElement("li");
  const cardButtonBookmark = document.createElement("");
}

/*
<li class="card-list__item">
          <article class="card">
            <h2 class="card__question">
              In the Kingdom Heart series who provides the english voice for
              Master Eraqus?
            </h2>
            <button
              class="card__button-answer"
              type="button"
              data-js="card__button-answer"
            >
              Show answer
            </button>
            <p class="card__answer" data-js="card__answer">Mark Hamill</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">#kingdomheart</li>
              <li class="card__tag-list-item">#mastereraqus</li>
              <li class="card__tag-list-item">#english voices</li>
            </ul>
            <div class="card__button-bookmark">
              <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="card__bookmark"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </article>
        </li>

*/

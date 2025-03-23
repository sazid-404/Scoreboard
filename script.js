// Redux Actions
const ADD_MATCH = "ADD_MATCH";
const DELETE_MATCH = "DELETE_MATCH";
const INCREMENT_SCORE = "INCREMENT_SCORE";
const DECREMENT_SCORE = "DECREMENT_SCORE";
const RESET_SCORES = "RESET_SCORES";

// Action Creators
const addMatch = () => ({ type: ADD_MATCH });
const deleteMatch = (id) => ({ type: DELETE_MATCH, payload: id });
const incrementScore = (id, value) => ({
  type: INCREMENT_SCORE,
  payload: { id, value },
});
const decrementScore = (id, value) => ({
  type: DECREMENT_SCORE,
  payload: { id, value },
});
const resetScores = () => ({ type: RESET_SCORES });

// Initial State (Each match starts with 120)
const initialState = { matches: [{ id: 1, score: 120 }] };

// Reducer Function
const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH:
      return {
        ...state,
        matches: [
          ...state.matches,
          { id: state.matches.length + 1, score: 120 },
        ],
      };
    case DELETE_MATCH:
      return {
        ...state,
        matches: state.matches.filter((match) => match.id !== action.payload),
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id
            ? { ...match, score: match.score + action.payload.value }
            : match
        ),
      };
    case DECREMENT_SCORE:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id
            ? {
                ...match,
                score: Math.max(0, match.score - action.payload.value),
              } // Prevents negative values
            : match
        ),
      };
    case RESET_SCORES:
      return {
        ...state,
        matches: state.matches.map((match) => ({ ...match, score: 0 })),
      };
    default:
      return state;
  }
};

// Create Redux Store
const store = Redux.createStore(matchReducer);

// UI Rendering Function
const render = () => {
  const state = store.getState();
  const matchesContainer = document.querySelector(".all-matches");
  matchesContainer.innerHTML = "";

  state.matches.forEach((match) => {
    const matchDiv = document.createElement("div");
    matchDiv.classList.add("match");
    matchDiv.innerHTML = `
      <div class="wrapper">
        <button class="delete" data-id="${match.id}">
          <img src="./image/delete.svg" alt="delete" />
        </button>
        <h3 class="matchName">Match ${match.id}</h3>
      </div>
      <div class="inc-dec">
        <input type="number" class="increment" data-id="${match.id}" placeholder="Increment" />
        <input type="number" class="decrement" data-id="${match.id}" placeholder="Decrement" />
      </div>
      <div class="numbers">
        <h2 class="singleResult">${match.score}</h2>
      </div>
    `;

    matchesContainer.appendChild(matchDiv);
  });
};

// Event Listeners
const setupEventListeners = () => {
  document
    .querySelector(".addMatch")
    .addEventListener("click", () => store.dispatch(addMatch()));

  document
    .querySelector(".reset")
    .addEventListener("click", () => store.dispatch(resetScores()));

  document.querySelector(".all-matches").addEventListener("click", (e) => {
    if (e.target.closest(".delete")) {
      const id = parseInt(e.target.closest(".delete").dataset.id);
      store.dispatch(deleteMatch(id));
    }
  });

  document.querySelector(".all-matches").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const id = parseInt(e.target.dataset.id);
      const value = parseInt(e.target.value) || 0;
      if (e.target.classList.contains("increment")) {
        store.dispatch(incrementScore(id, value));
      } else if (e.target.classList.contains("decrement")) {
        store.dispatch(decrementScore(id, value));
      }
      e.target.value = "";
    }
  });
};

// Subscribe Render to Redux Store
store.subscribe(render);

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  render();
  setupEventListeners();
});

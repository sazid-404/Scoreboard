# Scoreboard App (Vanilla JavaScript + Redux)

A dynamic scoreboard application where you can:

- Add multiple matches
- Increment or decrement individual match scores
- Delete matches
- Reset all scores to 0

Built using **Vanilla JavaScript** with **Redux** for state management.

---

## 📁 Project Structure

```
/scoreboard-app
├── index.html
├── style.css
├── script.js           <-- contains Redux store, actions, and reducers
├── image/
│   ├── favicon.png
│   ├── delete.svg
└── README.md
```

---

## 🚀 Features

- ➕ **Add Match**: Adds a new match with an initial score of 0
- 🔢 **Increment/Decrement**: Change score by pressing Enter after typing a value
- 🧨 **Delete Match**: Removes that match from the list
- 🔄 **Reset**: Resets all match scores to 0 but keeps the matches intact
- ❌ **No Negative Scores**: Score cannot go below 0

---

## ✅ Requirements

- A modern browser (Chrome, Firefox, Edge)
- [Visual Studio Code](https://code.visualstudio.com/) or any code editor
- (Optional) Live Server extension for auto reload

---

## ⚙️ How to Run This Project

### 1. Clone or Download the Project

```
git clone https://github.com/your-username/scoreboard-app.git
```

Or just download and extract the ZIP.

### 2. Open in VS Code

```
File > Open Folder > Select scoreboard-app
```

### 3. Install Live Server (Optional but Recommended)

Install the **Live Server** extension in VS Code.
Then right-click on `index.html` → **"Open with Live Server"**.

Or you can manually open `index.html` in your browser.

### 4. Interact with the App

- Add matches using "Add Another Match"
- Press Enter in input fields to increment/decrement
- Delete individual matches
- Reset all scores

---

## 🧠 Redux Store Setup (in `script.js`)

Make sure your `script.js` file contains:

- `initialState` with matches
- `actions` like `ADD_MATCH`, `DELETE_MATCH`, `INCREMENT`, `DECREMENT`, `RESET`
- A `reducer` to handle these actions
- Store setup using `Redux.createStore()`

---

## 🛠 Customization

- You can modify styles in `style.css`
- Logo or image paths can be changed in `image/` folder

---

## 📸 Preview

## 📝 License

This project is for learning and educational purposes only.

---

Need help or have a suggestion? Open an issue or drop a message!

Happy coding 💻✨

console.log("El script funcionoa bien");
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fcecec;
    font-family: 'Arial', sans-serif;
}

.window {
    background: white;
    width: 350px;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

.header {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
}

.circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff99a5;
}

h2 {
    font-size: 18px;
    margin-bottom: 15px;
}

img {
    width: 200px;
    border-radius: 10px;
}

.buttons {
    margin-top: 20px;
}

button {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}

#yesButton {
    background: #ff99a5;
    color: white;
}

#noButton {
    background: #ffcccc;
    color: black;
}

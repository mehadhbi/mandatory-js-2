// Skriver ut "X's startar"
// Rensar spelplanen när någon vunnit
function startGame() {
    for (var i = 1; i < 9; i++) {
        clearBox(i);
    }
    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " startar.")
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

//Skriver ut "Välj en annan ruta" ifall man väljer en redan använd ruta
function nextMove(square) {
    if (document.winner != null) {
        setMessage("Spelet är slut, " + document.turn + " har redan vunnit!")
    } else if (square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("Välj en annan ruta.")
    }
}

//Växlar mellan X/O, samt skriver ut "Grattis.." när man har tre i rad.
function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("Grattis " + document.turn + ", du vann!")
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("Det är " + document.turn + "'s tur.")
    }
    else {
        document.turn = "X";
        setMessage("Det är " + document.turn + "'s tur.")
    }
}

// Kollar ifall någon vunnit
function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}


function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}
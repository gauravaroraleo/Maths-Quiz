Player1name = localStorage.getItem("p1name");
Player2name = localStorage.getItem("p2name");
document.getElementById("p1_name").innerHTML = Player1name + " : ";
document.getElementById("p2_name").innerHTML = Player2name + " : ";
player1score = 0;
player2score = 0;
document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;
document.getElementById("pq").innerHTML = "Question turn : " + Player1name;
document.getElementById("pa").innerHTML = "Answer turn : " + Player2name;

function send() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    ans = parseInt(number1) * parseInt(number2);
    qnum = "<h4>" + number1 + " X " + number2 + "</h4>";
    ibox = "<br>type answer: <input type ='text'id= 'checkans'> ";
    cbutton = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    total = qnum + ibox + cbutton;
    document.getElementById("output").innerHTML = total;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
questionturn="player1";
answerturn="player2";

function check() {
    getans = document.getElementById("checkans").value;
    if (getans == ans) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("p1score").innerHTML = player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("p2score").innerHTML = player2score;
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("pq").innerHTML = "question turn: " + Player2name;
    } else {
        questionturn = "player1";
        document.getElementById("pq").innerHTML = "question turn : " + Player1name;
    }
    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("pa").innerHTML = "answer turn : " + Player2name;
    } else {
        answerturn = "player1";
        document.getElementById("pa").innerHTML = "answer turn : " + Player1name;
    }
    document.getElementById("output").innerHTML = "";

}

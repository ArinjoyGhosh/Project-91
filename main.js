function adduser() {
    var player_1 = document.getElementById("player1_name_input").value;
    var player_2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player 1: ", player_1);
    localStorage.setItem("Player 2: ", player_2);
    window.location = "play_page.html";
}
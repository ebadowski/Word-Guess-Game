$(document).ready(function () {
    //creates arrayed list of words and hints
    animals = [
        ["alligator", "assets/images/animals/alligator.jpg"],
        ["bear", "assets/images/animals/bear.jpg"],
        ["bird", "assets/images/animals/bird.png"],
        ["camel", "assets/images/animals/camel.png"],
        ["cat", "assets/images/animals/cat.png"],
        ["cheetah", "assets/images/animals/cheetah.jpg"],
        ["chicken", "assets/images/animals/chicken.png"],
        ["cow", "assets/images/animals/cow.png"],
        ["crocodile", "assets/images/animals/crocodile.jpg"],
        ["deer", "assets/images/animals/deer.jpg"],
        ["dog", "assets/images/animals/dog.jpg"],
        ["dolphin", "assets/images/animals/dolphin.jpg"],
        ["duck", "assets/images/animals/duck.jpg"],
        ["elephant", "assets/images/animals/elephant.jpg"],
        ["fish", "assets/images/animals/fish.jpg"],
        ["fox", "assets/images/animals/fox.png"],
        ["frog", "assets/images/animals/frog.png"],
        ["giraffe", "assets/images/animals/giraffe.png"],
        ["goat", "assets/images/animals/goat.png"],
        ["hippopotamus", "assets/images/animals/hippopotamus.png"],
        ["horse", "assets/images/animals/horse.jpg"],
        ["kangaroo", "assets/images/animals/kangaroo.png"],
        ["lion", "assets/images/animals/lion.png"],
        ["monkey", "assets/images/animals/monkey.jpg"],
        ["octopus", "assets/images/animals/octopus.jpg"],
        ["owl", "assets/images/animals/owl.jpg"],
        ["panda", "assets/images/animals/panda.jpg"],
        ["pig", "assets/images/animals/pig.jpg"],
        ["rabbit", "assets/images/animals/rabbit.jpg"],
        ["rat", "assets/images/animals/rat.jpg"],
        ["scorpion", "assets/images/animals/scorpion.png"],
        ["shark", "assets/images/animals/shark.jpg"],
        ["sheep", "assets/images/animals/sheep.jpg"],
        ["snail", "assets/images/animals/snail.jpg"],
        ["snake", "assets/images/animals/snake.jpg"],
        ["squirrel", "assets/images/animals/squirrel.png"],
        ["tiger", "assets/images/animals/tiger.png"],
        ["turtle", "assets/images/animals/turtle.png"],
        ["wolf", "assets/images/animals/wolf.png"],
        ["zebra", "assets/images/animals/zebra.jpg"]
    ];
    $(".start-button").text("Click to start!");


    startGame();
    
    //Game starts with user inputing letter
    document.onkeyup = function (event) {
        //add keystroke to guess list
        var entry = event.key;
        if (!guesses.includes(entry)) {
            guesses.push(entry);
        }else{entry = "";}

        //update incorrect guesses
        if (!word.includes(entry) && guessesRemaining > 0) {
            guessesRemaining--;
        }
        else if (!word.includes(entry)) {
            loseCondition();
        }
        if (word.includes(entry)) {
            //checks for repeating letters
            for (var i = 0; i < word.length; i++) {
                if (word[i] == entry) {
                    numCorrect++;
                }
            }
        }
        if (numCorrect == word.length) {
            winCondition();
        }

        //update page
        buildPage();
    }





});
function startGame() {
    $(".start-button").on("click", function () {
        //clears instructions from page
        $("#instructions").empty();

        packet = animals[Math.floor(Math.random() * animals.length)];
        word = packet[0];
        guesses = [];
        numCorrect = 0;
        wins = 0;
        losses = 0;
        guessesRemaining = 7;
        clickedHint = false;

        //INITIAL PAGE BUILD
        buildPage();


        //This click hint is working
        clickHint();
    });

}
function clearPage() {
    $("#current-word").empty();
    $("#header-guess").empty();
    $("#num-guessed").empty();
    $("#header-guessed").empty();
    $("#guessed-letters").empty();
    $("#wins-losses").empty();
}
function loseCondition() {
    losses++;
    guessesRemaining = 7;
    packet = animals[Math.floor(Math.random() * animals.length)];
    word = packet[0];
    guesses = [];
    numCorrect = 0;
    clickedHint = false;
}
function winCondition() {
    wins++;
    guessesRemaining = 7;
    packet = animals[Math.floor(Math.random() * animals.length)];
    word = packet[0];
    guesses = [];
    numCorrect = 0;
    clickedHint = false;
}

function clickHint() {
    //onclick hint button display image using link in nested array
    $(".hint-button").on("click", function () {
        clickedHint = true;
        console.log("clicked hint");
        $("#hint").empty();
        $('#hint').prepend($('<img>', { id: 'theImg', src: String(packet[1]) }))
        //$("#hint").append("<img src=\"" + packet[1] + "\">");
    });
}
function buildWord(word, guesses) {
    //clear word before adding to it
    $("#word").empty();
    for (var i = 0; i < word.length; i++) {
        //check guessed letters adding either the letters guessed or an underscore
        if (guesses.includes(word[i])) {
            $("#word").append(" " + word[i] + " ");
        }
        else {
            $("#word").append(" _ ");
        }
    }
}
function buildPage() {
    //Clear page before building
    clearPage();
    //build page
    $("#current-word").append("Current Word");
    buildWord(word, guesses);
    $("#header-guess").append("Guesses Remaining:");
    $("#num-guessed").append(String(guessesRemaining));
    $("#header-guessed").append("Guessed Letters:");
    for (var i = 0; i < guesses.length; i++) {
        $("#guessed-letters").append(guesses[i] + " ");
    }

    $("#wins-losses").append("Wins: " + String(wins) + " || " + "Losses: " + String(losses));

    //only add hint button if it hasn't been clicked that round
    if (!clickedHint) {
        $("#hint").empty();
        var hintButton = $("<button class=\"hint-button\">");
        $(hintButton).text("HINT");
        $("#hint").append(hintButton);
        clickHint();
    }
}
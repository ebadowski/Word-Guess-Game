$(document).ready(function () {
    //creates arrayed list of words and hints
    var animals = [
        ["alligator", "_images/animals/alligator.jpg"],
        ["bear", "_images/animals/bear.jpg"],
        ["bird", "_images/animals/bird.png"],
        ["camel", "_images/animals/camel.png"],
        ["cat", "_images/animals/cat.png"],
        ["cheetah", "_images/animals/cheetah.jpg"],
        ["chicken", "_images/animals/chicken.png"],
        ["cow", "_images/animals/cow.png"],
        ["crocodile", "_images/animals/crocodile.jpg"],
        ["deer", "_images/animals/deer.jpg"],
        ["dog", "_images/animals/dog.jpg"],
        ["dolphin", "_images/animals/dolphin.jpg"],
        ["duck", "_images/animals/duck.jpg"],
        ["elephant", "_images/animals/elephant.jpg"],
        ["fish", "_images/animals/fish.jpg"],
        ["fox", "_images/animals/fox.png"],
        ["frog", "_images/animals/frog.png"],
        ["giraffe", "_images/animals/giraffe.png"],
        ["goat", "_images/animals/goat.png"],
        ["hippopotamus", "_images/animals/hippopotamus.png"],
        ["horse", "_images/animals/horse.jpg"],
        ["kangaroo", "_images/animals/kangaroo.png"],
        ["lion", "_images/animals/lion.png"],
        ["monkey", "_images/animals/monkey.jpg"],
        ["octopus", "_images/animals/octopus.jpg"],
        ["owl", "_images/animals/owl.jpg"],
        ["panda", "_images/animals/panda.jpg"],
        ["pig", "_images/animals/pig.jpg"],
        ["rabbit", "_images/animals/rabbit.jpg"],
        ["rat", "_images/animals/rat.jpg"],
        ["scorpion", "_images/animals/scorpion.png"],
        ["shark", "_images/animals/shark.jpg"],
        ["sheep", "_images/animals/sheep.jpg"],
        ["snail", "_images/animals/snail.jpg"],
        ["snake", "_images/animals/snake.jpg"],
        ["squirrel", "_images/animals/squirrel.png"],
        ["tiger", "_images/animals/tiger.png"],
        ["turtle", "_images/animals/turtle.png"],
        ["wolf", "_images/animals/wolf.png"],
        ["zebra", "_images/animals/zebra.jpg"]
    ];



    //initial key click to clear instructions and show page
    document.onkeyup = function (event) {

        //clears instructions from page
        $("#instructions").empty();

        var packet = animals[Math.floor(Math.random() * animals.length)];
        var word = packet[0];
        var guesses = [];
        var numCorrect = 0;
        var wins = 0;
        var losses = 0;
        var guessesRemaining = 7;
        var clickedHint = false;

        //INITIAL PAGE BUILD
        buildPage();


        //Game starts with user inputing letter
        document.onkeyup = function (event) {
            //add keystroke to guess list
            var entry = event.key;
            guesses.push(entry);

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

            //NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //onclick hint button display image using link in nested array
            $(".hint-button").on("click", function () {
                clickedHint = true;
                $("#hint").empty();
                $('#hint').prepend($('<img>',{id:'theImg',src: String(packet[1])}))
                //$("#hint").append("<img src=\"" + packet[1] + "\">");
            });


            //update page
            buildPage();
        }

        //builds word text with dashes or guessed letters
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
            }
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
    }
});
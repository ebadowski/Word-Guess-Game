$(document).ready(function() {
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

        var packet = animals[Math.floor(Math.random()*animals.length)];
        var word = packet[0];
        var guesses = [];
        var wins = 0;
        var losses = 0;
        var guessesRemaining = 13;

        //INITIAL PAGE BUILD
        buildPage();
        

        //Game starts with user inputing letter
        document.onkeyup = function (event) {
            //add keystroke to guess list
            var entry = event.key;
            guesses.push(entry);

            //update incorrect guesses
            //update correct guess using show word function

            //onclick hint button display image using link in nested array

            //win conditions
                // clear hint image
            //update page
            buildPage();
        }

        //builds word text with dashes or guessed letters
        function buildWord(word, guesses){
            //clear word before adding to it
            $("#word").empty();
            for(var i = 0; i<word.length; i++){
                //check guessed letters adding either the letters guessed or an underscore
                if(guesses.includes(word[i])){
                    $("#word").append(" " + word[i] + " ");
                }
                else{
                    $("#word").append(" _ ");
                }
            }
        }
        function buildPage(){
            //Clear page before building
            clearPage();
            //build page
            $("#current-word").append("Current Word");
            buildWord(word,guesses);
            $("#header-guess").append("Guesses Remaining:");
            $("#num-guessed").append(String(guessesRemaining));
            $("#header-guessed").append("Guessed Letters:");
            for(var i = 0; i<guesses.length; i++){
                $("#guessed-letters").append(guesses[i] + " ");
            }
            
            $("#wins-losses").append("Wins: " + String(wins) + " || " + "Losses: " + String(losses));
            //ADD HINT BUTTON
        }
        function clearPage(){
            $("#current-word").empty();
            $("#header-guess").empty();
            $("#num-guessed").empty();
            $("#header-guessed").empty();
            $("#guessed-letters").empty();
            $("#wins-losses").empty();
        }

    }
});
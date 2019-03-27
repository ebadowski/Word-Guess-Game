$(document).ready(function() {
    //creates list of words
    var animals = ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus", "owl", "panda", "pig", "puppy", "rabbit", "rat", "scorpion", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"];
    
    
    document.onkeyup = function (event) {

        //clears instructions from page
        $("#instructions").empty();

        


        var word = animals[Math.floor(Math.random()*animals.length)];
        

        for(var i = 0; i<word.length; i++){
            // if guessed 
                //enter guessed letter
            //else put dash
                $("#word").append(" _ ");
        }
    }
});
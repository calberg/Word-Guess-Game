    
    
    var randomWordArr = ["rick", "morty", "pickle rick", "get schwifty", "mr meeseeks", "ricksy business"]
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    var r;
    var count = 0;
    var answerArr = [];
    //var remainingLetters = word.length;


    //Creates the _ _ _ _ pattern for the word length
    function startUp(){
        for (var i = 0; i < randomWord.length; i++)
        {
        answerArr[i] = "_";
    }
    r = answerArr.join(" ");
    document.getElementById("answer").innerHTML = r;
    }

    //Checks if the letter that is input is contained within the word
    //Try to clear each letter after it is typed
    //End the loop and play song
    function Letter()
    {
        var letter = document.getElementById("letter").value;
        if (letter.length > 0)
        {
                for (var i = 0; i < randomWord.length; i++)
                {
                    if (randomWord[i] === letter)
                    {
                        answerArr[i] = letter;
                        //remainingLetters--;
                    }
                }
                count++;
                //document.getElementById("remaining").innerHTML = 
                document.getElementById("counter").innerHTML = "Number of clicks: " + count;
                document.getElementById("answer").innerHTML = answerArr.join(" ");
        }
        if(count>5)
        {
            document.getElementById("stat").innerHTML = "Sometimes science is more art than science, Morty."
        }
    }

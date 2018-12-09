    
    
    var randomWordArr = ["rick", "morty", "pickle rick", "get schwifty", "mr meeseeks", "ricksy business"]
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    var r;
    var count = 0;
    var answerArr = [];
    

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
    //TO DO  play song
    document.onkeyup = function (event)
    {
        let guessedWord = "";
        var letter = event.key;
        console.log(letter);

        if (letter.length===1 && letter>='a' && letter<='z' || letter===" ")
        {
            for (var i = 0; i < randomWord.length; i++)
            {
                if (randomWord[i] === letter)
                {
                    answerArr[i] = letter;
                    
                }
                
                
            }
            count++;
            document.getElementById("counter").innerHTML = "Number of guesses: " + count;
            document.getElementById("answer").innerHTML = answerArr.join(" ");
        }
        for (let i = 0; i<answerArr.length; i++)
                    {
                        guessedWord = guessedWord.concat(answerArr[i]);
                    }
                    console.log(answerArr.toString());
                    console.log(randomWord)
                    console.log(guessedWord)
                        if (guessedWord === randomWord)
                    {
                        document.getElementById("stat").innerHTML = "Sometimes science is more art than science, Morty.";
                        
                        //Trying to get the image to show up after they have correctly guesses the word. I got the quote, but can't get the image to show.
                        function show_image(src, width, height, alt) {
                            var img = document.createElement("img");
                            img.src = /Users/chrisalberg/~code/Homework/Word-Guess-Game/Assets/images/rickandmorty.jpg;
                            img.width = width;
                            img.height = height;
                            img.alt = alt;
                            document.getElementById("stat").appendChild(img); 
                          }
                    }
                
    }

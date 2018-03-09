// var button = document.getElementById("get-number")

// function getNumber()
// {
// 	console.log(button.value);
// }
var text = document.getElementById("correct-text");
var numberContainer = document.getElementById("number-container"), 
	clickCounter = 0,
	numberOne,
	numberTwo,
	numberThree;
var numberButtons = document.getElementsByClassName('button');	

function disableButtons() 
{
    for(i=0; i < numberButtons.length; i++) 
    {
        numberButtons[i].setAttribute('disabled', 'disabled');
    }
}

    //Function to enable buttons.
function enableButtons() 
{
    for(i=0; i < numberButtons.length; i++)
    {
        numberButtons[i].removeAttribute('disabled');
    }
}

function getNumber(button)
{
	clickCounter++;

	enableButtons();

	numberContainer.innerHTML += button.value;

	if (clickCounter == 1) 
	{
		numberOne = button.value;
	}
	else if (clickCounter == 2) 
	{
		numberTwo = button.value;
	}
	else
	{
		numberThree = button.value;
	}

	if (clickCounter == 3) 
	{

		disableButtons();

		if (numberOne == 3 && numberTwo == 1 && numberThree == 1)
		{
			clickCounter = 0;
			numberContainer.innerHTML = "";
			text.innerHTML = "the code is correct!";

			//Variable for the duration of the timer.
                    var correct = document.getElementById("correctblink");
                    var durationTimer = 0;
                    //Variable for the audio.
                    var audio = new Audio('Sound/CorrectAnswer.mp3');
                        //Playing the audio file.
                        audio.play();
                    //Variable for the blink function.
                    var blink = setInterval(function() {
                        //Add's 1 to the duration.
                        durationTimer++;
                        //If statement for making the element "Correct" blink.
                        if (correct.style.visibility == 'hidden') {
                            //If the element "Correct" is hidden, then it makes it visible.
                            correct.style.visibility = 'visible';
                        }
                        //Else statement for making the element "Correct" blink.
                        else {
                            //If the element "Correct" is visible, then it makes it hidden.
                            correct.style.visibility = 'hidden';
                        }
						//If statement to stop the timer.
                        if(durationTimer == 10) {
                            //Pop-up message.
                            alert("Correct! Vault unlocked.");
                            //Enable buttons.
                            enableButtons();
                            //Clear the interval of blink.
                            clearInterval(blink);
                        }
                    }, 300);

		}
		else
		{
			clickCounter = 0;
			numberContainer.innerHTML = "";	
			text.innerHTML = "the code is incorrect";

					var incorrect = document.getElementById("incorrectblink");
                    var durationTimer = 0;
                    //Variable for the audio.
                    var audio2 = new Audio('Sound/IncorrectAnswer.mp3');
                        //Playing the audio file.
                        audio2.play();
                    //Variable for the blink function.
                    var blink = setInterval(function() {
                        //Add's 1 to the duration.
                        durationTimer++;
                        //If statement for making the element "inCorrect" blink.
                        if (incorrect.style.visibility == 'hidden') {
                            //If the element "Correct" is hidden, then it makes it visible.
                            incorrect.style.visibility = 'visible';
                        }
                        //Else statement for making the element "inCorrect" blink.
                        else {
                            //If the element "inCorrect" is visible, then it makes it hidden.
                            incorrect.style.visibility = 'hidden';
                        }
//If statement to stop the timer.
                        if(durationTimer == 10) {
                            //Pop-up message.
                            alert("Incorrect! Vault locked.");
                            //Enable buttons.
                            enableButtons();
                            //Clear the interval of blink.
                            clearInterval(blink);
                        }
                    }, 300);
		}
	}


	console.log(numberOne);
	console.log(numberTwo);
	console.log(numberThree);
}
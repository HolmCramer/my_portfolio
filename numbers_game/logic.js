var rnd_number = Math.floor(Math.random() * 101);
function compare_numbers(input){
    var status_text = "Guess a Number!";
    if (input == rnd_number){
        status_text = "You got it!!! The Number was " + rnd_number + " :)";
    }
    else if (input < rnd_number && input >= 0){
        status_text = "Your Number is too small, keep trying!"
    }
    else if (input > rnd_number && input <= 100){
        status_text = "Your Number is too big, keep trying!";
    }
    else{
        status_text = "Enter a Number between 0 and 100!"
    }
    document.getElementById("guess_status").innerHTML = status_text;
}
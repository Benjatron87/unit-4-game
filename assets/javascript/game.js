

$(document).ready(function reset() {

    // Giving the html cards js values.
    var aragornHit = $("#aragorn-card");
    var legolasHit = $("#legolas-card");
    var gandalfHit = $("#gandalf-card");
    var gimliHit = $("#gimli-card");

    // Stating necessary variables.
    var wins = 0;
    var losses = 0;
    var hitPoints = 0;
    var characters = [];

    // Giving random number values for the "characters" array.
    for (var i = 0; i < 4; i++){
        characters.push( Math.floor(Math.random() * 12) + 1);
    }

    // Making the random number an attribute to the html cards.
    aragornHit.attr("data-hit", characters[0]);
    legolasHit.attr("data-hit", characters[1]);
    gimliHit.attr("data-hit", characters[2]);
    gandalfHit.attr("data-hit", characters[3]);

    // Creating a random number betweeen 19-120 for the Balrog.
    var balrog = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;

    // Putting the values for balrog, wins, hitPoints, and losses onto the html.
    $("#balrog-health").html(balrog);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#hit-points").html(hitPoints);

    // Hides the "play again" button.
    $("#button").hide();
    
    // Function to reset all values and hide or show certain html elements.
    function setUp(){

        // Hides the "play again" button again.
        $("#button").hide();

        // Clears the text that says either "you lost" or "you win".
        $("#outcome").html("");

        // Reveals necessary html elements.
        $("#points").show();
        $("#choose-head").show();
        $("#balrog-card").show();
        $("#characters").show();

        // Resets the "characters" array to empty.
        characters = [];

        // Giving random number values for the "characters" array.
        for (i = 0; i < 4; i++){
            characters.push( Math.floor(Math.random() * 12) + 1);
        }

        // Making the random number an attribute to the html cards.
        aragornHit.attr("data-hit", characters[0]);
        legolasHit.attr("data-hit", characters[1]);
        gimliHit.attr("data-hit", characters[2]);
        gandalfHit.attr("data-hit", characters[3]);

        // Creating a random number betweeen 19-120 for the Balrog.
        balrog = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;

        // Putting the values for balrog, and hitPoints onto the html.
        $("#balrog-health").html(balrog);
        $("#hit-points").html(hitPoints);
    }

    // When any card is clicked, the following happens.
    $(".good").on("click", function() {

        // Pulls the random number based on the specific card's attribute.
        var hit = ($(this).attr("data-hit"));

        // Using parseInt to make sure the attribute value is not a string and is a number.
        hit = parseInt(hit);

        // If hitPoints is less than balrog, then add hit to hitPoints and add that new value to the html.
        if(hitPoints < balrog){

            hitPoints += hit;
            $("#hit-points").html(hitPoints);
        }

        // If hitPoints is greater than balrog you lose.
        if (hitPoints > balrog){
            
            // Shows the "play again" button and tells you that you lose.
            $("#button").show();
            $("#outcome").html("The Balrog Has Defeated You!");

            // Hides the character cards and the intro paragraph.
            $("#choose-head").hide();
            $("#characters").hide();

            // Resets the hitPoints value.
            hitPoints = 0;

            // Adds one to losses.
            losses++;

            // displays losses to the html.
            $("#losses").html(losses);

            // When the "play again" button is clicked, run the setUp function above.
            $("#button").click(setUp);
        }

        // If hitPoints equals balrog, then you win.
        if(hitPoints === balrog){
            
            // Shows the "play again" button and tells you that you win.
            $("#button").show();
            $("#outcome").show().html("You Have Defeated The Balrog!");

            // hides the balrog card and the intro paragraph.
            $("#choose-head").hide();
            $("#balrog-card").hide();

            // Resets the hitPoints value.
            hitPoints = 0;

            // Adds one to wins.
            wins++;

            // Displays wins to the html.
            $("#wins").html(wins);
    
            // When the "play again" button is clicked, run the setUp function above.
            $("#button").click(setUp);
        }
    });

});
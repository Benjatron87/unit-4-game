
 var play = true;

$(document).ready(function() {

    var aragorn = {health: 120, damage: 8};
    var legolas = {health: 100, damage: 8};
    var saruman = {health: 90, damage: 8};
    var witchking = {health: 150, damage: 8};

    $("#aragorn").text(aragorn.health);
    $("#legolas").text(legolas.health);
    $("#saruman").text(saruman.health);
    $("#witch-king").text(witchking.health);


    var legolasCard = $("#legolas-card");
    var aragornCard = $("#aragorn-card");
    var sarumanCard = $("#saruman-card");
    var witchkingCard = $("#witch-king-card");


            function setUp (x, y, z){
                $(x).remove();
                $(y).remove();
                $(z).remove();
            }

            function enemySet (x, y, z){
                $("#enemies").append(x);
                $("#enemies").append(y);
                $("#enemies").append(z);
            }

            function gameplay(x, y, z){

                if(play === true){

                    $("#attack-button").text("Attack").attr("id", "button");

                    $("#fighting").html("You Are Fighting:");
                    $("#defender").append(x);
                    $('html, body').animate({scrollTop: '+=500px'}, 1000);

                    $("#button").click(function(){

                        z.damage = 24
                        y.health -= z.damage;
                        z.health -= y.damage;
                        y.damage += 8;
                        

                        $("#aragorn").text(aragorn.health);
                        $("#legolas").text(legolas.health);
                        $("#saruman").text(saruman.health);
                        $("#witch-king").text(witchking.health);


                        // if (y.health <= 0){
                        //     play = false;
                        // }
        
                        if (z.health <= 0){
                            $("#defender").empty();
                            $("#fighting").remove();
                            $("#button").hide();
                            // play = false;
                            $("#saruman-card").click(function(){gameplay(sarumanCard, aragorn, saruman)});
                        }
                    });
                }
            }
            
            

    $("#aragorn-card").click(function(){

        setUp("#legolas-card", "#saruman-card", "#witch-king-card");
        
        $("#your-enemies").html("Your Enemies Are:");

        enemySet(legolasCard, sarumanCard, witchkingCard);

        $("#choose-head").text("You Have Chosen Aragorn!");
        $('html, body').animate({scrollTop: '+=800px'}, 1000);

        console.log(aragorn.health);
        console.log(legolas.health);
        console.log(saruman.health);
        console.log(witchking.health);

        $("#legolas-card").click(function(){gameplay(legolasCard, aragorn, legolas)});
        // $("#saruman-card").click(function(){gameplay(sarumanCard, aragorn, saruman)});
        $("#witch-king-card").click(function(){gameplay(witchkingCard, aragorn, witchking)});
    });

        

    $("#legolas-card").click(function(){
        setUp("aragorn-card", "#saruman-card", "#witch-king-card");

        $("#your-enemies").html("Your Enemies Are:");

        enemySet(aragornCard, sarumanCard, witchkingCard);

        $("#choose-head").text("You Have Chosen Legolas!");
        $('html, body').animate({scrollTop: '+=800px'}, 1000);

        $("#legolas-card").click(function(){gameplay(legolasCard, legolas, aragorn)});
        $("#saruman-card").click(function(){gameplay(sarumanCard, legolas, saruman)});
        $("#witch-king-card").click(function(){gameplay(witchkingCard, legolas, witchking)});
    
    });

    $("#saruman-card").click(function(){
        setUp("#legolas-card", "#aragorn-card", "#witch-king-card");

        $("#your-enemies").html("Your Enemies Are:");

        enemySet(aragornCard, legolasCard, witchkingCard);

        $("#choose-head").text("You Have Chosen Saruman!");
        $('html, body').animate({scrollTop: '+=800px'}, 1000);


        $("#legolas-card").click(function(){gameplay(legolasCard, aragorn, legolas)});
        $("#saruman-card").click(function(){gameplay(sarumanCard, aragorn, saruman)});
        $("#witch-king-card").click(function(){gameplay(witchkingCard, aragorn, witchking)});
    });

    $("#witch-king-card").click(function(){
        setUp("#legolas-card", "#saruman-card", "#aragorn-card");

        $("#your-enemies").html("Your Enemies Are:");

        enemySet(aragornCard, legolasCard, sarumanCard);

        $("#choose-head").text("You Have Chosen The Witch King!");
        $('html, body').animate({scrollTop: '+=800px'}, 1000);

        $("#legolas-card").click(function(){gameplay(legolasCard, aragorn, legolas)});
        $("#saruman-card").click(function(){gameplay(sarumanCard, aragorn, saruman)});
        $("#witch-king-card").click(function(){gameplay(witchkingCard, aragorn, witchking)});
    });

});

$(document).ready(function() {

    var legolasCard = $("#legolas-card");
    var aragornCard = $("#aragorn-card");
    var sarumanCard = $("#saruman-card");
    var witchkingCard = $("#witch-king-card");
   
    $("#aragorn-card").click(function(){

        $("#legolas-card").remove();
        $("#saruman-card").remove();
        $("#witch-king-card").remove();

        $("#your-enemies").html("Your Enemies Are:");

        $("#enemies").append(legolasCard);
        $("#enemies").append(witchkingCard);
        $("#enemies").append(sarumanCard);

        $("#choose-head").text("You Have Chosen Aragorn!");
    });

    $("#legolas-card").click(function(){
        $("#aragorn-card").remove();
        $("#saruman-card").remove();
        $("#witch-king-card").remove();

        $("#your-enemies").html("Your Enemies Are:");

        $("#enemies").append(witchkingCard);
        $("#enemies").append(aragornCard);
        $("#enemies").append(sarumanCard);

        $("#choose-head").text("You Have Chosen Legolas!");
    });

    $("#saruman-card").click(function(){
        $("#legolas-card").remove();
        $("#aragorn-card").remove();
        $("#witch-king-card").remove();

        $("#your-enemies").html("Your Enemies Are:");

        $("#enemies").append(legolasCard);
        $("#enemies").append(aragornCard);
        $("#enemies").append(witchkingCard);

        $("#choose-head").text("You Have Chosen Saruman!");
    });

    $("#witch-king-card").click(function(){
        $("#legolas-card").remove();
        $("#saruman-card").remove();
        $("#aragorn-card").remove();

        $("#your-enemies").html("Your Enemies Are:");

        $("#enemies").append(legolasCard);
        $("#enemies").append(aragornCard);
        $("#enemies").append(sarumanCard);

        $("#choose-head").text("You Have Chosen The Witch King!");
    });

    var aragorn = {health: "120", damage: "10"};
    var legolas = {health: "100", damage: "10"};
    var saruman = {health: "90", damage: "10"};
    var witchking = {health: "150", damage: "10"};

    $("#aragorn").text(aragorn.health);
    $("#legolas").text(legolas.health);
    $("#saruman").text(saruman.health);
    $("#witch-king").text(witchking.health);




});
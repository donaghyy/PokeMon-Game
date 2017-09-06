function headerSearch () {
    console.log("HEADER CHANGE");
    var header = document.getElementById("strongHeader");
    header.innerHTML = "PokeSearch";
}

function headerBox () {
    console.log("HEADER CHANGE");
    var header = document.getElementById("strongHeader");
    header.innerHTML = "PokeBox";
}

function headerBattler () {
    console.log("HEADER CHANGE");
    var header = document.getElementById("strongHeader");
    header.innerHTML = "PokeBattler";
}

function Submit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
    var pokeURL2 = "http://pokeapi.co/api/v2/pokemon/" + param;

    $.getJSON(pokeURL, function(data){
        //console.log(data);
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;
        var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
        var pokeDescription = "";

        $.getJSON(descriptionURI, function(data2){
            //console.log(data2);
            pokeDescription = data2.description;
        });

        $.getJSON(pokeURL2, function(data3){
            //console.log(data3);
            var imageURI = data3.sprites.front_default;

            console.log("Number: ", pokeID);
            console.log("Name: ", pokeName);
            console.log("Type 1: ", pokeType1);
            console.log("Type 2: ", pokeType2);
            console.log("Description URI: ", descriptionURI);
            console.log("Description: ", pokeDescription);
            console.log("Image URI: ", imageURI);


            var displayElement = "";
            displayElement += '<li><img src="' + imageURI + '">';
            displayElement += '<h1>#' + pokeID + ' ' + pokeName + '</h1>';
            displayElement += '<p>Type 1: ' + pokeType1 + '</p>';


            if (pokeType2 != null){
                displayElement += '<p>Type 2: ' + pokeType2 + '</p>';
            }

            displayElement += '<p>' + pokeDescription + '</p>';
            displayElement += '</li>';

            $("#pokeDetails").empty();


            $("#pokeDetails").append(displayElement).promise().done(function(){
                $(this).listview("refresh");
            });

        });

    });
}

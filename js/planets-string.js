(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // var planetsString = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter','Saturn', 'Uranus', 'Neptune'];
    var planetsArray = planetsString.split('|');
    // planetsString.split('|');
    console.log(planetsArray);


    var planetstring = planetsArray.join('_');
    console.log(planetstring);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? so it would return after eacl planet.
    <br>
     planetsArray.join('_');
     console.log(planetsArray);
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var brokenPlanets = planetsArray.join("<br>")
    console.log(brokenPlanets);

    var planetsLists = "<ul>\n<li>";
    planetsList += planetsArray.join("</li>\n<li>");
    planetsList += "</li></ul>";

    console.log(planetsList);
    documnet.getElementById("planets").innerHTML = planetsList;

    // let planetsList = '<ul>' + planetsArray.map(function (planet){ 
    //     return '<li>' + planet + '</li>'; 
    // }).join('') + '</ul>';

    // var newString = planetsArray.join(' <li> ').split(' '); 
    // newString.unshift('<ul>','<li>'); 
    // newString.push('</li>','</ul>'); 
    // console.log(newString.join('')); 
    // var newString = planetsArray.join(' <li> </li>').split(' '); 
    // newString.unshift('<ul>','<li>');     newString.push('</li>','</ul>'); 
    // console.log(newString.join(''));
    //
    // var newString = planetsArray.join(' </li> <li> ').split(' '); 
    // newString.unshift('<ul>','<li>'); 
    // newString.push('</li>','</ul>'); 
    // console.log(newString.join(''));

    // var planetsList = "<ul><li>" + planetsArray.join("</li><li>") +"</li></ul>";
    // console.log(planetslist);
    // // planetsArray.sort();
    // // console.log(planetsArray);

})();
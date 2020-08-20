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
    planetsString.split('|');
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
    planetsArray.sort();
    console.log(planetsArray);

})();
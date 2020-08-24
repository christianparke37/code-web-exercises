var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation", "Push to Start"],
        owner: {
            name: "Jane Doe",
            age: 30
        },
        report: function() {
            console.log("This car is a "+this.make+ " " + this.model +".")
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "CD Player"],
        owner: {
            name: "John Doe",
            age: 31
        },
        report: function() {
            console.log("This car is a "+this.make+ " " + this.model +".")
        }
    }
];

console.error("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.warn("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car,i) {
    console.log("Here are the features for car #"+(i+1))
    // car.features.forEach(function(feature) {
    //     console.log(feature);
    // });
    console.table(car.features);
});

cars.forEach(function(car){
    car.report();
})
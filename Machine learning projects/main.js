const carCanvas=document.getElementById("carCanvas");
carCanvas.width=200;
const networkCanvas=document.getElementById("networkCanvas");
networkCanvas.width=500;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");
const road = new Road(carCanvas.width/2, carCanvas.width*0.9);

const N = 100;
const cars = generateCars(N);
let bestCar=cars[0];
if(localStorage.getItem("bestBrain")){
    for(let i=0; i<cars.length; i++){
        cars[i].brain=JSON.parse(
            localStorage.getItem("bestBrain"));
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0.2);
        }
    }
}

const traffic = [
    /**
     * Define traffic cars with their initial positions and properties
     * More traffic cars can be added as needed
     */
    new Car(road.getLaneCenter(1), -100, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(0), -300, 30, 50,"DUMMY", 2),   
    new Car(road.getLaneCenter(1), -100, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(2), -700, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(1), -800, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(0), -1400, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(1), -1000, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(0), -3000, 30, 50,"DUMMY", 2),   
    new Car(road.getLaneCenter(1), -1090, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(2), -7100, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(1), -8060, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(0), -4100, 30, 50,"DUMMY", 2),
    new Car(road.getLaneCenter(2), -1080, 30, 50,"DUMMY", 2)
];

animate();

function save(){
    localStorage.setItem("bestBrain",
       JSON.stringify(bestCar.brain)
    );
}

function discard(){
    localStorage.removeItem("bestBrain");
}

function generateCars(N){
    const cars = [];
    for(let i=1; i<=N; i++){
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"));
        /**
         * Generate cars with their initial positions and properties
         * More cars can be added as needed
         */
    }
    return cars;
}

function animate(time){
    // Update positions and states of traffic cars
    for(let i=0; i<traffic.length; i++){
        traffic[i].update(road.borders, []);
    }
    // Update positions and states of AI cars
    for(let i=0; i<cars.length;i++){
        cars[i].update(road.borders,traffic);
    }
    // Find the best car based on its position (fitness function)
    bestCar=cars.find(
        c=>c.y==Math.min(
            ...cars.map(c=>c.y)
        )
    ); // modern syntax - this is also an example of a fitness function.
    
    // Adjust canvas heights based on the best car's position 
    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;

    // Translate the car canvas to focus on the best car
    carCtx.save();
    carCtx.translate(0, -bestCar.y+carCanvas.height*0.7);

    // Draw the road, traffic cars, AI cars, and the best car
    road.draw(carCtx);
    for(let i= 0; i<traffic.length;i++){
        traffic[i].draw(carCtx, "purple");
    }
    carCtx.globalAlpha=0.2;
    for(let i=0; i<cars.length;i++){
        cars[i].draw(carCtx, "blue");
    }

    carCtx.globalAlpha=1;
    bestCar.draw(carCtx, "blue", true);

    carCtx.restore();

    // Update and draw the neural network visulaisation for the best car
    networkCtx.lineDashOffset=-time/50; 
    // it is feedfoward algorithim, hence the minus
    Visualiser.drawNetwork(networkCtx, bestCar.brain);

    requestAnimationFrame(animate);
    // Recursive function to continuously animate the simulation
}
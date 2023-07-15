class Road{
    constructor(x, width, laneCount=3){

        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        // Calculate the left and right boundaries of the road
        this.left=x-width/2;
        this.right=x+width/2;

        const bigNumber = 10000000;

        // Set the top and bottom boundaries of the road to a large positive and negative value
        this.top = -bigNumber;
        this.bottom = bigNumber;
        
        // Define the corners of the road borders
        const topLeft = {x:this.left, y:this.top};
        const topRight = {x:this.right, y:this.top};
        const bottomLeft = {x:this.left, y:this.bottom};
        const bottomRight = {x:this.right, y:this.bottom};

        // Store the borders of the road as an array of line segments
        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];

    }

    // Get the center position of a specific lane 
    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+Math.min(laneIndex-1)*laneWidth;
    }

    // Draw the road on the canvas 
    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        // draw dashed lines to represent the lanes
        for(let i=0; i<=this.laneCount -1; i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }

        // Draw solid lines to represent the road borders
        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
    }
}
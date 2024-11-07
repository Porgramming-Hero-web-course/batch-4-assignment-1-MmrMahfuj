type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

type CalculateShapeArea = (param: Shape) => number;

const calculateShapeArea: CalculateShapeArea =(param)=>{

    if (param.shape === "circle") {
        return Math.PI * param.radius * param.radius;
    } else if (param.shape === "rectangle") {
        return param.width * param.height;
    };
    return 0;
    
};

const circleArea = calculateShapeArea({shape:"circle", radius:5});

const rectangleArea= calculateShapeArea({
    shape:"rectangle",
    width:4,
    height:6,
})


console.log(circleArea)
console.log(rectangleArea);
console.log(calculateShapeArea({shape:"circle", radius:10}))


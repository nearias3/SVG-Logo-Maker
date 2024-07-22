class Shape {
    constructor() {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
       return `<polygon points ="150, 18 244, 182 56, 182" fill="${this.color}" />`; 
    }
}

class Square extends Shape {
    render() {
        return //add the code for square//;
    }
}

class Circle extends Shape {
    render() {
        return //add the code for circle//
    }
}

module.exports = { Triangle, Square, Circle };
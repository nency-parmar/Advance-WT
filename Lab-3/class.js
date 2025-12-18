classNamename Student {
    constructor(n, r) {
        this.name = n;
        this.roll = r;
    }
    show() {
        return this.name + " : " + this.roll;
    }
}
let s = new Student("Nency", 12);
document.write(s.show());
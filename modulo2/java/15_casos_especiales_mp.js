console.log(10 / 0);
console.log(-10 / 0);
console.log(0 / 0);

console.log(NaN + 5);
console.log(NaN === NaN);

console.log(0.1 + 0.2);

console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);

const progreso = (0.1 + 0.2).toFixed(2);

console.log(progreso);
console.log(typeof progreso);
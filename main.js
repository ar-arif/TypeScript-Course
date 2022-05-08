// let firstName: string = "Dylan";
// const json = JSON.parse("55");
// let u = true;
// let v: any = true;
// let w: unknown = 1;
// w = "string"; // no error
// w = {
// 	runANonExistentMethod: () => {
// 		console.log("I think therefore I am");
// 	},
// } as { runANonExistentMethod: () => void };
// // How can we avoid the error for the code commented out below when we don't know the type?
// // w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
// if (typeof w === "object" && w !== null) {
// 	(w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// let x: never; // Error: Type 'boolean' is not assignable to type 'never'.
// let y: undefined = undefined;
// let z: null = null;
// let myVar: any;
// console.log(typeof myVar);
// const names: string[] = [];
// names.push("Dylan", "masud"); // no error
// console.log(names);
// const names: readonly string[] = ["Dylan"];
// // names.push("Jack");
// const numbers: any = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// numbers.push("2"); // no error
// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, "Coding God was here"];
// // We have no type safety in our tuple for indexes 3+
// ourTuple.push("Something new and wrong");
// ourTuple.push("ZZZZZZZ");
// console.log(ourTuple);
// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [
// 	5,
// 	true,
// 	"The Real Coding God",
// ];
// // throws error as it is readonly.
// ourReadonlyTuple.push("Coding God took a day off");
// const graph: [x: number, y: number] = [55.2, 41.3];
// graph.push(23, 233, 234234);
// console.log(graph);
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;
// console.log(x, y);
// const car: { type: string; model: string; year: number } = {
// 	type: "Toyota",
// 	model: "Corolla",
// 	year: 2009,
// };
// console.log(car);
// const car = {
//   type: "Toyota",
// };
// car.type = "Ford"; // no error
// // car.type = 2;
// const car: { type: string; mileage: number } = {
// 	// Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
// 	mileage: 909,
// 	type: "Toyota",
// };
// car.mileage = 2000;
var car = {
    // no error
    type: "Toyota"
};
car.mileage = 2000;
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
console.log(nameAgeMap);

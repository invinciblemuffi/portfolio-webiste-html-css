// Type Annotation on variables

let numA:number = 10
let strB: string = 'My Name is: '
let arrX: number[] = [4,5,7]
let genericArrType: Array<string> = ['l','e','a','r','n']
let objY: object = {name:'Max', age:40}
let isDone: boolean = true
// Tuple types allow you to express an array with a fixed number of elements whose types are known.
let tupleZ: [number, string, boolean]
tupleZ = [10, 'Match the string type', true] // Valid
tupleZ = [10, 20, true] // Error: Type 'number' is not assignable to type 'string'.

// Return Type Annotations

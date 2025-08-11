# What is TS?
- TypeScript is JavaScript with added syntax for types.
- TS is a syntactic superset of javascript which adds Static Typing.
- TypeScript is transpiled into JavaScript using a compiler..

(config by tsconfig.json file)


# Simple Type:
Explicit type:   let firstName: string = "Kevin"; 
Implicit type:   let firstName = "Kevin";

if  firstName = 33;  // return error


# Special Type: 
- any, unknown, 

let v: any = true;
v = "Kevin";    // no Error
Math.round(v);  // no Error

let v: unknown = true;

- never
let v: never = true; // Error

- undefined & null
let y: undefined = undefined;
let z: null = null;

# Array
const names: string[] = [];
names.push("kevin");  
names.push(3);  // Error

const names: readonly string[] = ["kevin"];
names.push("Jack");   // Error

const numbers = [1,2,3];
numbers.push(4);
numbers.push("2");  // Error
let head: number = numbers[0];

# Tuples(typed arrays)
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Kevin'];

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'kevin'];
ourTuple.push("stone");  // [5, false, 'kevin', 'stone']

So.. using readonly

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'Kevin'];
ourReadonlyTuple.push('stone'); // error


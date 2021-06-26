// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More comples types
let hobbies: string[];
hobbies = ["Sports", "cooking"];

// Type alias
type Person =
    {
        name: string;
        age: number;
    };
let person: Person;
    
person =
{
    name: "Max",
    age: 32
}

let people: Person[];

// Type inference
// Union type
let course: string | number = "React - The Complete Guide";
course = 12341;

// Functions and types
function add(a: number, b: number)
{
    return a + b;
}

function print(value: any)
{
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T)
{
    const newArray = [value, ...array];

    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// Classes and typescript
class Student
{
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    )
    {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
    }

    enroll(courseName: string)
    {
        this.courses.push(courseName);
    }

    listCourses()
    {
        return this.courses.slice();
    }
}

const student = new Student("Dice", "Hashimoto", 40, ["Angular"]);
student.enroll("React");
// student.listCourses();

// Interfaces
interface Human
{
    firstName: string;
    age: number;

    greet: () => void;
}

let dice: Human;
dice =
{
    firstName: "Dice",
    age: 32,
    greet() {
        console.log("Hello!");
    }
};

class Instructor implements Human
{
    firstName: string;
    age: number;
    greet()
    {
        console.log("Hello!!!");
    }
}
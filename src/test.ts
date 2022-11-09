//let isOpen = true;
//
//isOpen = false;
//
//let isOpenArray: boolen[] = [false];
//
//
//
//function createUser(username: string, age?: number) {
//    return  {
//        username,
//        age
//    };
//}
//
//const ivan = createUser('Ivan', 12);

function id<T>(item: T) : T{
    return item;
}

interface IMyDto {
    prop: string,
    prop1: number
}

//let num = id<{prop: string; prop1: number }>({prop: '1', prop1: 1}); case without interface

type MyDtoOrNumnber = IMyDto | number;
type BooleanArray = boolean[]; // ili na dolnia   red
type BoolenArray = Array<boolean>

//let num = id<IMyDto | number>({prop: '1', prop1: 1}); това кагото го няма type MyDtoOrNumnber

let num = id<MyDtoOrNumnber>({prop:'1', prop1:1});

class MyClass {
    constructor (public name:string, private  age: number) { }
}

const ivan = new MyClass ('Ivan', 20);
//(ivan as any ).age = 1000; така прескачаме или пренабрегваме private
//(ivan as unknown as {test: {best:'123' }}).test.best = 'asdas'; омазване


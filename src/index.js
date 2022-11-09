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
function id(item) {
    return item;
}
//let num = id<IMyDto | number>({prop: '1', prop1: 1}); това кагото го няма type MyDtoOrNumnber
var num = id({ prop: '1', prop1: 1 });
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return MyClass;
}());
var ivan = new MyClass('Ivan', 20);
//(ivan as any ).age = 1000; така прескачаме или пренабрегваме private
//(ivan as unknown as {test: {best:'123' }}).test.best = 'asdas'; омазване

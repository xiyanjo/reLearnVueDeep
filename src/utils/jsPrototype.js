function protoJs() {
  let aa = {
    name: "aa",
  };
  function Animal(name) {
    this.name = name;
    this.age = 18;
  }

  let cat = new Animal("cat");
  console.log("proto", aa, Animal, cat);
}
function bindL() {
  function creatTeam(age) {
    console.log(this.name, age);
  }
  var fn = creatTeam.bind({ name: "st" }, 18);
  console.log(fn);
  fn(19);
}
function jsPrototype() {
  // bindL();
  // protoJs();
}
export { jsPrototype };

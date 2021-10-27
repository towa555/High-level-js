// ==================================

class Group {
  constructor(members) {
    this.members = members;
  }

  add(value) {
    if (this.has(value)) return this;
    return new Group(this.members.concat([value]));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new Group(this.members.filter(m => m !== value));
  }

  has(value) {
    return this.members.includes(value);
  }
}

Group.empty = new Group([]);

let a = Group.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
let xyz = Group.empty.add('x').add('y').add('z');
let efg = Group.empty.add('e').add('f').add('g');
let xx = xyz.delete("y")
let zz = a.has("a")
console.log(efg,xyz);
console.log(a)
console.log(ab)
console.log(b)
console.log(xx)
console.log(zz)





// =====================================
class Vector {
  constructor(x,y) {
    this.x = x;
    this.y = y;  
    length = Math.sqrt(this.x * this.x + this.y * this.y);
  }
 plus(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  };
 minus(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  };
  get length() {
   return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));

console.log(new Vector(1, 2).minus(new Vector(2, 3)));

console.log(new Vector(3, 4).length);



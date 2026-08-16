let productPrice: number = 100;
console.log(productPrice);

let productName: string = "Iphone 17 pro max";
console.log(productName);

let isLoggedIn: boolean = true;
console.log(isLoggedIn);

let userName: undefined | string = undefined;
console.log(userName);

userName = "Fahim";
console.log(userName);

let user: null | string = null;
console.log(user);

let l: Number[] = [10, 20, 30, 40];
console.log(l);
l.push(99);
console.log(l);

let userList: string[] = ["Fahim", "Shahriar"];
console.log(userList);

let m: any[] = [10, 20, "fahim"];
console.log(m);

let demo: [Number, string] = [10, "fahim"];
console.log(demo);
let color: readonly String[] = ["red", "blue"];
console.log(color);

let userObj: { name: string; age: Number } = {
  name: "fahim",
  age: 25,
};
console.log(userObj);

let userAddress: {
  name: string;
  email: string;
  address: {
    pinCode: number;
    city: string;
  };
} = {
  name: "Fahim",
  email: "fahim@test.com",
  address: {
    pinCode: 1200,
    city: "Dhaka",
  },
};
console.log(userAddress);

type userobj = {
  name: string;
  age: number;
};

let userListNew: [] = [];

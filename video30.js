const Books=[
    {title:'book one',genre:'Fiction',publish:1987,edition:2010},
    {title:'book two',genre:'history',publish:1983,edition:2000},
    {title:'book three',genre:'science',publish:1387,edition:2050},
    {title:'book four',genre:'Fiction',publish:1937,edition:2010},
    {title:'book five',genre:'Non-Fiction',publish:1337,edition:2040}
];
let userBook=Books.filter((bk)=>bk.genre==='Fiction')
//console.log(userBook);
 userBook=Books.filter((bk)=>{ return bk.publish>=1800})
 //console.log(userBook);
 userBook=Books.filter((bk)=>{ return bk.publish>=1800 && bk.genre=='Fiction'})
// console.log(userBook);


// reduce keyword use

const shoppingCart=[
    {itemName:"js course",
    price:2999},
    {itemName:"py course",
    price:9999},
    {itemName:"cpp course",
    price:6999},
    {itemName:"dsa course",
    price:21999},
]

const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice);

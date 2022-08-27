const user = { name: "ismail", id: 353, job: 'developer' };
const stringfy = JSON.stringify(user);
// console.log(user);
// console.log(stringfy);
const shop ={
    name: 'liberty medico',
    address: {
        street: 'kumira',
        upzila: 'sitakunda',
        zila: 'ctg',
        country: 'BD'
    },
    products: ['human medicine', 'vetnary medicien', 'vaccine', 'nebuzilation facility'],
    isOpen: true,
    isNew: false,
    revinew: 2342354545
}
console.log(shop);
//Converting JSON string!
const shopStringfy = JSON.stringify(shop);
console.log(shopStringfy);
//string to convert orginial object
const shopObj = JSON.parse(shopStringfy);
console.log(shopObj);
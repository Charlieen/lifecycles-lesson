

const myPromise = new Promise((resolve,reject) => {
    if(true){
        setTimeout(()=>{
            resolve('I have succeeded');
        },5000);
    }else{
        reject('I have failed');
    }
  
});

myPromise
.then(v=>v+' congradulations!')
.then(value => console.log(value))
.catch(error=>console.log(error));
;


/**             Memory Bank
 *  string       1234567890
 *  boolean      true,false
 * <null>           </null>
 *  undefined      undefined
 * number;  
 * symbol       every string or number;
 * 
 * Anything that's not a  primitive type so not any of these six types is called an object and an  object;
 * 
 */

 const o1= {id:1};
 const o2= {id:2};
 const o3= {id:3};

 console.log(o1===o2) ; //false;

 const arr1 = [o1,o2,o3];

 console.log(arr1.includes(o1)); //true;

 console.log( arr1.find(x=> x.id ===1));
 console.log(arr1.find(x=> x['id'] ===2));

 const myArray = [1,2,3,4,5,7,8];

 console.log(myArray.find(x=>x>4)); // return 5;

 const aa=[1,2,3,4,5,6];

 aa.reduce((acc,x)=>{
     const temp = acc * acc*x;
      console.log(temp);
     return temp;   
 },1);

 // Memoization:

function addTo80(n){
    console.log('long time');
    return n + 80;
};

let cache = {};

function memoizedAddTo80(n) {
    if( n in cache){
        console.log('yes, cache is success!');
        return cache[n];
       // return cache[`${n}`];
    }else {
        const temp = n+ 'AAAA';
        cache[n]= temp;
       // cache = {...cache,[`${n}`]:temp};
        return temp;
    }
}
 
const arr2=[1,2,3,4,2,3];

const arr3=['a','b','c','d','e'];

const arr4=[{a:'A'},{a:'B'},{a:'C'}];

const ValTo80 = arr3.map(x=> memoizedAddTo80(x));
console.log(ValTo80);
console.log(cache);

//----

const multiply = (a,b) => a*b; 

const multiply3 = a => 3*a;

console.log(multiply(3,5));
console.log(multiply3(5));

const curriedMultiply = a => b => a*b;

const c10 = curriedMultiply(10);
console.log(c10(5));
console.log(curriedMultiply(100)(2.2));
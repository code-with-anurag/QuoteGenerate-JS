let advice123=document.getElementById('advice123');
let para1=document.getElementById('para1');
let para2=document.getElementById('para2');
let button=document.querySelector('button');

 const array1=["The future belongs to those who believe in the beauty of their dreams",
    "That which does not kill us makes us stronger" ,
    "If you are going through hell, keep going" ,
    "It is my belief… that the truth is generally preferable to lies" ,
    "All our dreams can come true, if we have the courage to pursue them",
    "To err is human; to forgive, divine" ,
    "Two roads diverged in a wood, and I, I took the one less traveled by, and that has made all the difference",
    "The only thing we have to fear is fear itself" 
];

 const array2=["Eleanor Roosevelt","Friedrich Nietzsche","Winston Churchill",
     "J.K.Rowling","Walt Disney","Alexander Pope ","Robert Frost ","Franklin D. "
 ];

 const array3=["123abdfkd","234dflshr","345dflofe","456dwzxfg","654qjrxaj","456thfvji","867nmazxr","346dfghnc"];

const array=['<i class="dice fa-solid fa-dice-one"></i>',
    '<i class="dice fa-solid fa-dice-two"></i>',
    '<i class="dice fa-solid fa-dice-three"></i>',
    '<i class="dice fa-solid fa-dice-four"></i>',
    '<i class="dice fa-solid fa-dice-five"></i>',
    '<i class="dice fa-solid fa-dice-six"></i>'
]
let myFunction= async()=>{

const random1=Math.floor(Math.random()*8);
  
para1.innerText=array1[random1];
para2.innerText="By -"+array2[random1] ;
advice123.innerText="Advice # "+ array3[random1];

const random=Math.floor(Math.random()*6);
button.innerHTML=array[random];
button.style.backgroundColor='bisque';

button.style.transform='rotate(360deg)';

setTimeout(()=>{
   button.style.transform='rotate(0deg)';
   button.style.transition='all ease-in-out 0.2s'
},100)

}
button.addEventListener('click',myFunction);

myFunction();




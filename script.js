// let arr = ["ssss", "ցցցցց"];


// let som = arr.filter((v)=>{
//   return v.charCodeAt()> 1339 &  v.charCodeAt()> 1417
// })

// let inpVal = document.querySelector('.input')
// let butt = document.querySelector('button').addEventListener('click',()=>{
//                  console.log(typeof inpVal.value)
//       if(isNaN(inpVal.value)){
//              alert(null)
//                  inpVal.value=""
//              }elsealert(isNaN(inpVal.value) ** 2), (inpVal.value = "");
       
// })

// ==========================================

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.entries(student).length);
delete student.rollno
console.log(student);


// 4. Напишите javaScript-программу для отображения статуса чтения (т.е. отображаемого имени книги, имени автора и статуса чтения) следующих книг. Перейти в редактор

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   library.map((v)=>{
       let som = ''
       if(v.readingStatus == true){
           som = "kardacvac"
       }else{
           som='chkardacvac'
       }
       let div =document.createElement('div')

    div.innerHTML = `<h2>${v.author}</h2><p>${som}</p>`
    return document.body.prepend(div);
   }
   
 )
//  =============================================================
class Math {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  v() {
    return 2 * this.height * this.width;
  }
  area() {
   return this.height * this.width;
  }
  perimetr() {
   return 2*(this.height * this.width);
  }
}
class Cilindr extends Math {
  constructor(name, height, width) {
    super(height, width);
    this.name = name;
   
  }
}

let newcilind = new Cilindr('ciliindr1', 10,20)
console.log(newcilind.v());
// ======================================================
let arr = [6, 4, 0, 3, -2, 1];
console.log(arr.sort((a,b)=>a-b));

// 7---------------------------


// setInterval(()=>{

//      let jam = new Date();    
//      let div = document.createElement("div");
//      div.innerHTML = `'${jam.getHours()}:${jam.getMinutes()}:${jam.getSeconds()}'`;
//      return document.body.prepend(div);

// },1000)

// ============================


let inpVal = document.querySelector(".input2").addEventListener("onchange", () => {
    return (this.value = 1 + 2);
});

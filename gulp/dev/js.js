window.onload = ()=>{ 
    // 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
// Дані виводятьс в стилізований ліст,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино бути данні які введено і час створення в форматі день, номер місяця, рік.
const noteArr = [];

button = document.querySelector('.submit')

button.onclick = function(){
    newInput = document.querySelector('.input').value;
    notePad = document.querySelector('.list');
    noteArr.push(newInput);
    console.log(noteArr);
    let task = document.createElement('li');
    task.setAttribute('style','display:flex;border:2px solid black;justify-content:space-between;margin-bottom:5px');
    let li = document.createElement('span');
    
    for(i=0; i<noteArr.length; i++){
    li.innerHTML= noteArr[i];
    task.appendChild(li);
    }
    let dateToday = new Date()
    let date = document.createElement('span');
    date.innerHTML = `${dateToday.getFullYear()} ${dateToday.getMonth()+1} ${dateToday.getDate()}`

    task.appendChild(date);
    notePad.appendChild(task)
    if(noteArr.length > 5){
        notePad.removeChild(notePad.firstElementChild);
        noteArr.splice(1, 1);
    }
    document.querySelector('.input').value=null;
}


// 2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення alt для зображення, стилізувати задовільно
let newElement = document.createElement('div');
let newDiv = new DocumentFragment();

    let images = [
        {
            imgPath:'img/image.png',
            alt:'png image',
            href: 'https://prog.academy/javascript'
        },
        {
            imgPath:'img/image1.png',
            alt:'png image',
            href:'https://prog.academy/fullstack'
        }
    ]
    for (const iterator of images) {
        const {imgPath, alt, href} = iterator;
        div = document.createElement('div')
        div.innerHTML = `<a href="${href}" target='blank'><img src="${imgPath}" alt="${alt}"></a>`;
        newDiv.appendChild(div)
        newElement.appendChild(newDiv)
    }
    document.body.appendChild(newElement)


// 3) Створити поле (без кораблів) для морського бою, літери, цифри і стилі для поля задати за допомогою js
let xArr = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'i', 'J'];
let field = document.querySelector('.field')
field.setAttribute('style','width:440px;height:440px;border:1px solid black')

function canvas(arr,field,count){
    for(t=0; t<=count; t++){
        let xBand = document.createElement('div');
        xBand.setAttribute('style','display:flex;')
        for(const i of arr){
            cell = document.createElement('div');
            cell.setAttribute('style','display:flex;justify-content:center;align-items:center;width:40px;height:40px;border:1px solid black')
            if(t == 0){
                cell.innerHTML = i;
            }
            if(t > 0 && i == ''){
                cell.innerHTML = t;
            }
            xBand.appendChild(cell);
        }
        field.appendChild(xBand)
    }
    document.body.appendChild(field);
}
canvas(xArr, field, 10)
}
var a = +prompt('введите первое число');
var b = +prompt('введите второе чистло');
var c = +prompt('введите третье число');


if (a<b && b<c && a<c) {
    alert('Среднее число ' + b);
}else if (a<c && b>c && b>a) {
    alert('Среднее число ' + c);
}else if (a>b && c>a && c>b) {
    alert('Среднее число ' + a)
}else if (c>b && a>c && a>b) {
    alert('Среднее число ' + c);
}else if (a>c && b>a && b>c) {
    alert('Среднее число ' + a);
}else if (b>c && a>b && a>c) {
    alert('Среднее число ' + b)
}else (a==b || a==c || b==c); {
    alert('Учи матчасть');
}

/*     Ошибки  */

// if (a>b && !isNaN(a) && !isNaN(b)) {
//     alert(a + ' больше чем ' + b);
// }else if (a<b && !isNaN(a) && !isNaN(b)) {
//     alert(a + ' меньше чем ' + b);
// }else {
//     alert('Учи матчасть');
// }


// const x = (a<b<c);
// const xx = (a<c<b);
// const y = (b<a<c);
// const yy = (b<c<a);
// const z = (c<a<b);
// const zz = (c<b<a);

// if (x) {
//     alert('Среднее число ' + b);
// }else if(xx) {
//     alert('Среднее число ' + c);
// }else if(y) {
//     alert('Среднее число ' + a)
// }else {
//     alert('Учи матчасть');
// }





// // var d = (a<b);
// // var e = (a>b);
// // var f = (a<c);
// // var g = (a>c);
// // var h = (b<a);
// // var i = (b>a);
// // var j = (b<c);
// // var k = (b<c);
// // var l = (c<a);
// // var m = (c>a);
// // var n = (c<b);
// // var o = (c>b);

// // if (d,f,k) {
// //     alert('Среднее число ' + b);
// // }else if (m,j,n) {
// //     alert('Среднее число ' + c);
// // }else if (f && e && n) {
// //     alert('Среднее число ' + a);
// // }




// // var d = (a<b);
// // var e = (a<c);
// // var f = (b<c);
// // var g = (b<a);
// // var h = (c<a);
// // var i = (c<b);
// // var j = (d,e,f);
// // var k = (e,i,d);
// // var l = (e,f,g);
// // var m = (f,g,h);
// // var n = (h,i,d);
// // var o = (i,h,g);

// // if (j==true) {
// //     alert('Среднее число ' + b);
// // }else if (k==true) {
// //     alert('Среднее число ' + c);
// // }else if (l==true) {
// //     alert('Среднее число ' + a);
// // }





// if (a<b<c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     alert('Среднее число ' + a<b<c);
// }else if(a<c<b && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     alert('Среднее число ' + c);
// }else if(b<a<c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     alert('Среднее число ' + a);
// }else if(b<c<a && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     alert('Среднее число ' + c);
// }else if(c<a<b && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     alert('Среднее число ' + a);
// }else if(c<b<a && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     alert('Среднее число ' + b);
// }else if (a==b || a==c || b==c); {
//     alert('Учи матчасть');
// }
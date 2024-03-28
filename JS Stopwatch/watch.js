let btn1 = document.getElementById('start');
let btn2 = document.getElementById('stop');
let btn3 = document.createElement('button');
btn3.innerText = 'Reset';
btn3.setAttribute('id', 'reset');
document.getElementById('buttoncontainer').appendChild(btn3);

let sec = document.createElement('p');
sec.setAttribute('id', 'second');
sec.textContent = 0;

let min_space = document.createElement('p');
min_space.setAttribute('id', 'minute');
min_space.style.display = 'none';

let hour_space = document.createElement('p');
hour_space.setAttribute('id', 'hour');
hour_space.style.display = 'none';

document.getElementById('timerdisplay').append(hour_space, min_space, sec);

let id1 = 0;
let count = 0;
btn1.addEventListener('click', function () {


    if (id1 == 0) {
        id1 = setInterval(function () {
            count++;

            const hours = Math.floor(count / 3600);
            let a = count % 3600;
            const mins = Math.floor(a / 60);
            let b = a % 60;
            const secs = Math.floor(b);

            document.getElementById('second').textContent = secs+'s';
            document.getElementById('minute').textContent = mins+'m';
            document.getElementById('hour').textContent = hours+'h';

            if (count > 60) {
                min_space.style.display = '';
            }

            if (count > 3600) {
                hour_space.style.display = '';
            }
        },1000);
    }
});

btn2.addEventListener('click', function () {

    clearInterval(id1);
    id1 = 0;
});

btn3.addEventListener('click', () => {

    count = 0;
    document.getElementById('hour').textContent = count;
    document.getElementById('minute').textContent = count;
    document.getElementById('second').textContent = count;
    clearInterval(id1);
    id1 =0;
    
});
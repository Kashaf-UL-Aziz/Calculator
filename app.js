let string = "";
let btn = document.querySelectorAll(".btn_Row");

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.getElementById('display').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.getElementById('display').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById('display').value = string;
        }
    })
})
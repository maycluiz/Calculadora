function insert(num) {
   document.form.display.value = document.form.display.value + num
}

function clean() {
    document.form.display.value = '';
}

function equal() {
    var exp = document.form.display.value
    if(exp) {
        document.form.display.value = eval(exp)
    }
}
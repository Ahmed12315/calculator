var h1_html = document.getElementById("h1")
var display_html = document.getElementById("display")


function calculator_num(num) {
    display_html.value += num 
}
function calculator_func(func) {
    if(func == 'AC') {
        var allClear = func
        display_html.value = ""
    }
    if(func == 'Del'){
        display_html.value = display_html.value.toString().slice(0,-1)
    }
}
function calculator_sign(sign) {
    display_html.value += sign 
    
}
function calculator_eva(eva) {
    display_html.value = eval(display_html.value)

}
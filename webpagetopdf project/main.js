const btn = document.getElementById("downloaddatabtn")
const data = document.getElementById("data")
function convert(){
    // from cdn html2pdf function 
    html2pdf(data)
    save()
}


btn.onclick = function() {convert()}
let qrdiv = select('qrcode')
let qrlink = select('qr_input')
let qrbutton = select('qr_button')

qrbutton.addEventListener('click',generateQR)

var qrcode = new QRCode(qrdiv,{
    text: "",
	width: 170,
	height: 170,
	colorDark : "#203A43",
	colorLight : "#c6ccce",
	correctLevel : QRCode.CorrectLevel.H
})

function generateQR(){
    qrcode.makeCode(qrlink.value)
}

function select(valor){
    return document.getElementById(valor)
}
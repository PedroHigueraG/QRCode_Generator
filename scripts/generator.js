let qrdiv = select('qrcode')
let qrlink = select('qr_input')
let qrbutton = select('qr_button')
let qrdownload = select('qr_download')

qrbutton.addEventListener('click',generateQR)
qrdownload.addEventListener('click',downloadQR)

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

function downloadQR(){
	html2canvas(document.querySelector("#qrcode")).then(canvas => {
		let enlace = document.createElement('a');
		enlace.download = "qrcode.png";
		// Convertir la imagen a Base64
		enlace.href = canvas.toDataURL();
		// Hacer click en él
		enlace.click();
	});
}

function select(valor){
    return document.getElementById(valor)
}
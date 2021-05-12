let qrdiv = select('qrcode')
let qrlink = select('qr_input')
let qrbutton = select('qr_button')
let qrdownload = select('qr_download')
let urlmode = select('url_mode')
let wifimode = select('wifi_mode')
let wpmode = select('wp_mode')
let name_network = select('name_network')
let security_network = select('security_network')
let pass_network = select('pass_network')
let indicativo = select('indicativo')
let number_phone = select('number_phone')

var mode =1;

qrbutton.addEventListener('click',generateQR)
qrdownload.addEventListener('click',downloadQR)
urlmode.addEventListener('click',urlMode)
wifimode.addEventListener('click',wifiMode)
wpmode.addEventListener('click',wpMode)

var qrcode = new QRCode(qrdiv,{
    text: "",
	width: 170,
	height: 170,
	colorDark : "#203A43",
	colorLight : "#c6ccce",
	correctLevel : QRCode.CorrectLevel.H
})

function generateQR(){
	if(mode==1){
    qrcode.makeCode(qrlink.value)
	}else if(mode==2){
		let wifiURL ='WIFI:S:'+name_network.value+';T:'+security_network.value+';P:'+pass_network.value+';H:True;;'
		qrcode.makeCode(wifiURL)
	}else{
		qrcode.makeCode('https://wa.me/'+indicativo.value+number_phone.value)
	}
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

function urlMode(){
	document.getElementById('url_p').style.display='block'
	qrlink.style.display='block'
	document.getElementById('wifi_name').style.display='none'
	document.getElementById('wifi_pass').style.display='none'
	document.getElementById('wifi_sec').style.display='none'
	document.getElementById('name_network').style.display='none'
	document.getElementById('pass_network').style.display='none'
	document.getElementById('security_network').style.display='none'
	document.getElementById('wp_p').style.display='none'
	document.getElementById('number_div').style.display='none'
	mode=1
}
function wifiMode(){
	document.getElementById('wifi_name').style.display='block'
	document.getElementById('wifi_pass').style.display='block'
	document.getElementById('wifi_sec').style.display='block'
	document.getElementById('name_network').style.display='block'
	document.getElementById('pass_network').style.display='block'
	document.getElementById('security_network').style.display='block'
	document.getElementById('url_p').style.display='none'
	document.getElementById('wp_p').style.display='none'
	document.getElementById('number_div').style.display='none'
	qrlink.style.display='none'
	mode=2
}
function wpMode(){
	document.getElementById('number_div').style.display='block'
	document.getElementById('wp_p').style.display='block'
	document.getElementById('wifi_name').style.display='none'
	document.getElementById('wifi_pass').style.display='none'
	document.getElementById('wifi_sec').style.display='none'
	document.getElementById('name_network').style.display='none'
	document.getElementById('pass_network').style.display='none'
	document.getElementById('security_network').style.display='none'
	document.getElementById('url_p').style.display='none'
	qrlink.style.display='none'
	mode=3
}

function select(valor){
    return document.getElementById(valor)
}
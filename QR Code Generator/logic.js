let qr_codeBox = document.getElementById('qr-codeBox');
let qrimg = document.getElementById('qrimg');
let qrtext = document.getElementById('qrtext');
let generate = document.getElementById('btn');

function generateQRCode() {
    let qr_text = qrtext.value;
    let qr_code_url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_text}`;
    qrimg.src = qr_code_url;
}
generate.addEventListener('click', () => {
    generateQRCode();
});
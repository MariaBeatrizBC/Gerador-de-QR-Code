const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    //Se não for digitado nada, apresenta erro
    if(!qrCodeInputValue) {
        window.alert("Erro! É preciso digitar algo antes de gerar.");

    } else {
        //Mensagem durante a geração do código
        qrCodeBtn.innerText = "Gerando código...";

        //API pra gerar o código QR Code
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

        //Apresentar o QR Code somente após a imagem estiver carregada
        qrCodeImg.addEventListener("load", () => {
            container.classList.add("active");
            //Depois que gerar o QR Code, muda a mensagem do botão
            qrCodeBtn.innerText = "Código criado!";
        });
    }

    
}

//Utilziar o botão pra chamar a função
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

//Utilizar o Enter pra chamar a função
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }

})

//Limpar QR Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})
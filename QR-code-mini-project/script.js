"use strict";

const btnGenerateQR = document.querySelector(".btn__generate-qr");
const inputQrCode = document.querySelector("input");
const qrCodeContaienr = document.querySelector(".qr-code");
const qrImage = document.querySelector(".qr-img");
//////////////////////////////////

btnGenerateQR.addEventListener("click", e => {
    e.preventDefault();

    const text = inputQrCode.value;
    if (!text) {
        return alert("Please enter a text or a web address");
    }

    qrImage.src = `QR API URL ${text}`;
    btnGenerateQR.textContent = "Generating...";

    qrImage.addEventListener("load", () => {
        qrCodeContaienr.classList.remove("hidden");
        btnGenerateQR.textContent = "Generate QR Code";
    });
});

inputQrCode.addEventListener("keyup", () => {
    if (inputQrCode.value) return;

    qrCodeContaienr.classList.add("hidden");
});

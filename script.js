let qr;

function generateQRCode() {
  const qrText = document.getElementById("qr-text").value.trim();
  const qrSize = parseInt(document.getElementById("size").value);
  const qrBody = document.getElementById("qr-body");

  if (!qrText) {
    alert("Please enter some text or URL.");
    return;
  }

  // Clear previous QR code
  qrBody.innerHTML = "";

  // Generate new QR code
  qr = new QRCode(qrBody, {
    text: qrText,
    width: qrSize,
    height: qrSize,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function downloadQRCode() {
  if (!qr) {
    alert("Generate the QR code first!");
    return;
  }

  // Find the generated <img> inside qrBody
  const img = document.querySelector("#qr-body img");

  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
  } else {
    // In case QR is rendered as canvas
    const canvas = document.querySelector("#qr-body canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    }
  }
}

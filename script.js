function verifyNumber() {
  const input = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");
  const downloadBtn = document.getElementById("downloadBtn");
  resultDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (input === "88055088") {
    const img = document.createElement("img");
    img.src = "IMG-20250707-WA0009.jpg";
    img.alt = "Winner Image";
    img.style.marginTop = "20px";
    img.style.maxWidth = "90%";
    resultDiv.appendChild(img);
    downloadBtn.style.display = "inline-block";
  } else {
    resultDiv.innerHTML = "<p>Authentication failed</p>";
  }
}
function downloadImage() {
  const link = document.createElement('a');
  link.href = "https://fedex-w.github.io/winner117/";
  link.download = "IMG-20250707-WA0009.jpg";
  link.click();
}

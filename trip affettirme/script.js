const yesil = document.getElementById("yesil");
const kirmizi = document.getElementById("kirmizi");
const mesaj = document.querySelector(".baslik");
let hayirTik = 0;

const hayirMesajlari = [
  "Gerçekten barışmak istemediğine emin misin?",
  "Özür dilerim... affet lütfen.",
  "Cidden çok üzgünüm, özür dilerim...",
  "Bu sefer cidden affetmeyecek misin?..",
  "Ama...",
  "Cidden mi..."
];

function finalEkran() {
  const ekran = document.createElement("div");
  ekran.classList.add("fullscreen");
  ekran.innerHTML = `
    <div>Evet diyeceğini biliyordum, teşekkür ederim ❤️</div>
    <img src="https://i.giphy.com/MDJ9IbxxvDUQM.webp" />
  `;
  document.body.innerHTML = "";
  document.body.appendChild(ekran);
}

kirmizi.addEventListener("click", () => {
  if (hayirTik < hayirMesajlari.length) {
    kirmizi.innerText = hayirMesajlari[hayirTik];
    hayirTik++;

    // Yeşil buton büyüsün
    const yesilFont = parseFloat(getComputedStyle(yesil).fontSize);
    yesil.style.fontSize = (yesilFont + 115) + "px";

    // Kırmızı buton küçülsün ve aşağı insin
    const redFont = parseFloat(getComputedStyle(kirmizi).fontSize);
    kirmizi.style.fontSize = (redFont - 2) + "px";
    const currentMargin = parseFloat(kirmizi.style.marginTop || "0");
    kirmizi.style.marginTop = (currentMargin + 20) + "px";
  } else {
    // Yeşil buton ekranı kaplasın, kırmızı kalabilir
    yesil.classList.add("fullscreen-button");
  }
});

// 🌟 Değişiklik burada: her zaman final ekranına geç
yesil.addEventListener("click", () => {
  finalEkran();
});

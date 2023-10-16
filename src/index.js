const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navElement = document.querySelector("nav");
const anchorElements = navElement.querySelectorAll("a");
for (let i = 0; i < anchorElements.length; i++) {
  anchorElements[i].classList.add("italic");
}

const navbarText = [
  "Servisler",
  "Ürünler",
  "Vizyon",
  "Özellikler",
  "Hakkımızda",
  "İletişim",
];

for (let i = 0; i < navbarText.length; i++) {
  document.getElementsByClassName("italic")[i].textContent = navbarText[i];
}

document
  .getElementById("logo-img")
  .setAttribute("src", "http://localhost:9000/img/logo.png");

const anaBaslik = document.getElementsByClassName("cta-text")[0];
anaBaslik.getElementsByTagName("h1")[0].textContent = "Bu DOM Mükemmel";
anaBaslik.getElementsByTagName("button")[0].textContent = "Başlayın";

document
  .getElementById("cta-img")
  .setAttribute("src", "http://localhost:9000/img/cta.png");

const basliklar = ["Özellikler", "Hakkında", "Servisler", "Ürünler", "Vizyon"];
const paragText = [
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
];

const yanBasliklar = document.getElementsByClassName("text-content");
const hashDort = document.getElementsByTagName("h4");
const hashText = document.getElementsByTagName("p");

for (let i = 0; i < basliklar.length; i++) {
  hashDort[i].textContent = basliklar[i];
  hashText[i].textContent = paragText[i];
}

document
  .getElementById("middle-img")
  .setAttribute("src", "http://localhost:9000/img/accent.png");

document
  .getElementsByClassName("contact")[0]
  .getElementsByTagName("h4")[0].textContent = "İletişim";

document
  .getElementsByClassName("contact")[0]
  .getElementsByTagName("p")[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";

document
  .getElementsByClassName("contact")[0]
  .getElementsByTagName("p")[1].textContent = "+90 (123) 456-7899";

document
  .getElementsByClassName("contact")[0]
  .getElementsByTagName("p")[2].textContent = "satis@birsirketsitesi.com.tr";

document
  .getElementsByTagName("footer")[0]
  .getElementsByTagName("a")[0]
  .setAttribute("class", "bold");

document
  .getElementsByTagName("footer")[0]
  .getElementsByTagName("a")[0].textContent =
  "Copyright Bir Şirket Sitesi 2022";

const data = {
    amazon: {
        name: "Amazon",
        img: "./img/AMAZON.png",
        desc: "ผู้นำด้าน E-commerce และ AWS",
        stock: "https://www.tradingview.com/symbols/NASDAQ-AMZN/"
    },
    microsoft: {
        name: "Microsoft",
        img: "./img/MICROSOFT.png",
        desc: "ผู้พัฒนา Windows และ Azure",
        stock: "https://www.tradingview.com/symbols/NASDAQ-MSFT/"
    },
    google: {
        name: "Google",
        img: "./img/GOOGLE.png",
        desc: "บริษัทแม่คือ Alphabet เจ้าของ Search Engine",
        stock: "https://www.tradingview.com/symbols/NASDAQ-GOOGL/"
    },
    meta: {
        name: "Meta",
        img: "./img/META.png",
        desc: "เจ้าของ Facebook และ Instagram",
        stock: "https://www.tradingview.com/symbols/NASDAQ-META/"
    }
};

function openOverlay(company) {
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("overlay-content");

    const item = data[company];

    content.innerHTML = `
        <img src="${item.img}">
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
        <a href="${item.stock}" target="_blank">
            <button>ดูหุ้นแบบเรียลไทม์</button>
        </a>
        <br>
        <button onclick="closeOverlay()">ปิด</button>
    `;

    overlay.style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

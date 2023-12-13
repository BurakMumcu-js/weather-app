const addButtonToPage = () => {
    const button = document.createElement("button");
    button.innerText = "Hava Durumu";
    button.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "showWeatherPopup" });
    });

    document.body.appendChild(button);
};

addButtonToPage();
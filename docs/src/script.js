const heartIcon = document.querySelectorAll(".heart-icon");
const heartCount = document.getElementById("click-count");

let clickCount = 0;

heartIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    clickCount++;
    heartCount.textContent = clickCount;
  });
});

const callButton = document.querySelectorAll(".call-button");
const coinCount = document.getElementById("coin-count");
const callHistory = document.querySelector(".call-history");
let coinStatus = 100;

callButton.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".service-num").textContent;
    coinStatus -= 20;
    coinCount.textContent = coinStatus;
    if (coinStatus >= 20) {
      alert(`Calling the ${serviceName} on ${serviceNumber}`);
    } else {
      alert("You don't have enough coin.Need minimum 20 coin to call.");
    }
    const now = new Date();
    const callTime = now.toLocaleTimeString();
    const newCallEntry = document.createElement("div");
    newCallEntry.classList.add(
      "call-entry",
      "rounded-md",
      "bg-gray-100",
      "ml-3",
      "mr-3",
      "mt-2.5",
      "mb-1.5",
      "pl-4",
      "pr-4",
      "pb-2.5",
      "pt-2.5"
    );

    newCallEntry.innerHTML = `
     <p class="font-semibold text-xs">${serviceName}</p>
     <div class="flex justify-between items-center text-xs text-gray-600"> 
       <p>${serviceNumber}</p>
       <p>${callTime}</p> 
     </div>
    `;
    callHistory.appendChild(newCallEntry);
  });
});

const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  const callEntries = callHistory.querySelectorAll(".call-entry");
  callEntries.forEach((entry) => entry.remove());
});

const copyButton = document.querySelectorAll(".copy-button");
const copyCountSpan = document.getElementById("copy-count");
let copyCount = 0;

copyButton.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceNumber = card.querySelector(".service-num").textContent;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      copyCount++;
      copyCountSpan.textContent = copyCount;

      alert(`Copied ${serviceNumber} to clipboard!`);
    });
  });
});

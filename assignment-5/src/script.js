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
const coinCount = document.getElementById('coin-count')

callButton.forEach(button => {
    button.addEventListener('click', () => {
       
    })
})

function enableDropdownMenu() {
  document
    .querySelector(".dropdown-menu-toggle")
    .addEventListener("click", () => {
      const dropdownMenu = document.querySelector(".foo-dropdown-menu");
      if (dropdownMenu.classList.contains("h-0")) {
        dropdownMenu.classList.remove("h-0");
      } else {
        dropdownMenu.classList.add("h-0");
      }
    });
}

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function enabled3dImage() {
  const totalImages = 151;
  const scrollLimit = 780;
  let currentPosition;
  const imageDisplay = document.querySelector(".image-3d");
  document.addEventListener("scroll", function(event) {
    currentPosition = document.documentElement.scrollTop;
    currentFrame = pad(
      Math.floor(totalImages * (currentPosition / scrollLimit)),
      4
    );
    imageDisplay.style.backgroundImage = `url('./3d/beauty_${currentFrame}.jpg')`;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  enableDropdownMenu();
  enabled3dImage();
});

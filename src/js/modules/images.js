const images = () => {
  const imgPopup = document.createElement("div"),
    bigImage = document.createElement("img"),
    workSection = document.querySelector(".works");

  imgPopup.classList.add("popup");
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  bigImage.classList.add("popup-bigImage");
  imgPopup.appendChild(bigImage);

  workSection.appendChild(imgPopup);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }

    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
    }
  });
};

export default images;

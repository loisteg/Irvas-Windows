import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(event, element, property) {
    element.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[property] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[property] = "Cold") : (state[property] = "Warm");
              element.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[property] = item.value;
            }
            break;
          case "SELECT":
            state[property] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;

// TODO =============== SIDEBAR ===============
const menuItems = document.querySelectorAll(".menu-item");

// * Remove active classes from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// TODO =============== MESSAGES ===============
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.getElementById("message-search");

// * Highlight messages card when icon message at sidebar is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// * Searching for messages
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
// * Search for messages
messageSearch.addEventListener("keyup", searchMessage);

// TODO =============== THEME/DISPLAY CUSTOMIZATION ===============
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// * Open customize theme modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
theme.addEventListener("click", openThemeModal);

// * Close customize theme modal
const closeThemeModal = (event) => {
  if (event.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);

// TODO =============== FONT SIZES ===============
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// * Remove active class from spans or font size selectors
const removeSizesSelectors = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  let changeFontSize;

  size.addEventListener("click", () => {
    removeSizesSelectors();
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      changeFontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      changeFontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      changeFontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      changeFontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      changeFontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-10rem");
      root.style.setProperty("--sticky-top-right", "-33rem");
    }

    // * Change font size of the root html element
    document.querySelector("html").style.fontSize = changeFontSize;
  });
});

// * Set default font size
if (!localStorage.getItem("fontSize")) {
  localStorage.setItem("fontSize", "font-size-2");
}
const savedSize = localStorage.getItem("fontSize");
document.querySelector(`.${savedSize}`).click();

// TODO =============== PRIMARY COLORS ===============
const colorPallate = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");

// * Remove active class from colors
const changeActiveColorClass = () => {
  colorPallate.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// * Change primary colors
colorPallate.forEach((color) => {
  let primaryHue;

  color.addEventListener("click", () => {
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// TODO =============== BACKGROUND COLORS ===============
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
var root = document.querySelector(":root");

// * Theme background values
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// * Change background color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

bg1.addEventListener("click", () => {
  // * Add active class
  bg1.classList.add("active");

  // * Remove active class from the other elements
  bg2.classList.remove("active");
  bg3.classList.remove("active");

  // * remove customized change from local storage
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // * Add active class
  bg2.classList.add("active");

  // * Remove active class from the other elements
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBG();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // * Add active class
  bg3.classList.add("active");

  // * Remove active class from the other elements
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBG();
});

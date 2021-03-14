const feedbackLink = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = document.querySelector(".close-button");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const userName = feedbackPopup.querySelector(".user-name");
const userEmail = feedbackPopup.querySelector(".user-email");
const userEmailText = feedbackPopup.querySelector(".user-email-text");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userEmailText.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("modal-error");

  if (!userName.value) {
    userName.style.border = "2px solid #e74246";
    userName.style.color = "#e74246"
  }
  if (!userEmail.value) {
    userEmail.style.border = "2px solid #e74246";
    userEmail.style.color = "#e74246";
  }
  if (!userEmailText.value) {
    userEmailText.style.border = "2px solid #e74246";
    userEmailText.style.color = "#e74246";
  }

  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

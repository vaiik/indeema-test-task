let onSubmit = document.querySelector("button"),
  container = document.querySelector(".container"),
  backdrop,
  modal,
  outParagh = document.querySelector("#quote"),
  quote = "Реалізація другого завдання.",
  editQuote = "";

function updateParagraph() {
  outParagh.textContent = quote;
}

function closeModal() {
  if (backdrop) {
    backdrop.remove();
  }
  if (modal) {
    modal.remove();
  }
}

updateParagraph();

onSubmit.addEventListener("click", function() {
  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  backdrop.addEventListener("click", closeModal);
  document.body.insertBefore(backdrop, container);
  backdrop.addEventListener("click", closeModal);

  modal = document.createElement("div");
  modal.classList.add("modal");

  let modalHeading = document.createElement("h1");
  modalHeading.textContent = "Відредагуйте заголовок.";
  modal.appendChild(modalHeading);

  let editText = document.createElement("div");
  editText.classList.add("modal-input");
  modal.appendChild(editText);

  let textEditArea = document.createElement("textarea");
  textEditArea.rows = "1";
  textEditArea.addEventListener("input", function() {
    editQuote = textEditArea.value;
  });
  textEditArea.value = quote;
  editText.appendChild(textEditArea);

  let modalDiv = document.createElement("div");
  modalDiv.classList.add("modal-actions");
  modal.appendChild(modalDiv);

  let cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.classList.add("btn-cancel");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", closeModal);
  modalDiv.appendChild(cancelBtn);

  let confirmBtn = document.createElement("button");
  confirmBtn.setAttribute("type", "button");
  confirmBtn.classList.add("btn-confirm");
  confirmBtn.textContent = "Confirm";
  confirmBtn.addEventListener("click", function() {
    closeModal();
    if (editQuote.trim().length > 0) {
      quote = editQuote;
      updateParagraph();
    }
  });

  modalDiv.appendChild(confirmBtn);
  document.body.insertBefore(modal, container);
  editQuote = quote;
});
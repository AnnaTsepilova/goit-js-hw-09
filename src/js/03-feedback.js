import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(saveFormInput, 500));
form.addEventListener("submit", onFormSubmit);

populateTextareaValue();

function saveFormInput(event) {
    event.preventDefault();

    const formData = {
        email: form.email.value,
        message: form.message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

}

function onFormSubmit(event) {
    event.preventDefault();

    const formData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (formData.email === "" || formData.message === "") {
        alert("Будь ласка, заповніть всі поля!");
    }

    event.currentTarget.reset();

    localStorage.removeItem("feedback-form-state");

    console.log(formData);
}

function populateTextareaValue() {

    const formData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (formData) {

        form.email.value = formData.email;
        form.message.value = formData.message;
    }
 
}






function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function submitForm() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");

  if (!validateEmail(email.value)) {
    email.classList.add("Error");

    return;
  }

  email.classList.remove("error");

  alert("Form submitted successfully!");
}
function setProgress(percent) {
  const circle = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = percent + "%";
}

// Initialize at 40%
setProgress(0);

function updateProgress() {
  let progress = 0;

  if (document.getElementById("name").value) progress += 33;
  if (validateEmail(document.getElementById("email").value)) progress += 34;
  if (document.getElementById("phone").value) progress += 33;

  setProgress(progress);
}

// Attach listeners
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", updateProgress);
});

function setProgress(percent) {
  const circle = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = percent + "%";
}

// Initialize at 40%
setProgress(0);

function updateProgress() {
  let progress = 0;

  if (document.getElementById("name").value) progress += 33;
  if (validateEmail(document.getElementById("email").value)) progress += 34;
  if (document.getElementById("phone").value) progress += 33;

  setProgress(progress);
}

// Attach listeners
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", updateProgress);
});

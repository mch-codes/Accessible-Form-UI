function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitForm() {
  const email = document.getElemdentById("email");
  const error = document.getElementById("emailError");

  if (!validateEmail(email.value)) {
    email.classList.add("error");
    error.textContent =
      "Please enter a valid email address (e.g., name@example.com)";
    return;
  }

  email.classList.remove("error");
  error.textContent = "";

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

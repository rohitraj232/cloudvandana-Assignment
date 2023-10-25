function submitForm() {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const firstTime = document.querySelector('input[name="firstTime"]:checked');
  const suggestion = document.querySelector('input[name="suggestion"]:checked');
  const textArea = document.getElementById("text_area").value;

  // Check if all required fields are filled
  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender &&
    profession &&
    email &&
    mobile
  ) {
    // Build and display the popup message
    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${
          gender ? gender.value : "Not specified"
        }</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Joining First Time:</strong> ${
          firstTime ? firstTime.value : "Not specified"
        }</p>
        <p><strong>Suggestion to Improve:</strong> ${
          suggestion ? suggestion.value : "Not specified"
        }</p>
        <p><strong>Additional Comments:</strong> ${textArea}</p>
    `;

    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
    document.getElementById("surveyForm").reset();
  } else {
    alert("Please fill out all required fields.");
  }
}

function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("country").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("text_area").value = "";
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  for (const radioButton of radioButtons) {
    radioButton.checked = false;
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

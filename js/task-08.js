const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
    
    // Checks if all form fields are typed

  if (email.value === "" || password.value === "") {
    return alert("All fields must be typed");
    };

    // Creates an object with inputed field values

  const user = {
    email: email.value,
    password: password.value,
  };

    console.log(user);
    
    // Resets form fields

  form.reset();
};

form.addEventListener("submit", handleSubmit);

//your JS code here. If required.
    function submitForm() {
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var email = document.getElementById("email").value;

      var result = "First Name: " + firstName + "\nLast Name: " + lastName + "\nPhone Number: " + phoneNumber + "\nEmail ID: " + email;

      alert(result);
    }


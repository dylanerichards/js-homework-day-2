document.getElementById("danger").addEventListener("click", function(event) {
  successful = true;

  checkUsername();
  checkPassword();
  checkEmail();

  if (successful == true) {
    document.getElementById("success").innerText = "Successful!";
    document.getElementById("form").style.visibility = "hidden";
  }
});

var checkUsername = function() {
  var username = document.getElementById("username").value;

  if (!hasNumber(username)) {
    alert("Username must contain a number!");
    successful = false;
  };
};

var checkPassword = function() {
  var password = document.getElementById("password").value;

  if (password != "lol") {
    alert("You didn't provide the correct password.");
    successful = false;
  };
};

var checkEmail = function() {
  var email = document.getElementById("email").value;

  if (email == "") {
    alert("Email can't be blank!");
    successful = false;
  };
};

var hasNumber = function(string) {
  return (/\d/.test(string));
}

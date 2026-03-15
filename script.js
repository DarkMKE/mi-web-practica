function addUser() {

    // Get the input values
    let nameInput = document.getElementById("nameInput");
    let passwordInput = document.getElementById("passwordInput");

    // Validate the input values
    let name = nameInput.value;
    let password = passwordInput.value;

    // Check if the name or password is empty
    if (name === "" || password === "") {
        return;
    }

    // Create a new list item and add it to the user list
    let li = document.createElement("li");

    // Set the text content of the list item to the user's name
    li.textContent = name;

    // Append the list item to the user list
    document.getElementById("userList").appendChild(li);

    // Clear the input fields after adding the user
    nameInput.value = "";
    passwordInput.value = "";
}

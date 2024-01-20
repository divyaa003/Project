// Generalized function to add package details to the review table
function addToReviewTable(packageName, packageCost) {
  // Get the table body in reviewBookedPackage.html
  var tableBody = document.getElementById("bookingTable");

  // Check if the table element is found
  if (tableBody) {
      // Create a new row
      var newRow = tableBody.insertRow();

      // Create cells for remove, package, and cost
      var removeCell = newRow.insertCell(0);
      var packageCell = newRow.insertCell(1);
      var costCell = newRow.insertCell(2);

      // Create a checkbox for remove
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      removeCell.appendChild(checkbox);

      // Set package name and cost in the respective cells
      packageCell.innerHTML = packageName;
      costCell.innerHTML = packageCost;
  } else {
      console.error("Table element with ID 'bookingTable' not found.");
  }
}

function bookPackage(button) {
  var packageName = button.getAttribute("data-package");
  console.log("Package Name:", packageName);

  window.location.href = "reviewBookedPackage.html";
}

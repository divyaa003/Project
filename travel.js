
//----------------------------------load-more packages start--------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let loadMoreBtn = document.getElementById('load-more');
  let currentItem = 3;

  let boxes = document.querySelectorAll('.packages .container .col');

  for (let i = currentItem; i < boxes.length; i++) {
    boxes[i].style.display = 'none';
  }

  function handleItemClick(e) {
    let selectedOption = e.target.innerText.toLowerCase();
    document.getElementById("span").innerText = selectedOption === 'choose a place' ? 'Choose a Place' : selectedOption;
    list.classList.remove("show");
    icon.style.transform = "rotate(0deg)";

    for (let i = 0; i < boxes.length; i++) {
      let boxTitle = boxes[i].querySelector('.card-title').innerText.toLowerCase();
      boxes[i].style.display = (selectedOption === 'choose a place' || selectedOption === boxTitle) ? 'block' : 'none';
    }

    loadMoreBtn.style.display = 'none';
  }

  let listItems = document.getElementsByClassName("dropdown-list-item");
  for (let item of listItems) {
    item.addEventListener("click", handleItemClick);
  }

  loadMoreBtn.onclick = () => {
    for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
      boxes[i].style.display = 'block';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
    }
  };
});

//----------------------------------load-more packages start--------------------------------------


  // -------------------------------- dropdown start----------------------------------------
  document.addEventListener("DOMContentLoaded", function() {
    let dropdownBtnText = document.getElementById("drop-text");
    let list = document.getElementById("list");
    let icon = document.getElementById("icon");
    let packages = document.querySelectorAll('.packages .col');
  
    // default text
    let defaultText = "Choose a Place";
    document.getElementById("span").innerText = defaultText;
  
    // all dropdown list items
    let listItems = document.querySelectorAll(".dropdown-list-item");
  
    // Function to handle dropdown item click
    function handleItemClick(e) {
      document.getElementById("span").innerText = e.target.innerText;
      list.classList.remove("show");
      icon.style.transform = "rotate(0deg)";
  
      // Show only the selected package (partial match)
      let selectedOption = e.target.innerText.toLowerCase();
      packages.forEach(package => {
        let packageTitle = package.querySelector('.card-title').innerText.toLowerCase();
        if (selectedOption === 'choose a place' || packageTitle.includes(selectedOption)) {
          package.style.display = 'block';
        } else {
          package.style.display = 'none';
        }
      });
    }
  
    // click event listeners to each dropdown list item
    for (let item of listItems) {
      item.addEventListener("click", handleItemClick);
    }
  
    dropdownBtnText.onclick = function () {
      list.classList.toggle("show");
      icon.style.transform = icon.style.transform === "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)";
    };
  
    window.onclick = function (e) {
      if (!dropdownBtnText.contains(e.target) && !list.contains(e.target)) {
        list.classList.remove("show");
        icon.style.transform = "rotate(0deg)";
      }
    };
  });  
// --------------------------------------- dropdown end--------------------------------------------------




// ----------------------------------- back to top script ---------------------------------------------------

  // Get the button
  var mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  });

// --------------------------------- back to top script ------------------------------------










  //--------------open book.html page if the book button in the every packages is clicked-------------------
 


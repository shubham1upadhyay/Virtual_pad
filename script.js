// const  API_URL = "https://zenquotes.io/api/today";
// const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
// const quotesBody = document.getElementById('quotesBody');
document.addEventListener('DOMContentLoaded', () => {
    const quotesBody = document.getElementById('quotesBody');
    const arr = [];
    fetch(API_URL) // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {

        arr.push(data);
        // Render the objects
        renderData(arr);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    function renderData(data) {
      // Clear the container before rendering
      quotesBody.innerHTML = '';
  
      // Loop through the dtaa objects and create elements to display the information
      data.forEach(obj => {
        const objElement = document.createElement('div');
        objElement.innerHTML = `
          <p>${obj.name}</p>
        `;
        quotesBody.appendChild(objElement);
      });
    }
  });
  








// Check if local storage has any entries, else set to empty array
let entryList = JSON.parse(localStorage.getItem("entryList")) || [];

// Render the list of entries on page load
function renderEntries() {
    let html = "";
    entryList.forEach((entry) => {
        html += `
                <textarea readonly class="saved-notes-textarea">${entry.notes}</textarea>
        `;
    });
    document.getElementById("saved-Notes").innerHTML = html;
}

renderEntries();


//function to add notes
function saveNote() {
        let notes = document.getElementById("notes").value;
        // let notesTitle = document.getElementById("notesTitle").value = "";
        
        // Check if name and email fields are not empty
        if (notes === "" && notesTitle === "") {
            alert("Empty sheet cannot be saved !, put some words to save.");
            return;
        }

        // Add new entry to list
        // entryList.push({notesTitle});
        entryList.push({notes});
        // Update local storage with new entry list
        localStorage.setItem("entryList", JSON.stringify(entryList));

        // Clear form fields and show success message
        document.getElementById("notes").value = "";
        // document.getElementById("notesTitle").value = "";
        // document.getElementById("success").innerHTML = "Data added successfully";
        alert("Saved !")

        // Render updated list of entries
        renderEntries();
    }

    fetchDataWithAsyncAwait();
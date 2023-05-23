let itemsOnPage = 10;

let currentPage = 1;
let totalItems = users.length
let extraItems = totalItems % itemsOnPage;
let totalPages =   parseInt( totalItems / itemsOnPage);

if(extraItems > 0) {
    totalPages++;
}
document.querySelector(".page-header h3").innerText = totalItems


function createPageNumberFunction() {
    let pagination = "<ul>"
        
    for (let i = 1; i <= totalPages; i++) {
        pagination += `<li><a onclick="pageNumberClickFunction(${i})">${i}</a></li>`
    }
    pagination += "</ul>"
    document.querySelector("#pagination").innerHTML = pagination
}


function createListFunction() {

let listItem = ""
    let startIndex = (currentPage - 1) * itemsOnPage
    let endIndex = (currentPage * itemsOnPage)-1

    if (extraItems > 0 && currentPage == totalPages) {
        endIndex = (startIndex+extraItems)-1
    }

    for (let i = startIndex; i <= endIndex; i ++) {

    listItem += `
  <li class="contact-item cf">
            <div class="contact-details">
                <img class="avatar" src="${users[i]["image"]}">
                <h3> ${users[i]["name"]}</h3>
                <span class="email">${i+1}iboya.vat@example.com</span>
            </div>
            <div class="joined-details">
                   <span class="date">${users[i]["joined"]}</span>
           </div>
        </li>
`
}
    document.querySelector(".contact-list").innerHTML = listItem
}


function pageNumberClickFunction(pageNumber) {

    currentPage = pageNumber
    createListFunction()
}

createListFunction()

createPageNumberFunction()
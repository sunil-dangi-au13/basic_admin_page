let tbody = document.getElementById("t-body");
let content = document.getElementById("info-content");
document.addEventListener("DOMContentLoaded", function () {
  async function fetchProductApi(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);

    for (let i = 22; i < response.length; i++) {
      let tr = document.createElement("tr");
      tr.classList.add("data-row");
      tbody.appendChild(tr);

      let td = document.createElement("td");
      td.classList.add("column1");
      td.id = "column";
      td.innerHTML = response[i].id;
      tr.appendChild(td);

      let td1 = document.createElement("td");
      td1.classList.add("column2");
      td1.id = "column";
      td1.innerHTML = response[i].firstName;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.classList.add("column3");
      td2.id = "column";
      td2.innerHTML = response[i].lastName;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.classList.add("column4");
      td3.id = "column";
      td3.innerHTML = response[i].email;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.classList.add("column5");
      td4.id = "column";
      td4.innerHTML = response[i].phone;
      tr.appendChild(td4);

      if (i == 22) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 23) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 24) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 25) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 26) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 27) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 28) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 29) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 30) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }

      if (i == 31) {
        tr.addEventListener("click", function () {
          content.innerHTML = `
                   <div><b>User selected:</b> ${response[i].firstName} ${response[i].lastName}</div>
                   <div>
                       <b>Description: </b>
                       <textarea cols="50" rows="5" readonly>
                       ${response[i].description}
                       </textarea>
                   </div>
                   <div><b>Address:</b> ${response[i].address.streetAddress}</div>
                   <div><b>City:</b> ${response[i].address.city}</div>
                   <div><b>State:</b> ${response[i].address.state}</div>
                   <div><b>Zip:</b> ${response[i].address.zip}</div>
                                            `;
        });
      }
      content.style.border = "1px solid black";
    }
  }
  fetchProductApi(
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
  );
});
// let tr=document.querySelector(".data-row")
let search = document.getElementById("search-box");
search.addEventListener("keyup", function (e) {
  let searchItem = tbody.querySelectorAll("tr");
  for (var i = 0; i < searchItem.length; i++) {
    if (
      searchItem[i].textContent
        .toUpperCase()
        .indexOf(e.target.value.toUpperCase()) > -1
    ) {
      searchItem[i].style.color = "yellow";
      searchItem[i].style.display = "block";
    } else {
      searchItem[i].style.display = "none";
    }
  }
});

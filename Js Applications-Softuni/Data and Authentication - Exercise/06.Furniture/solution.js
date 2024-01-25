const logoutBtn = document.querySelector('#logoutBtn');
const buyBtn = document.querySelector('.buyBtn');
const boughtName = document.querySelector('.BoughtName');
const boughtPrice = document.querySelector('.BoughtPrice');

async function logoutUser() {
  const response = await fetch('http://localhost:3030/users/logout', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": sessionStorage.getItem("token"),
    },
  })
}

async function createFurniture(nameF, price, factor, img) {
  const response = await fetch('http://localhost:3030/data/furniture', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      nameF: nameF,
      price: price,
      factor: factor,
      img: img,
    })
  });

  const data = await response.json();
}

async function arrangeFurnituresInTable() {
  const table = document.querySelector('.table tbody');
  table.innerHTML = '';
  const repsonse = await fetch('http://localhost:3030/data/furniture');
  const data = await repsonse.json();


  Object.values(data).forEach((el) => {
    const row = `
            <tr>
                <td>
                    <img
                        src="${el.img}">
                </td>
                <td>
                    <p>${el.nameF}</p>
                </td>
                <td>
                    <p>${el.price}</p>
                </td>
                <td>
                    <p>${el.factor}</p>
                </td>
                <td>
                    <input class="furniture-checkbox" type="checkbox"/>
                </td>
            </tr>  
              `
    table.innerHTML += row
  })
}

function solve() {
  const createForm = document.querySelector('#createForm');

  logoutBtn.addEventListener('click', async (e) => {
    if(sessionStorage.getItem("token")) {
      logoutUser();
      sessionStorage.clear();
      window.location.href='./home.html';

    } else {
      throw new Error("No user token");
    }
  })

  createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(createForm);
    const nameF = formData.get('name');
    const price = formData.get('price');
    const factor = formData.get('factor');
    const img = formData.get("img");

    if(!nameF || !price || !factor || !img) {
      throw new Error("missing fields");
    } else {
      createFurniture(nameF, price, factor, img);
      createForm.reset();
      arrangeFurnituresInTable();
    }

  })

  buyBtn.addEventListener('click', (e) => {
    const checkboxes = document.querySelectorAll('.furniture-checkbox')
    let totalPrice = 0;
    let boughtFurniture = [];
    Array.from(checkboxes).forEach((check) => {
      if(check.checked) {
        const data = check.parentElement.parentElement;
        const name = data.querySelector('p').textContent;
        const price = Number(data.querySelector("td:nth-child(3) p").textContent);
        totalPrice += price;
        boughtFurniture.push(name);
      }
    })

    boughtName.textContent = boughtFurniture;
    boughtPrice.textContent = `${totalPrice.toFixed(2)} $`
  })
};

solve();
arrangeFurnituresInTable();
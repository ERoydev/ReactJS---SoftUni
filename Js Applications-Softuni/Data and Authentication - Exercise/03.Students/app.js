const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

function onLoadData() {
    tbody.textContent = '';
    
    fetch('http://localhost:3030/jsonstore/collections/students')
        .then(res => res.json())
        .then((data) => {
            Object.values(data).forEach((el) => {
                const tr = document.createElement('tr');
                const result = Object.entries(el)
                for(let i = 0; i < 4; i ++) {
                    const td = document.createElement('td');
                    td.textContent = result[i][1];
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            })
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData)

    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            facultyNumber: data.facultyNumber,
            grade: data.grade,
        })
    })

    onLoadData();
    
})


onLoadData();


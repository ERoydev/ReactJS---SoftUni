const logoutBtn = document.querySelector('#logoutBtn');

async function logoutUser() {
  const response = await fetch('http://localhost:3030/users/logout', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": sessionStorage.getItem("token"),
    },
  })
}


function solve() {
  logoutBtn.addEventListener('click', async (e) => {
    if(sessionStorage.getItem("token")) {
      logoutUser();
      sessionStorage.clear();
      window.location.href='./home.html';

    } else {
      throw new Error("No user token");
    }
  })
};

solve();
// prompt nama
let nama = prompt("Masukkan nama Anda:");

document.getElementById("username").innerText = nama;

if (nama=="" || nama==null) {
    document.getElementById("username").innerText = "someone";
}

// ambil elemen penting
const form = document.getElementById("todo-form");
const tableBody = document.getElementById("table-body");

// mengaktifkan tombol submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // cegah reload website

    // ambil nilai input
    const user = document.getElementById("users").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    // buat baris baru
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user}</td>
        <td>${email}</td>
        <td>${date}</td>
        <td>${description}</td>
    `;

    // masukkan row ke tabel
    tableBody.appendChild(row);

    // reset form setelah submit
    form.reset();
});


let pesanan = [];

function buatpesanan(nama, harga) {
  const item = pesanan.find(p => p.nama === nama);

  if (item) {
    item.jumlah++;
  } else {
    pesanan.push({
      nama: nama,
      harga: harga,
      jumlah: 1
    });
  }

  tampilkanPesanan();

  document.getElementById("panelTransaksi").style.display = "block";
}

function tampilkanPesanan() {
  const daftar = document.getElementById("daftarPesanan");
  let subtotal = 0;

  daftar.innerHTML = "";

  if (pesanan.length === 0) {
    daftar.innerHTML = "<p>Belum ada pesanan!</p>";
  }

  pesanan.forEach(item => {
    const totalItem = item.harga * item.jumlah;
    subtotal += totalItem;

    daftar.innerHTML += `
      <p>
        ${item.nama} x ${item.jumlah}
        = Rp${totalItem.toLocaleString("id-ID")}
        <button onclick="kurangiPesanan('${item.nama}')">−</button>
        <button onclick="buatpesanan('${item.nama}', ${item.harga})">+</button>
      </p>
    `;
  });

  const diskon = 0;
  const total = subtotal - diskon;

  document.getElementById("subTotal").textContent =
    "Rp" + subtotal.toLocaleString("id-ID");

  document.getElementById("diskon").textContent =
    "Rp" + diskon.toLocaleString("id-ID");

  document.getElementById("total").textContent =
    "Rp" + total.toLocaleString("id-ID");
}

function kurangiPesanan(nama) {
  const item = pesanan.find(p => p.nama === nama);

  if (item) {
    item.jumlah--;

    if (item.jumlah <= 0) {
      pesanan = pesanan.filter(p => p.nama !== nama);
    }
  }

  tampilkanPesanan();
}

function tutupPanel() {
  document.getElementById("panelTransaksi").style.display = "none";
}

function sukses() {
  document.getElementById("buatPesanan")
  alert('Pesanan mu berhasil dibuat!')
}

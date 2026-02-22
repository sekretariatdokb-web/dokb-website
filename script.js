const KODE_AKSES = "DOKB2026";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === KODE_AKSES) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("analisaForm").style.display = "block";
  } else {
    document.getElementById("loginMessage").innerText = "Kode salah!";
  }
}

function analisaData() {
  const jam = parseFloat(document.getElementById("jamOnline").value);
  const trip = parseFloat(document.getElementById("totalTrip").value);
  const order = parseFloat(document.getElementById("orderMasuk").value);
  const bruto = parseFloat(document.getElementById("totalBruto").value);

  if (!jam || !trip || !order || !bruto) {
    alert("Semua data harus diisi!");
    return;
  }

  const tripPerJam = (trip / jam).toFixed(2);
  const acceptRate = ((trip / order) * 100).toFixed(1);
  const estimasiPotongan = (bruto * 0.20).toFixed(0);

  let status = "";
  if (tripPerJam < 1) status = "Dirugikan (Distribusi Lemah)";
  else if (tripPerJam <= 1.5) status = "Netral";
  else status = "Diuntungkan";

  document.getElementById("hasilAnalisa").innerHTML = `
    <p><strong>Hasil Analisa:</strong></p>
    <p>Trip/Jam: ${tripPerJam}</p>
    <p>Rasio Penerimaan: ${acceptRate}%</p>
    <p>Estimasi Potongan (20%): Rp ${estimasiPotongan}</p>
    <p>Status Sistem: <strong>${status}</strong></p>
  `;
}
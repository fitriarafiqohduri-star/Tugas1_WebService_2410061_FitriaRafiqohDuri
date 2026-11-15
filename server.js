
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Penyimpanan data menggunakan Array
let biodata = [];
let nextId = 1;

// Validasi data biodata
function validasiBiodata(data) {
  return (
    typeof data.nama === "string" &&
    data.nama.trim() !== "" &&
    typeof data.umur === "number" &&
    Number.isInteger(data.umur) &&
    data.umur > 0 &&
    typeof data.alamat === "string" &&
    data.alamat.trim() !== "" &&
    typeof data.pekerjaan === "string" &&
    data.pekerjaan.trim() !== ""
  );
}

// GET: Menampilkan seluruh biodata
app.get("/api/biodata", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Berhasil menampilkan seluruh biodata",
    data: biodata
  });
});

// GET: Menampilkan biodata berdasarkan ID
app.get("/api/biodata/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = biodata.find(item => item.id === id);

  if (!data) {
    return res.status(404).json({
      status: "fail",
      message: "Biodata tidak ditemukan",
      data: null
    });
  }

  res.status(200).json({
    status: "success",
    message: "Biodata berhasil ditemukan",
    data: data
  });
});

// POST: Menambahkan biodata baru
app.post("/api/biodata", (req, res) => {
  const { nama, umur, alamat, pekerjaan } = req.body;

  if (!validasiBiodata({ nama, umur, alamat, pekerjaan })) {
    return res.status(400).json({
      status: "fail",
      message: "Semua field wajib diisi dengan format yang benar",
      data: null
    });
  }

  const dataBaru = {
    id: nextId++,
    nama: nama.trim(),
    umur,
    alamat: alamat.trim(),
    pekerjaan: pekerjaan.trim()
  };

  biodata.push(dataBaru);

  res.status(201).json({
    status: "success",
    message: "Biodata berhasil ditambahkan",
    data: dataBaru
  });
});

// PUT: Memperbarui biodata berdasarkan ID
app.put("/api/biodata/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = biodata.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Biodata tidak ditemukan",
      data: null
    });
  }

  const { nama, umur, alamat, pekerjaan } = req.body;

  if (!validasiBiodata({ nama, umur, alamat, pekerjaan })) {
    return res.status(400).json({
      status: "fail",
      message: "Semua field wajib diisi dengan format yang benar",
      data: null
    });
  }

  biodata[index] = {
    id,
    nama: nama.trim(),
    umur,
    alamat: alamat.trim(),
    pekerjaan: pekerjaan.trim()
  };

  res.status(200).json({
    status: "success",
    message: "Biodata berhasil diperbarui",
    data: biodata[index]
  });
});

// DELETE: Menghapus biodata berdasarkan ID
app.delete("/api/biodata/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = biodata.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Biodata tidak ditemukan",
      data: null
    });
  }

  const dataDihapus = biodata.splice(index, 1)[0];

  res.status(200).json({
    status: "success",
    message: "Biodata berhasil dihapus",
    data: dataDihapus
  });
});

// Menangani alamat API yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Endpoint tidak ditemukan",
    data: null
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

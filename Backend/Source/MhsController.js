import mahasiswa from "../Database/MhsModels.js";

// Reusable  function
export const findNpm = async (npm) => {
  return await mahasiswa.findOne({
    where: {
      npm: npm,
    },
  });
};

// Menampilkan seluruh data mahasiswa
export const getAllMhs = async (req, res) => {
  try {
    const mhs = await mahasiswa.findAll();
    res.json(mhs);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Menampilkan data mahasiswa secara spesifik
export const findOneMhs = async (req, res) => {
  try {
    const mhs = await findNpm(req.params.npm);

    if (!mhs) {
      res.json({ message: "Data tidak ditemukan" });
    }

    res.json({
      data: mhs,
      message: "Data Mahasiswa Berhasilasil Ditampilkan",
    });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Menambahkan data mahasiswa
export const createMhs = async (req, res) => {
  try {
    // check npm
    const findByNpm = (await findNpm(req.body.npm))
      ? res.json({ msg: "NPM sudah terdaftar" })
      : await mahasiswa.create(req.body);

    res.json({
      data: req.body,
      message: "Data Mahasiswa Berhasilasil Ditambahkan",
    });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Mengubah data mahasiswa
export const updateMhs = async (req, res) => {
  try {
    const mhs = await findNpm(req.params.npm);
    if (!mhs) {
      res.json({ message: "Data tidak ditemukan" });
    }

    await mahasiswa.update(req.body, {
      where: {
        npm: parseInt(req.params.npm),
      },
    });

    res.json({
      data: req.body,
      message: "Data Mahasiswa Berhasilasil Diubah",
    });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Menghapus data mahasiswa
export const deleteMhs = async (req, res) => {
  try {
    await mahasiswa.destroy({
      where: {
        npm: req.params.npm,
      },
    });
    res.json({
      data: res.body,
      message: "Data Mahasiswa Berhasilasil Dihapus",
    });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

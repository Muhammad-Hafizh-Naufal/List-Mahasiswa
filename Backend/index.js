import express from "express";
import cors from "cors";
import MhsRoutes from "./Source/MhsRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json(await MhsRoutes)); // Middleware untuk menggunaan JSON
app.use(MhsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});

app.use((err, res) => {
  // Untuk menangani error yang terjadi pada server
  res.status(500).json({
    message: err.message,
  });
});

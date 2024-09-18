import express from "express";
import MhsRoutes from "./Source/MhsRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware untuk menggunaan JSON

app.use(MhsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});

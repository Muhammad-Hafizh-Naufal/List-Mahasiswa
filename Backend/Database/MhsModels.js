import { Sequelize } from "sequelize";
import db from "./MhsDatabase.js";

const mahasiswa = db.define(
  "mahasiswa",
  {
    npm: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    kelas: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default mahasiswa;
(async () => {
  db.sync();
})();

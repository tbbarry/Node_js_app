import express from "express"
import { sequelize } from "./config/database";
import { router } from "./routes/bookRoute";
import path from "path";
const app = express();
const port = 5678
//middleware
app.use(express.json())
const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "updloads")));
//Routes
app.use('/api/books', router)

sequelize.sync().then(() => {
    console.log(`[Dababase] is runing successfull `)
    app.listen(port, () => console.log(`Server is Running at: http://localhost:${port}`))
})
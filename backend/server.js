import { connectDB } from "./data/database.js";
import { app } from "./app.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${process.env.PORT}`);
});

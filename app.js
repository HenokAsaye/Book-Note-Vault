import express from " express";
import authRoute from "./routes/authRoute.js"
import bookNoteRoute from "./routes/bookNoteRoute.js"
import apiRoute from "./routes/apiRoute.js"
import bookRoute from "./routes/bookRoute.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",apiRoute)
app.use('/books',bookRoute);
app.use("/bookNote",bookNoteRoute)
app.use("/auth",authRoute);

export default app;
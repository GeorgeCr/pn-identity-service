import app from "./app";

const PORT = (process.env.PORT as string) || 3000;

app.listen(PORT, "0.0.0.0", () => console.log(`App listening on port ${PORT}`));

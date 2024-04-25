// server.ts

import express from 'express';
import todoRoutes from './routes/todoRoutes';



const app = express();
const PORT = process.env.PORT || 4000;

// Middleware für das Parsen von JSON-Daten im Anfragekörper
app.use(express.json());

// Middleware für die Verwendung der Todo-Routen
app.use(todoRoutes);

// Starten des Servers
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
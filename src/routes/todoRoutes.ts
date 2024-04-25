import express, { Router } from 'express';
import {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} from '../controllers/todoControllers';

const router: Router = express.Router();

// Routen für die CRUD-Operationen

// Erstellen eines neuen Todos
router.post('/todos', createTodo);

// Anzeigen aller Todos
router.get('/todos', getAllTodos);

// Anzeigen eines bestimmten Todos anhand der ID
router.get('/todos/:id', getTodoById);

// Aktualisieren eines Todos anhand der ID
router.put('/todos/:id', updateTodo);

// Löschen eines Todos anhand der ID
router.delete('/todos/:id', deleteTodo);

export default router;



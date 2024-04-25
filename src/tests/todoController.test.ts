// todoController.test.ts

import request from 'supertest';
import app from '../index';
import { TodoStatus } from '../models/todoModel'; 


describe('Todo Controller', () => {
  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({
        todo: 'Buy groceries',
        deadline: '2024-04-25',
        assignee: 'John',
        owner: 'Alice',
        status: 'not started'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.todo).toHaveProperty('id');
  });

  it('should get all todos', async () => {
    const response = await request(app).get('/todos');
    
    expect(response.status).toBe(200);
    expect(response.body.todos).toBeDefined();
  });

  // Weitere Tests für die anderen Controller-Funktionen...
});
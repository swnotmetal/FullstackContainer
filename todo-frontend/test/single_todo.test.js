/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// filepath: /d:/codes/docker/part12-containers-applications/todo-app/todo-frontend/test/single_todo.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoList } from '../src/Todos/List.jsx';

test('renders a single todo correctly', () => {
  const todos = [
    { _id: '1', text: 'Test todo', done: false }
  ];
  const deleteTodo = jest.fn();
  const completeTodo = jest.fn();

  render(<TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />);

  // Check if the todo text is rendered
  expect(screen.getByText('Test todo')).toBeInTheDocument();

  // Check if the "This todo is not done" text is rendered
  expect(screen.getByText('This todo is not done')).toBeInTheDocument();

  // Check if the "Delete" button is rendered
  expect(screen.getByText('Delete')).toBeInTheDocument();

  // Check if the "Set as done" button is rendered
  expect(screen.getByText('Set as done')).toBeInTheDocument();

  //intentionally fail
    expect(screen.getByText('This text does not exist')).toBeInTheDocument();
});
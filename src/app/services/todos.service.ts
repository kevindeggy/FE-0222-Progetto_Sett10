import { Todo } from "../interface/todo";

export let arrayTodo: Todo[] = [];

export async function addTask(task: string): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = {
        id: arrayTodo.length + 1,
        title: task,
        completed: false,
        modifica: false
      };
      arrayTodo.push(newTodo);
      res(newTodo);
    }, 2000);
  })
}

export async function getTask(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(arrayTodo);
    }, 2000);
  });
}

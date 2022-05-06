import { Todo } from "../interface/todo";

export let arrayTodo: Todo[] = [];
export let cerca1: number = 0;
export let cerca2: number = 0;

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

export function addC(): number {
  return cerca1++;
}

export function sottC(): number {
  return cerca1--;
}

export function addCompl(): number {
  return cerca2++;
}

export function sottCompl(): number {
  return cerca2--;
}

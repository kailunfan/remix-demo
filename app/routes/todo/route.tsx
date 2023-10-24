import { Card, Button, Input } from "antd";
import React from "react";
import TodoItem from "./TodoItem";
import { type ActionFunctionArgs, json } from "@remix-run/node";
import invariant from "tiny-invariant";

import todoService from "~/service/todoService";
import { useFetcher, useLoaderData } from "@remix-run/react";

export const loader = async function name() {
  return json({
    todos: await todoService.todoList(),
  });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const d = Object.fromEntries(await request.formData());
  const op = d.op as keyof typeof actionMap;
  await actionMap[op](d);
  return null;
};

const actionMap = {
  setState: async function (f: any) {
    await todoService.setState(parseInt(f.id as string), f.state ? 1 : 0);
  },
  add: async function (f: any) {
    invariant(f.name, "name can not be empty");
    await todoService.addTodo(f.name);
  },
};

const Creator = function () {
  const fetcher = useFetcher();
  // const submit = useSubmit();
  return (
    <fetcher.Form method="post">
      <div style={{ display: "flex" }}>
        <Input name="name" defaultValue="" />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <input name="op" value="add" type="hidden"></input>
      </div>
    </fetcher.Form>
  );
};

const App: React.FC = () => {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <div>
      <Card
        size="small"
        title="ToDos"
        style={{ width: 600, margin: "2em auto" }}
        extra={<Creator />}
      >
        {todos.map((x) => (
          <TodoItem
            key={x.id}
            title={x.name}
            id={x.id}
            state={x.state}
          ></TodoItem>
        ))}
      </Card>
    </div>
  );
};

export default App;

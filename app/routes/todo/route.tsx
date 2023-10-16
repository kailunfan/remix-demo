import { Card } from "antd";
import React from "react";
import TodoItem from "./TodoItem";
import type { HeadersFunction, ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(request.headers.get("X-Stretchy-Pants"));
  console.log(formData);
  return null;
};

export const headers: HeadersFunction = ({
  actionHeaders,
  loaderHeaders,
  parentHeaders,
  errorHeaders,
}) => ({
  "X-Stretchy-Pants": "its for fun",
  "Cache-Control": "max-age=300, s-maxage=3600",
});

const App: React.FC = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <Card
      size="small"
      title="ToDos"
      extra={<a href="#">More</a>}
      style={{ width: 600, margin: "2em auto" }}
    >
      {data.map((x) => (
        <TodoItem key={x} title={x}></TodoItem>
      ))}
    </Card>
  );
};

export default App;

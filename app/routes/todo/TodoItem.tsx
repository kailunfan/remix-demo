import React from "react";
import { Row, Col, Checkbox, Divider, Button } from "antd";
import { useFetcher, useSubmit } from "@remix-run/react";

const TodoItem: React.FC<{ title: string }> = ({ title }) => {
  const fetcher = useFetcher();
  const submit = useSubmit();

  return (
    <>
      <Row justify="space-between">
        <Col span={18}>{title}</Col>
        <Col span={1}>
          <fetcher.Form
            method="post"
            onChange={(event) => {
              submit(event.currentTarget, { replace: false });
            }}
          >
            <input type="hidden" name="id" value={title}></input>
            <Checkbox name='ch' />
            <input name="op" value="updateFinished" type="hidden"></input>
          </fetcher.Form>
        </Col>
      </Row>
      <Divider></Divider>
    </>
  );
};

export default TodoItem;

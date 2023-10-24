import React from "react";
import { Row, Col, Checkbox, Divider, Space, Typography } from "antd";
import { useFetcher, useSubmit } from "@remix-run/react";

const { Text, Link } = Typography;

const TodoItem: React.FC<{ title: string; id: number; state: number }> = ({
  title,
  id,
  state,
}) => {
  const fetcher = useFetcher();
  const submit = useSubmit();

  return (
    <>
      <Row justify="space-between">
        <Col span={18}>
          <Text
            style={{ fontSize: "2em", color: "#1677FF" }}
            delete={state === 1}
          >
            {title}
          </Text>
        </Col>
        <Col span={1}>
          <fetcher.Form
            method="post"
            onChange={(event) => {
              submit(event.currentTarget, { replace: false });
            }}
          >
            <input type="hidden" name="id" value={id}></input>
            <Checkbox name="state" checked={state == 1} />
            <input name="op" value="setState" type="hidden"></input>
          </fetcher.Form>
        </Col>
      </Row>
      <Divider></Divider>
    </>
  );
};

export default TodoItem;

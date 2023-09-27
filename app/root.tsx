import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
  useNavigation,
} from "@remix-run/react";
import { Layout } from "antd";
import Menu from "./components/menu";

import type { LinksFunction } from "@remix-run/node";

import appStylesHref from "./app.css";

const { Header, Content } = Layout;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  const navigation = useNavigation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Menu />
          </Header>
          <Content
            className={`content ${
              navigation.state === "loading" ? "loading" : ""
            }`}
            style={{ padding: "0 10px" }}
          >
            <Outlet />
          </Content>{" "}
        </Layout>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

import { css, Style } from "hono/css";
import { Hono } from "hono";

const headerClass = css`
  color: white;
  background-color: blue;
`;

const App = () => (
  <>
    <Style />
    <span className={headerClass}>eH2</span>
  </>
);

const app = new Hono();
app.get("/", (c) => c.render(<App />));

export default app;

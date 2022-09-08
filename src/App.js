import React from "react";
import Todo from "./components/task/Todo";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{ 
  margin :0;
  padding:0;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <div>
      <Todo />
      <GlobalStyle />
    </div>
  );
}

import React, { useState } from "react";
import { Container, Box, Task } from "./styles";

export default function Todo() {
  const [tarefa, setTarefa] = useState()
   
  const [itens, setItens] = useState([]);

  

  function addTarefa() {
  
  
   let tarefaData = {
     value:tarefa,
     id: Date.now
   
    }
    setItens([...itens,tarefaData])
  }

  

  function clearTarefa(id) {
    const newItens = itens.filter((itens) => itens.id !== id);
    setItens(newItens);
  }

  return (
    <Container>
      <h1> O QUE FAREMOS HOJE? ✨ </h1>
      <form onSubmit={(e) => e.preventDefault() }>
        <input
        value = {tarefa} onChange = {e =>setTarefa(e.target.value)}
        />
        
        <button onClick ={() => {addTarefa()}} id="btn-add">
          +
        
        </button>
      </form>
      <Box>
        <ul>
          {itens.map(item => (
            <li>
              {item.value}
              <button onClick ={() => {clearTarefa(item.id)}}>x</button>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

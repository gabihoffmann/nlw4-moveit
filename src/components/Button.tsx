import { useState } from 'react';
interface ButtonProps {
  color: string;
  children?: string;
}

export function Button(props: ButtonProps){
  const [counter, setCounter] = useState(1);

  function handleIncrement(){
    setCounter(counter+1);
  }

  return(
    <button 
      type="button" 
      style={{color: props.color}} 
      onClick={handleIncrement}>
      Botão {props.children} <strong>{counter}</strong>
    </button>
  )
}
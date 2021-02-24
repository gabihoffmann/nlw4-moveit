interface ButtonProps {
  color: string;
  children?: string;
}

export function Button(props: ButtonProps){
  return(
    <button type="button" style={{color: props.color}}>
      Botão {props.children}
    </button>
  )
}
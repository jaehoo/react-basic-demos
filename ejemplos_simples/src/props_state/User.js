import { useState } from "react";
import UserData from "./UserData";

export default function User() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);
  const [color, setColor] = useState("black");

  function cambiaEdad(newage) {
    if(newage === 30) {
      setColor("green");
    }
    setAge(newage);
  }

  function alertas(date){
    alert("today is"+ date);
  }

  return (
    <>
      <h1>My página de usuario</h1>
      <UserData name={name} age={age} color={color} setEdad={cambiaEdad} setColor={setColor} alerta={alertas} />
    </>
  )
}

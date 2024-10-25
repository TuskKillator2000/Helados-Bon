import logo from "./logo.svg";
import "./App.css";

export function Greeting() {
  const name = true;
  return <h1>{name ? "Estoy casado" : "No estoy casado"}
  </h1>;
}
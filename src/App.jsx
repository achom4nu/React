import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  const [name, setName] = useState("achom4nu");

  //Con array
  const users = [
    { userName: "achom4nu", name: "Manuel Guillén Serna", isFollowing: true },
    { userName: "midudev", name: "MIguel Ángel Durán", isFollowing: false },
    { userName: "ignasi_nebot", name: "Ignasi Nebot Iniesta", isFollowing: true },
    { userName: "DragonnDemente", name: "Jose Manuel García Box", isFollowing: false }
  ];

  return (
    <section class="App">
      {/*
      SIN ARRAYS DE PERSONA
      
      <TwitterFollowCard
        isFollowing={true}
        formatUserName={formatUserName}
        name={"Manuel Guillén Serna"}
        userName={name}
      />
      <TwitterFollowCard
        isFollowing={false}
        formatUserName={formatUserName}
        name={"Ignasi Nebot Iniesta"}
        userName={"ignasi_nebot"}
      />
      <button onClick={() => setName("juanjo")}>
        Cambiar nombre
      </button>
      
      CON ARRAY DE PERSONAS (SIMULANDO UN FETCH DE LA BASE DE DATOS)
      
      */}
      {
        users.map(({userName, name, isFollowing}) => {
          return(
            <TwitterFollowCard 
            userName={userName} 
            initialIsFollowing={isFollowing} 
            name={name}
            key={userName}>
            </TwitterFollowCard>
          )
      
      })
    }
    </section>
  );
}

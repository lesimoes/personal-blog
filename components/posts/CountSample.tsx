'use client';
import React, { useState } from 'react';

export function CountSample1() {
  const inicial = [1, 2, 3];
  const [contador, setContador] = useState(1);
  const [lista, setLista] = useState(inicial);

  function mudarTudao() {
    inicial.push(4);
    setContador(2);
    setLista(inicial);
  }

  return (
    <div>
      <span>Contador: {contador}</span>
      <ul>{lista && lista.map((v, i) => <li key={i}>{v}</li>)}</ul>
      <button
        className="bg-sky-700 p-2 rounded-md hover:bg-sky-500"
        onClick={mudarTudao}
      >
        Mudar tudão
      </button>
    </div>
  );
}

export function CountSample2() {
  const inicial = [1, 2, 3];
  const [contador, setContador] = useState(1);
  const [lista, setLista] = useState(inicial);

  function mudarTudao() {
    inicial.push(4);
    setLista(inicial);
  }

  return (
    <div>
      <span>Contador: {contador}</span>
      <ul>{lista && lista.map((v, i) => <li key={i}>{v}</li>)}</ul>
      <button
        className="bg-sky-700 p-2 rounded-md hover:bg-sky-500"
        onClick={mudarTudao}
      >
        Mudar tudão
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex w-full">
      <CountSample1 />
      <CountSample2 />
    </div>
  );
}

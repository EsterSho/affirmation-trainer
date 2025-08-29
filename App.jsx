import React, { useState, useEffect } from "react";

export default function App() {
  const affirmations = [
    "Мой организм полностью обновляется и возрождается.",
    "Я живу в бесконечном изобилии и любви Вселенной.",
    "Я сильный, уверенный и достойный мужчина."
  ];

  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem("counts");
    return saved ? JSON.parse(saved) : Array(affirmations.length).fill(0);
  });

  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(counts));
  }, [counts]);

  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Тренажёр утверждений</h1>
      {affirmations.map((a, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <p>{a}</p>
          <button onClick={() => increment(i)}>Повторил ✅ ({counts[i]})</button>
        </div>
      ))}
      <p style={{ marginTop: 40, fontSize: 12, color: "gray" }}>
        Данные сохраняются локально и работают оффлайн
      </p>
    </div>
  );
}

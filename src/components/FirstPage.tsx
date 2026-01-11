import { useState } from "react";
import image from "../assets/image01.jpg";

export default function Card() {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div className="scene">
      <div className={`card ${flipped ? "is-flipped" : ""}`}>
        
        {/* FRONT */}
        <div className="card-face card-front">
          <img src={image} alt="Фото" />

          <button
            className="open-btn"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
          >
            Відкрити 💌
          </button>
        </div>

        {/* BACK */}
        <div className="card-face card-back">
          <h1>З днем народження, маленька! 🎂</h1>

          <p>
            Я дуже ціную наше спілкування і щиро радію,
            що у мене є така сестра як ти! 💖
          </p>
          <p>Бажаю тобі здоров'я, щастя і безумовного кохання ✨</p>
          <p>Ти заслуговуєш на найкраще!</p>

          <button
            className="open-btn"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
          >
            ← Назад
          </button>
        </div>

      </div>
    </div>
  );
}



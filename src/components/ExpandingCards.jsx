import React, { useState } from 'react';
import './CSSPart/ExpandingCards.css';

const ExpandingCards = () => {
  // Track karte hain ki kaunsa card abhi open hai (default pehla wala '1')
  const [activeId, setActiveId] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Explore The World",
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Wild Forest",
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Sunny Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
    },
    {
      id: 4,
      title: "City on Winter",
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: 5,
      title: "Mountains - Clouds",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="container">
      {cards.map((card) => (
        <div
          key={card.id}
          // Agar yeh card activeId se match kare, toh 'active' class add karo
          className={`panel ${activeId === card.id ? "active" : ""}`}
          style={{ backgroundImage: `url(${card.url})` }}
          onClick={() => setActiveId(card.id)}
        >
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
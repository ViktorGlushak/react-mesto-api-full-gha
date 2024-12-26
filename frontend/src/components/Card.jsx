import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete, setSelectedCard }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const isLiked = card.likes.some((like_user_id) => like_user_id === currentUser._id);

  const cardLikeButtonClassName = `gallery__like ${
    isLiked && "gallery__like_active"
  }`;

  function handleClick() {
    setSelectedCard(card);
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    setSelectedCard(card);
    onCardDelete(card);
  }

  return (
    <article className="gallery__element">
      {isOwn && (
        <button
          className="gallery__trash"
          type="button"
          onClick={handleCardDelete}
        ></button>
      )}
      <img
        className="gallery__picture"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="gallery__info">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__number">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="gallery__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

import React from "react";

export default function DeletePopup({card, onCardDelete, isOpen, onClose}) {

    function handleCardDelete(e) {
        e.preventDefault();
        onCardDelete(card);
  }

  return (
    <div className={
        isOpen ? `popup popup-delete popup_opened` : `popup popup-delete`
      }>
      <div className="popup__overlay">
        <button
            className="popup__close"
            type="button"
            onClick={onClose}
        ></button>
        <h2 className="popup__delete-title popup__title">Вы уверены?</h2>
        <form action="#" name="add-form" className="popup__main">
          <fieldset className="popup__info">
            <button
              onClick={handleCardDelete}
              className="popup__save-button popup__delete-button"
              type="submit"
            >
              Да
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

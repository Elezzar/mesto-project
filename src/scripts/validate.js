/**добавление инпуту класса с ошибкой */
function showInputError(formElement, formInput, errorMessage, settings) {
  /**спан с сообщением об ошибке */
  const formError = formElement.querySelector(`.${formInput.id}-error`);

formInput.classList.add(settings.inputErrorClass);

formError.textContent = errorMessage;
formError.classList.add(settings.errorClass);
};


/**удаление у инпута класса с ошибкой */
function hideInputError(formElement, formInput, settings) {
/**спан с сообщением об ошибке */
const formError = formElement.querySelector(`.${formInput.id}-error`);

formInput.classList.remove(settings.inputErrorClass);

formError.classList.remove(settings.errorClass);
formError.textContent = '';
};


/**проверка валидности кода */
function isValid(formElement, formInput, settings) {
  if (formInput.validity.patternMismatch) {
  // встроенный метод setCustomValidity принимает на вход строку и заменяет ею 
  //стандартное сообщение об ошибке
  formInput.setCustomValidity(formInput.dataset.errorMessage);
} else {
  // если передать пустую строку, то будут доступны стандартные браузерные сообщения
  formInput.setCustomValidity("");
}

  if (!formInput.validity.valid) {
  // поле не проходит валидацию
  showInputError(formElement, formInput, formInput.validationMessage, settings);
} else {
  // поле проходит валидацию
  hideInputError(formElement, formInput, settings);
}
};


/**поиск невалидного инпута */
function hasInvalidInput(inputList) {
// проходим по этому массиву инпутов методом some
return inputList.some((formInput) => {
  // Если поле не валидно, колбэк вернёт true, Обход массива прекратится 
  //и вся функция hasInvalidInput вернёт true
  return !formInput.validity.valid;
})
}; 


/**переключение кнопки при изменении валидности инпутов */
function toggleButtonState(inputList, formButton, settings) {
// Если есть хотя бы один невалидный инпут
if (hasInvalidInput(inputList)) {
  // сделай кнопку неактивной
  formButton.disabled = true;
  formButton.classList.add(settings.inactiveButtonClass);
} else {
      // иначе сделай кнопку активной
  formButton.disabled = false;
  formButton.classList.remove(settings.inactiveButtonClass);
}
}; 


/**функция обработки инпутов по валидации в форме */
function handleFormInputs(formElement, settings) {
/**массив инпутов в форме */
const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
/**кнопка submit в форме */
const formButton = formElement.querySelector(settings.submitButtonSelector);

toggleButtonState(inputList, formButton, settings);

formElement.addEventListener('reset', () => {
  setTimeout(() => {
    toggleButtonState(inputList, formButton, settings);
  }, 0);
});

inputList.forEach((formInput) => {
  // каждому полю добавим обработчик события input
  formInput.addEventListener('input', () => {
    // вызовем isValid, передав ей форму и проверяемый элемент
    isValid(formElement, formInput, settings);
    toggleButtonState(inputList, formButton, settings);
  });
});
};


/**функция обработки форм для валидации*/
export function enableValidation(settings) {
/**массив форм */
const formList = Array.from(document.querySelectorAll(settings.formSelector));

formList.forEach((formElement) => {
  // вызовем handleFormInputs, передав ей элемент формы
  handleFormInputs(formElement, settings);
});
};
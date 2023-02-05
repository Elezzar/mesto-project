export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._formButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  /**добавление инпуту класса с ошибкой */
  _showInputError(formInput, errorMessage) {
    /**спан с сообщением об ошибке */
    const formError = this._formElement.querySelector(`.${formInput.id}-error`);
  
    formInput.classList.add(this._settings.inputErrorClass);
  
    formError.textContent = errorMessage;
    formError.classList.add(this._settings.errorClass);
  };

  /**удаление у инпута класса с ошибкой */
  _hideInputError(formInput) {
  /**спан с сообщением об ошибке */
  const formError = this._formElement.querySelector(`.${formInput.id}-error`);
  
  formInput.classList.remove(this._settings.inputErrorClass);
  
  formError.classList.remove(this._settings.errorClass);
  formError.textContent = '';
  };

  /**проверка валидности кода */
  _isValid(formInput) {
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
      this._showInputError(formInput, formInput.validationMessage);
    } else {
    // поле проходит валидацию
      this._hideInputError(formInput);
    }
  };

  /**поиск невалидного инпута */
  //inputList убрал
  _hasInvalidInput() {
  // проходим по этому массиву инпутов методом some
    return this._inputList.some((formInput) => {
    // Если поле не валидно, колбэк вернёт true, Обход массива прекратится 
    //и вся функция hasInvalidInput вернёт true
      return !formInput.validity.valid;
    })
  }; 

  /**переключение кнопки при изменении валидности инпутов */
  _toggleButtonState() {
  // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(this._inputList)) {
    // сделай кнопку неактивной
      this._formButton.disabled = true;
      this._formButton.classList.add(this._settings.inactiveButtonClass);
    } else {
    // иначе сделай кнопку активной
      this._formButton.disabled = false;
      this._formButton.classList.remove(this._settings.inactiveButtonClass);
    }
  };
  
  /**обработка инпутов по валидации в форме */
  _handleFormInputs() {
    this._toggleButtonState(inputList, formButton);
  
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputList, formButton);
      }, 0);
    });
  
    this._inputList.forEach((formInput) => {
    // каждому полю добавим обработчик события input
    this._formInput.addEventListener('input', () => {
      // вызовем isValid, передав ей форму и проверяемый элемент
      this._isValid(formInput);
      this._toggleButtonState(inputList, formButton);
      });
    });
  };
  
  /**обработка форм для валидации*/
  enableValidation() {
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // вызовем handleFormInputs, передав ей элемент формы
      this._handleFormInputs(formElement);
  };
}

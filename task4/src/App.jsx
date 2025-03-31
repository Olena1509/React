import React from 'react';

import HomeworkPage from './components/HomeworkPage';
import './App.css'

/*
** Використовувати лише класові компоненти
** Кожну компоненту розділяти

1. Використовуючи лише класові компоненти повторити вест код
   згідно дз з попередної лекції.
 
2. Переписати попереднє дз, тільки тепер на класових компонентах 

3. Створити комаоненту Content і розмістити її в App.
   Всередині компоненти Content створити та викликати компоненту MyEvents та в якій у довільному порядку використати події:
   onClick, onMouseDown, onMouseUp, onMouseMove, onCut, onCopy, onMouseWheel*/

   function App() {

  return (
    <div>
      <HomeworkPage></HomeworkPage>
    </div>
  )
}

export default App

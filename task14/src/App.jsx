
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom"; 
import router from "./router"; 

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}> 
      <RouterProvider router={router} /> {/* Забезпечуємо доступ до маршрутизатора */}
    </Suspense>
  );
}

export default App;

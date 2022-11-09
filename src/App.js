
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="App">
      <div className='max-w-screen-lg mx-auto'> 
      <RouterProvider  router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;

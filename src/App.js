
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';

function App() {
  return (
    <div className="App">
      <div className='max-w-screen-lg mx-auto'>
        {/* add data */}
        {/* add item */}
        {/* add review */}
      <RouterProvider  router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;

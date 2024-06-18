import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import CounterPage from './pages/CounterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UserPage from './pages/UserPage';
import ContextPage from './pages/ContextPage';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <h1>state management</h1>
          <Routes>
            <Route path="/" element={<CounterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/user-context" element={<ContextPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

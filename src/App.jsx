import './App.css';
import BookForm from './components/bookform/BookForm';
import BookList from './components/booklist/BookList';
import Filter from './components/filter/Filter';
import Error from './components/error/Error';
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>BookSearch</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  );
}

export default App;

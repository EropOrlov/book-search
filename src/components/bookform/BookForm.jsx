import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookReducer, fetchData, isLoadingSelector } from '../../redux/books/bookSlice';
import bookData from '../../data/books.json';
import { createBookWithId } from '../../utils/createBookWithId';
import { setError } from '../../redux/slices/errorSlice';
import { FaSpinner } from 'react-icons/fa';
import './BookForm.css';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const isLoading = useSelector(isLoadingSelector)
  const dispatch = useDispatch();

  const handleRandom = () => {
    const index = Math.floor(Math.random() * bookData.length);
    const book = bookData[index];
    dispatch(addBookReducer(createBookWithId(book, 'Random')));
  };

  const handleRandomApi =  () => {
    const url = import.meta.env.VITE_API_SERVER;
    dispatch(fetchData(url));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBookReducer(createBookWithId({ title, author }, 'Manual')));
      setAuthor('');
      setTitle('');
    } else {
      dispatch(setError("Title and Author can't be empty"));
    }
  };

  return (
    <div className="book-form app-block">
      <h1>BookForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label htmlFor="author">
          Author:
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <button type="submit">Add book</button>
        <button type="button" onClick={() => handleRandom()}>
          Random
        </button>
        <button
          type="button"
          onClick={() => handleRandomApi()}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading books</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            <span>Random from Api</span>
          )}
        </button>
      </form>
    </div>
  );
}

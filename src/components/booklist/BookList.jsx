import { deleteBookReducer, toggleFavReducer, selectBooks } from '../../redux/books/bookSlice';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterTitle,
  selectFilterAuthor,
  selectFilterFav
} from '../../redux/slices/filterSlice';
import './BookList.css';

export default function BookList() {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectFilterTitle);
  const authorFilter = useSelector(selectFilterAuthor);
  const favFilter = useSelector(selectFilterFav);

  const dispatch = useDispatch();

  const deleteBooks = (id) => {
    dispatch(deleteBookReducer(id));
  };

  const handleFav = (id) => {
    dispatch(toggleFavReducer(id));
  };

  const filterBooks = () => {
    if(favFilter){
      return books?.filter(
        (el) =>
          el.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          el.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
          el.isFav === favFilter
      );
    }else{
      return books?.filter(
        (el) =>
          el.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          el.author.toLowerCase().includes(authorFilter.toLowerCase())
      );
    }
  };

  const highlightMatch=(text,filter)=>{
    if(!filter)return text
    const regExp = new RegExp(`(${filter})`,'gi')
    return text.split(regExp).map((el,i)=>{
      if(el.toLowerCase()===filter.toLowerCase()){
        return <span className='highlight' key={i}>{el}</span>
      }else{
        return <span key={i}>{el}</span>
      }
    })

  }

  return (
    <div className="book-list app-block">
      <h1>BookList</h1>
      {filterBooks().length ? (
        filterBooks().map((el, i) => (
          <li key={el.id}>
            <div className="book-info">
              {++i}. {highlightMatch(el.title, titleFilter)} by <b>{highlightMatch(el.author, authorFilter)}</b> ({el.source})
            </div>
            <div className="book-actions">
              {el?.isFav ? (
                <BsBookmarkFill
                  className="star-icon"
                  onClick={() => handleFav(el.id)}
                />
              ) : (
                <BsBookmark
                  className="star-icon"
                  onClick={() => handleFav(el.id)}
                />
              )}
              <button onClick={() => deleteBooks(el.id)}>del</button>
            </div>
          </li>
        ))
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
}

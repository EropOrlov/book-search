import {
  setTitleReducer,
  selectFilterTitle,
  setAuthorReducer,
  selectFilterAuthor,
  setFavReducer,
  selectFilterFav,
  resetFilters,
} from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const title = useSelector(selectFilterTitle);
  const author = useSelector(selectFilterAuthor);
  const fav = useSelector(selectFilterFav);

  const handleTitleInputChange = (e) => {
    dispatch(setTitleReducer(e.target.value));
  };
  const handleAuthorInputChange = (e) => {
    dispatch(setAuthorReducer(e.target.value));
  };
  const handleFavInputChange = () => {
    dispatch(setFavReducer());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="filter app-block">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleInputChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={handleAuthorInputChange}
          />
        </div>
        <div className="filter-group">
          <p>Only Fav:</p>
          <input
            type="checkbox"
            value={fav}
            onChange={()=>handleFavInputChange()}
          />
        </div>
          <button onClick={handleResetFilters}>Reset</button>
      </div>
    </div>
  );
}

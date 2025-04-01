import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div>
      <input
        type="text"
        placeholder="Find conacts be name"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={css.searchBox}
      />
    </div>
  );
}

import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selector";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const filterId = useId();

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={style.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={style.input}
        value={filter}
        type="text"
        id={filterId}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;

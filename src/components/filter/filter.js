import s from './filter.module.scss';

const Filter = ({ filter, handleChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;

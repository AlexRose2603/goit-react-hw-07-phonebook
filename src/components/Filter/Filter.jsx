import { FilterForm, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactFilter } from 'store/selectors';
import { filterContacts } from 'store/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactFilter);
  const onFilter = filter => {
    dispatch(filterContacts(filter.target.value));
  };
  return (
    <FilterForm>
      <Input
        name="filter"
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={onFilter}
      ></Input>
    </FilterForm>
  );
};

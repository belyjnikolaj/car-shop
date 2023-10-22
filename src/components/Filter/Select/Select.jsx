import { createOptions } from 'helpers/createOptions';
import { Label, SelectInput, SelectWrapper } from './Select.styled';
import makes from 'makes.json';
import { priceArray } from 'helpers/priceOptions';
import { removeDuplicatesAndSort } from 'helpers/removeDuplicatesAndSort';

const Select = ({ textLabel, name, width, handleChange, value, brand }) => {
  const sortMakes = removeDuplicatesAndSort(makes);
  const brandOptions = createOptions(sortMakes);
  const priceOptions = createOptions(priceArray);

  return (
    <SelectWrapper width={width}>
      <Label htmlFor={name}>{textLabel}</Label>
      <SelectInput
        id={name}
        options={brand ? brandOptions : priceOptions}
        className="custom-select custom-select-menu"
        onChange={handleChange}
        value={value}
        styles={{
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: 'transform 0.5s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
          }),
          control: (base, state) => ({
            ...base,
            backgroundColor: 'var(--input-bg-color)',
            borderRadius: '14px',
            border: 'none',
            output: 'none',
            height: '48px',
          }),
        }}
      />
    </SelectWrapper>
  );
};

export default Select;

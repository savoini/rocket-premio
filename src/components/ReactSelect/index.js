import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import Select from 'react-select';

function ReactSelect({ name, options, multiple }) {
  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);
  const [value, setValue] = useState(defaultValue);

  function getValue() {
    if (!multiple) {
      return value;
    }

    return value.reduce((res, item) => {
      res.push(item.value);
      return res;
    }, []);
  }

  return (
    <>
      <Select
        name="techs"
        options={options}
        isMulti={multiple}
        value={value}
        onChange={setValue}
        ref={() => registerField({ name: fieldName, ref: getValue })}
      />

      {error && <span>{error}</span>}
    </>
  );
}

ReactSelect.defaultProps = {
  multiple: false,
};

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ReactSelect;

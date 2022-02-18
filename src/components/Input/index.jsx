import React, { Fragment } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function InputComponent({
  field,
  form: { touched, errors },
  keyItem,
  wrapperClass,
  isSearchInput = false,
  errorMessage = '',
  required = true,
  innerRef,
  successMessage,
  ...props
}) {
  return (
    <div className='input'>
      <div className={`input__numberic ${wrapperClass}`}>
        {!isSearchInput ? (
          <Fragment>
            {keyItem && <span className='key'>{keyItem}.</span>}
            {required ? (
              <input required ref={innerRef} {...field} {...props} />
            ) : (
              <input ref={innerRef} {...field} {...props} />
            )}
          </Fragment>
        ) : (
          <Search {...field} {...props} />
        )}
      </div>
      {<span className='required'>{errorMessage[field.name]}</span>}
      {errors[field.name] && touched[field.name] && (
        <span className='required'>{errors[field.name]}</span>
      )}
      {<div className='success'>{successMessage}</div>}
    </div>
  );
}

export default InputComponent;

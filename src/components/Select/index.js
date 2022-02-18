import React, { useMemo } from 'react';
import { Dropdown, Menu, Select, Button } from 'antd';
import ArrowDown from 'components/SVG/arrow-down';
const { Item } = Menu;

const { Option } = Select;

function SelectComponent({
  languageChangeRef,
  field,
  form,
  dropdownClassName,
  options = [],
  wrapperClass = '',
  labelTitle,
  required,
  active,
  onChangeLanguage,
  ...props
}) {
  const menu = useMemo(
    () => (
      <Menu>
        {options?.map((item, index) => (
          <Item
            key={index}
            value={item.key}
            label={item.label}
            onClick={() => onChangeLanguage(item.key)}
            className={active.key === item.key && 'active'}
          >
            {item.value}
          </Item>
        ))}
      </Menu>
    ),
    [options, onChangeLanguage]
  );

  return (
    <div className={`select ${wrapperClass}`}>
      {options?.length && (
        <Dropdown overlay={menu} placement='bottomRight' {...props}>
          <Button>
            {active.value} <ArrowDown />
          </Button>
        </Dropdown>
      )}
    </div>
  );
}

export default SelectComponent;

import React, { Fragment, useContext } from 'react';
import { Modal } from 'antd';
import iconClose from '../../resources/images/close_modal.png';
import iconCloseDark from '../../resources/images/close_modal_dark.png';
import { ThemeContext } from 'hooks/useDarkMode';

function ModalComponent({
  title,
  content,
  onClose,
  showCloseIcon = true,
  wrapClass,
  width = null,
  ...props
}) {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  return (
    <Modal
      footer={null}
      wrapClassName={'modal ' + wrapClass}
      closable={false}
      width={width ? width : 1114}
      {...props}
    >
      <Fragment>
        {showCloseIcon && (
          <button onClick={onClose} type='button' className='ant-modal-close'>
            <span className='ant-modal-close-x'>
              <img src={isDarkMode ? iconClose : iconCloseDark} alt='close' />
            </span>
          </button>
        )}
        <div className='modal__wrap'>{content}</div>
      </Fragment>
    </Modal>
  );
}

export default ModalComponent;

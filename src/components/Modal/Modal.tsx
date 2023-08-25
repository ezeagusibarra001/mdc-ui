import React, { ReactNode } from 'react';
import styles from './Modal.module.css';
import Icon from '../Icon/Icon';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
    return isOpen ? (
        <div className={`${styles['modal-overlay']}`}>
            <div className={styles.modal}>
                <button className={styles['close-button']} onClick={onClose}>
                    <Icon name="cross" color='black' />
                </button>
                <div className={styles['modal-content']}>{children}</div>
            </div>
        </div>
    ) : null;
};


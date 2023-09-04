import React, { ReactNode } from 'react';
import styles from './Modal.module.css';
import Icon from '../Icon/Icon';
import { get } from '../../constants/Colors';
import { Color, SHADES } from '../../types/types';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    bgColor?: Color;
    shade?: SHADES;
    bgImage?: string;
}

export default function Modal({ children, isOpen, onClose, bgColor = 'white', shade = "DEFAULT", bgImage }: ModalProps) {
    const background = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" } : { backgroundColor: get(bgColor, shade) };
    return isOpen ? (
        <div className={`${styles['modal-overlay']}`}>
            <div style={background} className={styles.modal}>
                <button className={styles['close-button']} onClick={onClose}>
                    <Icon name="cross" color='black' />
                </button>
                <div className={styles['modal-content']}>{children}</div>
            </div>
        </div>
    ) : null;
};


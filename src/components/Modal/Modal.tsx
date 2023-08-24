import React, { useState, ReactNode, useEffect } from 'react';
import styles from './Modal.module.css'; // Importa el módulo CSS

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isOpen ? (
        <div className={`${styles['modal-overlay']} ${isMobile ? styles.mobile : ''}`}>
            <div className={styles.modal}>
                <button className={styles['close-button']} onClick={onClose}>
                    X
                </button>
                <div className={styles['modal-content']}>{children}</div>
            </div>
        </div>
    ) : null;
};


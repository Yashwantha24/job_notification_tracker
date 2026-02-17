import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-text/40 backdrop-blur-sm">
            <div className="bg-off-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col pt-6 pb-6 border border-primary-text/10">
                <div className="flex justify-between items-center px-6 mb-4">
                    <h3 className="text-2xl font-serif font-bold text-primary-text">{title}</h3>
                    <button onClick={onClose} className="text-primary-text/60 hover:text-accent-red transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-2 custom-scrollbar">
                    {children}
                </div>

                {footer && (
                    <div className="border-t border-primary-text/10 mt-6 pt-4 px-6 flex justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;

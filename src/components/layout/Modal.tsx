import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  highlightedCode: string;
}

export default function Modal({
  isModalOpen,
  highlightedCode,
  setIsModalOpen,
}: ModalProps) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handlePreventClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          key='modal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{ pointerEvents: 'auto' }}
          className='fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-[#000000db] w-full h-full z-[60] backdrop-blur-md'
          onClick={() => setIsModalOpen(false)}>
          <motion.div
            key='modal-content'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='relative w-2/3 rounded-2xl p-6 translate-y-0'
            onClick={handlePreventClick}>
            <div
              className='modal-content custom-scrollbar w-full max-h-[90vh] overflow-auto rounded-lg'
              dangerouslySetInnerHTML={{ __html: highlightedCode }}></div>
            <Cross2Icon
              onClick={() => setIsModalOpen(false)}
              className='absolute top-6 right-[-20px] text-white w-8 h-8 cursor-pointer'
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

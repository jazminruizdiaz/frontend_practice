interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal">
      <h2 className="modal__title">Modal</h2>
      <p className="modal__content">Modal loaded with React.lazy </p>
      <button className="modal__action" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

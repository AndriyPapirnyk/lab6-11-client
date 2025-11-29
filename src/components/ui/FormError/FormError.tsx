import './FormError.scss';

interface FormErrorProps {
  message: string;
  onClose?: () => void;
}

export default function FormError({ message, onClose }: FormErrorProps) {
  return (
    <div className="form-error">
      <span className="form-error__title">Oh snap!</span>
      <span className="form-error__message">{message}</span>
      {onClose && (
        <button className="form-error__close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
}

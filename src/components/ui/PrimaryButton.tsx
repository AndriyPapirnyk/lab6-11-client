import './PrimaryButton.scss';

export default function PrimaryButton({ type = 1, text = 'PrimaryButton' }: { type?: number; text?: string }) {
    const btnClass = type === 1 ? 'primary-btn bright' : 'primary-btn dark';
  return (
    <button className={btnClass}>
        {text}
    </button>
  )
}

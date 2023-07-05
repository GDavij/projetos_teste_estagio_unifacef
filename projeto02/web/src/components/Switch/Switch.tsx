import switchStyle from './switch.module.css';
interface SwitchProps {
  checked: boolean;
  toggleCheck: () => void;
}
export default function Switch({ checked, toggleCheck }: SwitchProps) {
  return (
    <div className={switchStyle['switch-wrapper']}>
      <input
        type="checkbox"
        className={switchStyle.switch}
        checked={checked}
        onClick={toggleCheck}
      />
    </div>
  );
}

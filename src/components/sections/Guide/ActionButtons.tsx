import slideArrow2 from '@/assets/slide-arrow-2.svg';

type ActionButtonsProps = {
  onLeftArrowButtonClick: () => void;
  onRightArrowButtonClick: () => void;
};

function ActionButtons(props: ActionButtonsProps) {
  const { onLeftArrowButtonClick, onRightArrowButtonClick } = props;
  return (
    <div className="flex gap-[10px]">
      <button onClick={onLeftArrowButtonClick} className="scale-x-[-1]">
        <img src={slideArrow2} />
      </button>
      <button onClick={onRightArrowButtonClick} className="scale-x-[1]">
        <img src={slideArrow2} />
      </button>
    </div>
  );
}

export default ActionButtons;

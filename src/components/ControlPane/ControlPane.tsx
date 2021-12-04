import './ControlPane.css';
import {Dispatch, SetStateAction} from 'react';

type Props = {
  id: number,
  isEditingMode: boolean,
  setIsEditingMode: Dispatch<SetStateAction<boolean>>;
  layoutClassName?: string,
}

export default function ControlPane(props: Props): JSX.Element {
  const {isEditingMode, setIsEditingMode, layoutClassName} = props;

  return (
    <div className={`${layoutClassName ? layoutClassName : ''} control-pane`}>
      <button
        className="control-pane__button control-pane__button-delete"
        type="button"
        onClick={() => {
          // TODO: dispatch delete action
        }}
      >
        Delete contact
      </button>
      <button
        className="control-pane__button control-pane__button-edit"
        type="button"
        onClick={() => {
          setIsEditingMode(!isEditingMode);
          if (isEditingMode) {
            // TODO: dispatch saving the update
          }
        }}
      >
        {isEditingMode ? 'Save': 'Edit'}
      </button>
    </div>
  );
}

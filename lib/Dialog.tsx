import { Dialog, DialogPanel } from "@headlessui/react";
import styles from "./index.module.css";
import { useState } from "react";
import DateTimePickerContainer from "./components/DateTimePickerContainer";
import { DateProvider } from "./contexts/DateContext";

interface Props {
  triggerButton: React.ReactNode;
  value: Date;
  onChange: (val: Date) => void;
}

const DateTimeDialog = ({ triggerButton, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DateProvider date={value} setDate={onChange}>
      <div onClick={() => setIsOpen(true)}>{triggerButton}</div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={`${styles.container}`}
      >
        <DialogPanel className={`${styles.dialog}`}>
          <DateTimePickerContainer />
        </DialogPanel>
      </Dialog>
    </DateProvider>
  );
};

export default DateTimeDialog;

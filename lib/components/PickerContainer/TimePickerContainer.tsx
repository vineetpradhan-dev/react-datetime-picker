import { useDateContext } from "../../contexts/DateContext";
import Picker from "../Picker";
import styles from "./index.module.css";

const TimePicker = () => {
  const { date, setDate } = useDateContext();

  return (
    <div className={`${styles.container}`}>
      <Picker
        selectedUnit={date.getHours()}
        setSelectedUnit={(val: number) =>
          setDate(new Date(date?.setHours(val)))
        }
        initialUnit={0}
        endUnit={23}
        label="Hour"
      />
      <Picker
        selectedUnit={date.getMinutes()}
        setSelectedUnit={(val: number) =>
          setDate(new Date(date?.setMinutes(val)))
        }
        initialUnit={0}
        endUnit={59}
        label="Minute"
      />
      <Picker
        selectedUnit={date.getSeconds()}
        setSelectedUnit={(val: number) =>
          setDate(new Date(date?.setSeconds(val)))
        }
        initialUnit={0}
        endUnit={59}
        label="Second"
      />
    </div>
  );
};

export default TimePicker;

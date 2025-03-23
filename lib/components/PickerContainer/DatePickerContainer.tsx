import { useDateContext } from "../../contexts/DateContext";
import UnitPicker from "../Picker";
import styles from "./index.module.css";
import { useMemo } from "react";

const DatePicker = () => {
  const { date, setDate } = useDateContext();

  const endDay = useMemo(() => {
    const res = [1, 3, 5, 7, 8, 10, 12].includes(date.getMonth() + 1)
      ? 31
      : date.getMonth() + 1 === 2
      ? (date.getMonth() + 1) % 4
        ? 28
        : 29
      : 30;

    if (date.getDate() > res) setDate(new Date(date?.setDate(res)));

    return res;
  }, [date.getMonth(), date.getFullYear()]);

  return (
    <div className={`${styles.container}`}>
      <UnitPicker
        selectedUnit={date.getDate()}
        setSelectedUnit={(val: number) => setDate(new Date(date?.setDate(val)))}
        endUnit={endDay}
        label="Date"
      />
      <UnitPicker
        selectedUnit={date.getMonth() + 1}
        setSelectedUnit={(val: number) =>
          setDate(new Date(date?.setMonth(val - 1)))
        }
        endUnit={12}
        label="Month"
      />
      <UnitPicker
        selectedUnit={date.getFullYear()}
        setSelectedUnit={(val: number) =>
          setDate(new Date(date?.setFullYear(val)))
        }
        initialUnit={1990}
        endUnit={new Date().getFullYear()}
        label="Year"
      />
    </div>
  );
};

export default DatePicker;

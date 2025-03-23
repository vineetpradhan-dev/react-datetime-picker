import { useEffect, useMemo, useRef } from "react";
import styles from "./index.module.css";

interface Props {
  initialUnit?: number;
  endUnit: number;
  selectedUnit: number;
  setSelectedUnit: (val: number) => void;
  label: string;
}

const Picker = ({
  initialUnit = 1,
  endUnit,
  selectedUnit,
  setSelectedUnit,
  label,
}: Props) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const unitsArr = useMemo(() => {
    return [
      "",
      "",
      ...[...Array(endUnit - initialUnit + 1)].map((_, i) => i + initialUnit),
      ,
      "",
      "",
    ];
  }, [initialUnit, endUnit]);

  useEffect(() => {
    if (selectedUnit >= initialUnit && selectedUnit <= endUnit) {
      scrollerRef.current?.scrollTo({
        top: (selectedUnit - initialUnit) * 40,
        behavior: "instant",
      });
    }
  }, []);

  const onScrollEndHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const container = e.target as HTMLDivElement;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const selectedEle = document.elementFromPoint(centerX, centerY);
    setSelectedUnit(Number(selectedEle?.textContent));
  };

  const onWheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLDivElement;

    if (e.deltaY > 0 && selectedUnit < endUnit) {
      container.scrollBy({ top: 40, behavior: "smooth" });
      setSelectedUnit(selectedUnit + 1);
    } else if (e.deltaY < 0 && selectedUnit > initialUnit) {
      container.scrollBy({ top: -40, behavior: "smooth" });
      setSelectedUnit(selectedUnit - 1);
    }
  };

  const unitInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (Number(val) <= endUnit && Number(val) >= 0) {
      setSelectedUnit(Number(val) || 0);
      if (Number(val) >= initialUnit && Number(val) <= endUnit) {
        scrollerRef.current?.scrollTo({
          top: (Number(val) - initialUnit) * 40,
          behavior: "instant",
        });
      }
    }
  };

  return (
    <div className={`${styles.container}`}>
      <span className={`${styles.label}`}>{label}</span>
      <input
        type="text"
        className={`${styles.input}`}
        onChange={unitInputChangeHandler}
        value={selectedUnit || ""}
      />
      <div className={`${styles.scrollerWrapper}`}>
        <div className={`${styles.selectedUnit}`} />
        <div
          className={`${styles.scroller}`}
          ref={scrollerRef}
          onScrollEnd={onScrollEndHandler}
          onWheel={onWheelHandler}
        >
          {unitsArr.map((val, index) => (
            <div className={`${styles.unit}`} key={index}>
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Picker;

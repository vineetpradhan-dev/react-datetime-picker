import {
  Tab as HUITab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import styles from "./index.module.css";
import { Fragment } from "react/jsx-runtime";
import DatePicker from "../PickerContainer/DatePickerContainer";
import TimePicker from "../PickerContainer/TimePickerContainer";
import { useDateContext } from "../../contexts/DateContext";

const DateTimePickerContainer = () => {
  const { date } = useDateContext();

  return (
    <div className={`${styles.container}`}>
      <TabGroup className={`${styles.tabContainer}`}>
        <TabList className={`${styles.tabs}`}>
          <HUITab className={`${styles.tab}`}>Date</HUITab>
          <HUITab className={`${styles.tab}`}>Time</HUITab>
        </TabList>
        <TabPanels as={Fragment}>
          <TabPanel as={Fragment}>
            <DatePicker />
          </TabPanel>
          <TabPanel as={Fragment}>
            <TimePicker />
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <div className={`${styles.datePreview}`}>{date?.toLocaleString()}</div>
    </div>
  );
};

export default DateTimePickerContainer;

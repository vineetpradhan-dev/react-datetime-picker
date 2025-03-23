import { useState } from "react";
import { DateTimePickerDialog } from "react-datetime-picker";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      {date.toLocaleString()}
      <DateTimePickerDialog
        value={date}
        onChange={setDate}
        triggerButton={<>Press the button</>}
      />
    </>
  );
};

export default App;

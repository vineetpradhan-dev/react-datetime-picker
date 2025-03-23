# DateTime Picker Dialog

A simple DateTime Picker for React.

## Installation

```sh
npm install @vineetpradhan-dev/react-datetime-picker
```

or

```sh
yarn add @vineetpradhan-dev/react-datetime-picker
```

## Usage

```jsx
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
```

## Props

### `DateTimePickerDialog`

| Prop            | Type      | Description                           |
| --------------- | --------- | ------------------------------------- |
| `value`         | Date      | The selected date and time            |
| `onChange`      | Function  | Callback when the date/time changes   |
| `triggerButton` | ReactNode | The button element to open the dialog |

## License

[MIT](https://github.com/vineetpradhan-dev/react-datetime-picker/blob/main/LICENSE)

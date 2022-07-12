import DatePicker, { registerLocale } from "react-datepicker";
import CalendarContents from "./components/CalendarContents";
import CalendarHeader from "./components/CalendarHeader";
import ko from "date-fns/locale/ko";

import "./Calendar.scss";

registerLocale("ko", ko);

interface Props {
  date: Date;
  setDate: (selected: Date) => void;
}

const Calendar = ({ date, setDate }: Props) => {
  const onChangeDate = (date: Date | null) => {
    if (date) {
      setDate(date);
    }
  };

  return (
    <div className="calendar-view">
      <DatePicker
        selected={date}
        onChange={onChangeDate}
        renderCustomHeader={(args) => <CalendarHeader {...args} />}
        renderDayContents={(day) => <CalendarContents day={day} />}
        disabledKeyboardNavigation
        inline
        locale={ko}
      />
    </div>
  );
};

export default Calendar;

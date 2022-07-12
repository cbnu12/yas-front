import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import dayjs from "dayjs";
import styles from "./CalendarHeader.module.scss";

const CalendarHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  const currentInfo = dayjs(date).format("YYYY년 MM월");

  return (
    <div className={styles.header}>
      <div className={styles.year_month}>{currentInfo}</div>
      <div className={styles.prev_next}>
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          ◀️
        </button>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          ▶️
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;

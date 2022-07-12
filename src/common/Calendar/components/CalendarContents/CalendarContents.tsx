import "./CalendarContents.scss";

interface Props {
  day: number;
}

const CalendarContents = ({ day }: Props) => {
  return (
    <div className="calendar-contents">
      <div className="calendar-contents__day">{day}</div>
    </div>
  );
};

export default CalendarContents;

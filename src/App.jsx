import "./App.css";
import "react-day-picker/dist/style.css";
import dayjs from "dayjs";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

function App() {
  const [selected, setSelected] = useState();
  const [msg, setMsg] = useState("");

  const difference = dayjs(selected).diff(new Date(), "d") + 1;

  const manageTime = (e) => {
    if (dayjs(e).diff(new Date(), "h") <= 0) {
      setMsg("Trata de seleccionar un dia posterior a hoy.");
      setSelected(null);
      return;
    }
    setMsg("");
    setSelected(dayjs(e).format("dddd, MMMM D, YYYY h:mm A"));
  };

  return (
    <>
      <div>
        Actual date: {dayjs(new Date()).format("dddd, MMMM D, YYYY h:mm A")}
      </div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(e) => manageTime(e)}
      />
      <div className="selectionDesign">
        {selected && (
          <>
            <div>Selected date: {selected}</div>
            <div>
              Remaining time:{" "}
              {difference === 1 ? "tomorrow" : `${difference} days.`}
            </div>
          </>
        )}
        {msg && <div>{msg}</div>}
      </div>
    </>
  );
}

export default App;

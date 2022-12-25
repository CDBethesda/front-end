import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./DatePicker.css";

export default function DatePickerCustom() {
    const [startDate, setStartDate] = useState(new Date());
    // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    //     <button className="example-custom-input" onClick={onClick} ref={ref}>
    //         {value}
    //     </button>
    // ));
    return (
        <div className={'picker-touched'}>
            <ReactDatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date)}
            />
        </div>
    );
}

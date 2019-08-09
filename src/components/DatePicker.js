import React from "react";
import { DatePicker } from "@material-ui/pickers";

class MyDatePicker extends React.Component {
  render() {
    return (
      <DatePicker
        views={["year"]}
        label="Year"
        helperText="With min and max"
        value={"2019"}
        // onChange={handleDateChange}
      />
    );
  }
}

export default MyDatePicker;

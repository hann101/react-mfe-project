import { useState } from "react";
import CommonPopup from "./CommonPopup";
import * as common from "./confirm";
function SamplePopup() {
  const [openPopup, setOpenPopup] = useState(false);

  /**
   * popup handler
   * */
  function handleClickOpen() {
    setOpenPopup(true);
  }

  function handleClose() {
    setOpenPopup(false);
  }

  /**
   * alert example handler
   * */
  function handleAlertOpen() {
    common
      .alert("삭제되었습니다.")
      .then(() => console.log("###samplePopup alert confirm"));
  }

  /**
   * confirm example handler
   * */
  function handleNewConfirmOpen() {
    common
      .confirm("Are you sure?")
      .then(() => console.log("###samplePopup confirm confirm"))
      .catch(() => console.log("###samplePopup confirm error"));
  }

  return (
    <>
      <a href="#" onClick={handleClickOpen}>
        <h2>공통 팝업 예제</h2>
      </a>
      <a href="#" onClick={handleAlertOpen}>
        <h2>Alert 예제</h2>
      </a>
      <a href="#" onClick={handleNewConfirmOpen}>
        <h2>Confirm 예제</h2>
      </a>

      <CommonPopup openPopup={openPopup} handleClose={handleClose}>
        {/*사용할 page render*/}
      </CommonPopup>
    </>
  );
}

export default SamplePopup;

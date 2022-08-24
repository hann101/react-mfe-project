import React, { useEffect } from "react";
import axios from "axios";
import axiosClient from "../../utils/axiosClient";

function LandingPage() {
  // axios.defaults.headers.common["Authorization"] = "ttest";

  // axiosClient
  //   .get("/admin/test")
  //   .then(function (response) {
  //     // 성공 핸들링
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // 에러 핸들링
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // 항상 실행되는 영역
  //   });
  return (
    <>
      <div>LandingPage</div>
      <p>{process.env.REACT_APP_HOST}</p>
      <p>{process.env.REACT_APP_ABC}</p>
    </>
  );
}

export default LandingPage;

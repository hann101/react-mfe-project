import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosClient from "../../utils/axiosClient";
import { setLocale } from "yup";
import * as yup from "yup";

function Loginpage() {
  //Input validation check
  let schema = yup.object().shape({
    smartuxId: yup.string().required(),
    smartuxPwd: yup.string().required()
  });

  useEffect(componentDidMount, []);

  function componentDidMount() {
    document.body.style.backgroundImage = "url(images/admin/login/back6.gif)";
  }

  const [smartuxId, setSmartuxId] = useState("");
  const [smartuxPwd, setSmartuxPwd] = useState("");
  const [response, setResponse] = useState(null);

  const onSmartuxIdHandler = event => {
    setSmartuxId(event.currentTarget.value);
  };
  const onSmartuxPwdHandler = event => {
    setSmartuxPwd(event.currentTarget.value);
  };
  const onSummitHandler = event => {
    event.preventDefault();

    console.log("smartuxId: " + smartuxId);
    console.log("smartuxPwd: " + smartuxPwd);

    let data = {
      c: smartuxId,
      smartuxPwd: smartuxPwd
    };

    // //isValid schema에 정의된 내용을 기반으로 유효성 검사.
    // schema
    //   .validate(data)
    //   // .then(function (valid) {
    //   //   console.log("유효성 검사 성공 : " + data);
    //   // })
    //   .catch(function (err) {
    //     console.log(err.name);
    //     console.log(err.errors);
    //     // smartuxId is a required field']

    //     // alert("유효성 검사 실패");
    //     alert("아이디와 비밀번호 미기제");
    //   });

    //yup.object().shape().cast()는 값을 넣어서 json형태로 나오게 할 수 잇음.
    // let ex = schema.cast({
    //   smartuxId: "jimmy",
    //   smartuxPwd: "24"
    // });

    // console.log("schema.cast()" + ex);

    // axios
    //   .post("/admin/login/login", null, { params: data })
    //   .then(function (response) {
    //     console.log("성공");
    //   })
    //   .catch(error => console.log(error));

    // axiosClient
    //   .post("/admin/login/login", JSON.stringify(data), {
    //     //header 추가하는 경우
    //     headers: { "Content-Type": "application/json" }
    //   })
    //   .then(res => {
    //     console.log("res.data.accessToken : " + JSON.stringify(res.data));
    //     // axios.defaults.headers.common["Authorization"] = "Bearer " + test;
    //   })
    //   .catch(ex => {
    //     console.log("login requset fail : " + ex);
    //   })
    //   .finally(() => {
    //     console.log("login request end");
    //   });

    axiosClient
      .post("/admin/login", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        let accessToken = res.data.authorization;

        console.log(accessToken);
        if (accessToken != null) {
          console.log("shitt");
          // localStorage.setItem("AccessToken", accessToken);
          window.location.href = "/";
        } else {
          //
        }
        setResponse(res.data);
      })
      .catch(ex => {
        // console.log("login requset fail : " + ex);
      })
      .finally(() => {
        // console.log("login request end");
      });
  };

  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    // console.log(response);
  });
  return (
    <div align="center">
      <table
        background="images/admin/login/upback.gif"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        height="121"
        width="100%"
      >
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p>&nbsp;</p>
      <table
        bgcolor="white"
        border="0"
        cellSpacing="2"
        height="320"
        width="510"
      >
        <tbody>
          <tr>
            <td align="center">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                height="310"
                width="499"
              >
                <tbody>
                  <tr height="50">
                    <td colSpan="4">
                      <img
                        src="images/admin/login/IPTV01.gif"
                        style={{ verticalAlign: "top" }}
                        height="45"
                        hspace="0"
                        vspace=""
                        width="289"
                      />
                    </td>
                    <td></td>
                  </tr>
                  <tr bgcolor="#5599CC" height="3">
                    <td colSpan="5"></td>
                  </tr>
                  <tr bgcolor="#FFFFFF" height="1">
                    <td colSpan="5"></td>
                  </tr>
                  <tr bgcolor="#5599CC" height="1">
                    <td colSpan="5"></td>
                  </tr>
                  <tr height="180">
                    <td colSpan="5">
                      <img
                        src="images/admin/login/logo.gif"
                        style={{ verticalAlign: "top" }}
                        height="180"
                        hspace="0"
                        vspace=""
                        width="499"
                      />
                    </td>
                  </tr>
                  <tr height="5">
                    <td colSpan="5"></td>
                  </tr>
                  <tr height="29">
                    <td colSpan="5" background="images/admin/login/copy.gif">
                      <table
                        background="images/admin/login/copy.gif"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td width="110"></td>
                            <td>
                              <img
                                src="images/admin/login/ID.gif"
                                height="17"
                                width="49"
                                align="absmiddle"
                              />
                            </td>
                            <td>
                              <input
                                name="smartux_id"
                                maxLength="12"
                                style={{ fontSize: "12px" }}
                                tabIndex="1"
                                type="text"
                                value={smartuxId}
                                onChange={onSmartuxIdHandler}
                              />
                            </td>
                            <td>
                              <img
                                src="images/admin/login/password.gif"
                                height="17"
                                width="63"
                                align="absmiddle"
                              />
                            </td>
                            <td>
                              <input
                                name="smartux_pwd"
                                maxLength="20"
                                style={{ fontSize: "12px" }}
                                tabIndex="2"
                                type="password"
                                value={smartuxPwd}
                                onChange={onSmartuxPwdHandler}
                              />
                            </td>
                            <td>
                              <img
                                src="images/admin/login/loginbutton.gif"
                                tabIndex="3"
                                height="20"
                                width="45"
                                align="absmiddle"
                                onClick={onSummitHandler}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr height="5">
                    <td colSpan="5"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Loginpage;

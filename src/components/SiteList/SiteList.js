import CommonList from "../List/CommonList";
import { useEffect, useState } from "react";
import SearchForm from "../Search/SearchForm";
import SearchSelect from "../Search/SearchSelect";
import SearchInputBar from "../Search/SearchInputBar";
import SearchSubmitButton from "../../components/Search/SearchSubmitButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axiosClient from "../../utils/axiosClient";

function SiteList() {
  const test = axiosClient.get("amims/hotvod/hello");
  console.log(test);

  const columns = [
    {
      id: "site_id",
      label: "선택",
      width: "15"
    },
    {
      id: "site_name",
      label: "사이트명",
      width: "10"
    },
    {
      id: "site_url",
      label: "사이트URL	",
      width: "20"
    },
    {
      id: "site_img_tv",
      label: "사이트 로고",
      width: "10"
    },
    {
      id: "reg_dt",
      label: "등록일시",
      width: "20"
    },
    {
      id: "reg_id",
      label: "등록아디",
      width: "20"
    }
  ];

  const [pageNum, setPageNum] = useState(0);
  const [findName, setFindName] = useState("");
  const [findValue, setFindValue] = useState("");
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);

  useEffect(componentDidMount, []);

  function componentDidMount() {
    document.body.style.backgroundImage = "";

    getSiteList({
      pageNum,
      findName,
      findValue
    }).then(data => {
      setList(data);
      //   setTotal(data.pageCount);
    });
  }

  return (
    <>
      <table
        border="0"
        cellPadding="15"
        cellSpacing="0"
        width="100%"
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                align="center"
              >
                <tbody>
                  <tr>
                    <td className="3_line" height="1"></td>
                  </tr>
                  <tr>
                    <td height="20"></td>
                  </tr>
                  {/*리스트 시작*/}
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td height="25">
                              <table
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td width="15">
                                      <ArrowForwardIosIcon
                                        sx={{ fontSize: 15, color: "orange" }}
                                      />
                                    </td>
                                    <td className="bold">사이트 리스트</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <CommonList
                        tableClassName="board_list"
                        column={columns}
                        data={list || []}
                        usePagination
                        total={total}
                      />
                    </td>
                  </tr>
                  {/*리스트 종료*/}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

async function getSiteList(searchParams) {
  axiosClient.get("amims/hotvod/sites").then(res => {
    console.log(res.data);
  });
}

/**
 * [GET] /hdtv_adm/admin/login/list.do : 관리자 리스트
 * */
// async function getSiteList(searchParams) {
//   try {
//     //api 호출 결과 sample
//     const result = {
//       data: [
//         {
//           site_id: "S0001",
//           site_name: "11",
//           site_url: "411",
//           site_img_tv: null,
//           reg_dt: "2021-01-12T15:28:36",
//           reg_id: "admin"
//         },
//         {
//           site_id: "S0004",
//           site_name: "google",
//           site_url: "www.google.co.kr",
//           site_img_tv: null,
//           reg_dt: "2022-04-28T15:21:50",
//           reg_id: "admin"
//         },
//         {
//           site_id: "H0001",
//           site_name: "naver",
//           site_url: "www.naver.com",
//           site_img_tv: "www.naver.com",
//           reg_dt: "2022-01-18T18:48:54",
//           reg_id: "admin"
//         },
//         {
//           site_id: "S0002",
//           site_name: "naver",
//           site_url: "www.naver.com",
//           site_img_tv: null,
//           reg_dt: "2021-11-02T16:40:11",
//           reg_id: "admin"
//         },
//         {
//           site_id: "S0003",
//           site_name: "kakao",
//           site_url: "www.kakao.com",
//           site_img_tv: null,
//           reg_dt: "2021-11-02T16:40:26",
//           reg_id: "admin"
//         }
//       ],
//       dataType: "LIST",
//       dataCount: 5
//     };
//     return result.data;
//   } catch (e) {
//     return {};
//   }
// }

export default SiteList;

import CommonList from "../List/CommonList";
import { useEffect, useState } from "react";
import SearchForm from "../Search/SearchForm";
import SearchSelect from "../Search/SearchSelect";
import SearchInputBar from "../Search/SearchInputBar";
import SearchSubmitButton from "../../components/Search/SearchSubmitButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axiosClient from "../../utils/axiosClient";
import { Button } from "@material-ui/core";

function SiteList() {
  //   const test = axiosClient.get("amims/hotvod/hello");
  //   console.log(test);

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
      label: "등록아이디",
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
      //   console.log("testsetsetetset");
      //   console.log(data.list);
      setList(data.list);
      setTotal(data.pageCount);
    });
  }

  /**
   * search handler
   * */
  function handleSearch() {
    const conditions = {
      pageNum: 0, //search시 pageNum은 '0'부터 조회
      findName: findName,
      findValue: findValue
    };

    getSiteList(conditions).then(data => {
      setList(data.list);
      setTotal(data.pageCount);
    });
  }

  function handleChangeSrchKey(value) {
    setFindName(value);
  }

  function handleChangeFindValue(value) {
    setFindValue(value);
  }

  /**
   * pagination handler
   * */
  function handleChangePage(page) {
    setPageNum(Number(page));

    const conditions = {
      pageNum: Number(page),
      findName,
      findValue
    };

    getSiteList(conditions).then(data => {
      setList(data.list);
      setTotal(data.pageCount);
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
                    <td>
                      <SearchForm
                        className="search_table"
                        onSubmit={handleSearch}
                      >
                        <SearchSelect
                          defaultValue="USER_ID"
                          name="findName"
                          options={[{ label: "사이트", value: "site_id" }]}
                          onChange={handleChangeSrchKey}
                        />
                        <SearchInputBar
                          name="findValue"
                          value={findValue}
                          onChange={handleChangeFindValue}
                        />
                        <SearchSubmitButton />
                      </SearchForm>
                    </td>
                  </tr>
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
                        pageSize={10}
                        currentPage={pageNum}
                        onChangePage={handleChangePage}
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
      <Button href="/reg" variant="contained">
        등록
      </Button>
    </>
  );
}

/**
 * [GET] /hdtv_adm/admin/login/list.do : 관리자 리스트
 * */
async function getSiteList(searchParams) {
  // searchParams.
  try {
    const response = await axiosClient.get("amims/hotvod/sites", {
      params: { findValue: searchParams.findValue }
    });

    console.log("test");
    console.log(response.data.result.data);
    console.log("--------response.data.result-----");
    console.log(response.data.result.dataCount);
    console.log("--------response.data.result.dataCount-----");

    //api 호출 결과 sample
    const result = {
      data: {
        vo: {
          list: response.data.result.data,
          pageSize: 10,
          blockSize: 10,
          pageNum: 1,
          pageCount: response.data.result.dataCount,
          findName: "USER_ID",
          findValue: "test",
          start_rnum: 1,
          end_rnum: 10,
          validate: ""
        }
      }
    };

    return result.data?.vo;
  } catch (e) {
    return {};
  }
}

export default SiteList;

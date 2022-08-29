import CommonList from "../../components/List/CommonList";
import { useEffect, useState } from "react";
import SearchForm from "../../components/Search/SearchForm";
import SearchSelect from "../../components/Search/SearchSelect";
import SearchInputBar from "../../components/Search/SearchInputBar";
import SearchSubmitButton from "../../components/Search/SearchSubmitButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * list, pagination sample
 * */
function SampleList() {
  /**
   * 테이블 컬럼 init
   * */
  const columns = [
    {
      id: "user_id",
      label: "아이디",
      width: "15",
      callRenderer: rowData => viewPassword(rowData)
    },
    {
      id: "user_auth_name",
      label: "권한",
      width: "10"
      // callRenderer: (rowData) => getUserAuth(rowData.user_auth),
    },
    {
      id: "name",
      label: "이름",
      width: "10"
    },
    {
      id: "email",
      label: "이메일",
      width: "20"
    },
    {
      id: "exp_date",
      label: "만료일",
      width: "20"
      // callRenderer: (rowData => moment(rowData.exp_date).format('YYYY-MM-DD'))
    },
    {
      id: "loginfailcnt",
      label: "잠금상태"
      // callRenderer: (rowData => getLockComponent(rowData)),
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

    getAdminList({
      pageNum,
      findName,
      findValue
    }).then(data => {
      setList(data.list);
      setTotal(data.pageCount);
    });
  }

  function viewPassword(rowData) {
    return (
      <a href="#" onClick={() => alert(JSON.stringify(rowData))}>
        {rowData.user_id}
      </a>
    );
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

    getAdminList(conditions).then(data => {
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

    getAdminList(conditions).then(data => {
      setList(data.list);
      setTotal(data.pageCount);
    });
  }

  return (
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
                        options={[
                          { label: "아이디", value: "USER_ID" },
                          { label: "이름", value: "NAME" }
                        ]}
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
                                  <td className="bold">관리자 리스트</td>
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
  );
}

/**
 * [GET] /hdtv_adm/admin/login/list.do : 관리자 리스트
 * */
async function getAdminList(searchParams) {
  try {
    //api 호출 결과 sample
    const result = {
      data: {
        vo: {
          list: [
            {
              user_id: "zoom",
              name: "김용해",
              email: "zoom@medialog.co.kr",
              loginfailcnt: 0,
              exp_date: "20240708",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            },
            {
              user_id: "avengers",
              name: "avengers영화",
              email: "avengers@medialog.co.kr",
              created: "2021-09-09 13:21:54",
              loginfailcnt: 0,
              exp_date: "20240603",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            },
            {
              user_id: "shjung59",
              name: "정서현",
              email: "shjung59@lguplus.co.kr",
              created: "2021-08-05 11:24:46",
              loginfailcnt: 0,
              exp_date: "20240429",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            },
            {
              user_id: "mobiletv2021",
              name: "편성",
              email: "ccc@ccc.co.kr",
              created: "2021-07-14 11:08:06",
              loginfailcnt: 0,
              exp_date: "20240407",
              exp_day: 999,
              user_auth: "17",
              user_auth_name: "모바일tv 편성"
            },
            {
              user_id: "sejeong",
              name: "이세정",
              email: "sejeong@lguplus.co.kr",
              created: "2021-07-08 15:13:05",
              loginfailcnt: 0,
              exp_date: "20240401",
              exp_day: 999,
              user_auth: "02",
              user_auth_name: "HDTV 관리자"
            },
            {
              user_id: "prayer54",
              name: "김수용",
              email: "prayer54@lguplus.co.kr",
              created: "2021-03-31 10:00:54",
              loginfailcnt: 0,
              exp_date: "20231224",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            },
            {
              user_id: "mhjun",
              name: "전명혜",
              email: "mhjun@lguplus.co.kr",
              created: "2021-03-31 07:56:15",
              loginfailcnt: 0,
              exp_date: "20231224",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            },
            {
              user_id: "janus0411",
              name: "김동혁",
              email: "janus0411@lguplus.co.kr",
              created: "2021-03-24 10:58:59",
              loginfailcnt: 0,
              exp_date: "20231217",
              exp_day: 999,
              user_auth: "02",
              user_auth_name: "HDTV 관리자"
            },
            {
              user_id: "jinju0223",
              name: "백진주",
              email: "jinju0223@medialog.co.kr",
              created: "2021-03-03 10:49:55",
              loginfailcnt: 0,
              exp_date: "20231126",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            },
            {
              user_id: "hdtv3",
              name: "노상원",
              email: "rsw0314@lgupluspartners.co.kr",
              created: "2021-01-14 16:20:27",
              loginfailcnt: 0,
              exp_date: "20231009",
              exp_day: 999,
              user_auth: "00",
              user_auth_name: "슈퍼관리자"
            }
          ],
          pageSize: 10,
          blockSize: 10,
          pageNum: 1,
          pageCount: 41,
          findName: "USER_ID",
          findValue: "",
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

export default SampleList;

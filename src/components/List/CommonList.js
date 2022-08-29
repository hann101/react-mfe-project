import { Pagination } from "@material-ui/lab";

function CommonList({
    tableClassName,
    column,
    data = [],
    usePagination = false,
    total = 0,
    pageSize,
    currentPage,
    onChangePage,
}){

    // useEffect(componentDidMount, []);

    function handleChangePage(event, page) {
        if (onChangePage) {
            if (currentPage !== page) {
                onChangePage(page);
            }
        }
    };

    function onMouseOver(e){
        e.currentTarget.style.backgroundColor='#FFCCCC';
    }

    function onMouseOut(e){
        e.currentTarget.style.backgroundColor='';
    }

    return(
        <div>
            <table className={tableClassName}>
                <tbody>
                <tr>
                    {
                        column.map(({ id, ...colProps}) => {
                            return (
                                <th key={id} scope="col" width={colProps.width && colProps.width + '%'}>{colProps.label}</th>
                            );
                        })
                    }
                </tr>
                {
                    data ? data.map((rowData, rowNum) => {
                        return (
                            <tr key={rowNum} align="center" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                                {
                                    column.map(({id, callRenderer, ...colProps}, index) => {
                                        let cell = rowData[id];

                                        if(callRenderer) {
                                            cell = callRenderer(rowData, column[index]);
                                        }

                                        return (
                                            <td key={index}>{cell}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    }) : (
                        <tr align="center">
                            <td className="table_td_04" colSpan={column.length}>데이터가 존재 하지 않습니다.</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            {
                usePagination ?
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                        <tr>
                            <td height="5"></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <Pagination
                                    size="small"
                                    showFirstButton
                                    showLastButton
                                    color='primary'
                                    shape='rounded'
                                    count={total ? Math.ceil(total / pageSize) : 1}
                                    page={Number(currentPage || 0) || 0 + 1}
                                    onChange={handleChangePage}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    : null
            }
        </div>
    )
}

export default CommonList;
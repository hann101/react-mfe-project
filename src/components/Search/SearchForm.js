function SearchForm({ className, children, onSubmit }){
    function handleSubmit(e){
        e.preventDefault();
        onSubmit();
    }

    return(
        // 검색 시작
        <table border="0" cellPadding="0" cellSpacing="0" width="100%" className={className}>
            <tbody>
            <tr>
                <td>
                    <form id="form2" onSubmit={handleSubmit} style={{margin: '5px'}}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="280">
                            <tbody>
                            <tr>
                                <td width="10"></td>
                                { children }
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default SearchForm;
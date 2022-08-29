function SearchSelect({ defaultValue, name, value, options, onChange}){
    function handleChange(e){
        onChange(e.target.value);
    }

    return(
        <td>
        <select className="select" name={name} onChange={handleChange} style={{height: '30px'}}>
            {
                options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
        </td>
    );

}

export default SearchSelect;
function SearchInputBar({ name, value, onChange }){
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    return(
      <td>
          <input type="text" name={name} value={value || ''} size="20" style={{height: '26px'}} onChange={handleChange}/>
      </td>
    );
}

export default SearchInputBar;
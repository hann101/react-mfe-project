import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function SearchSubmitButton(){
    return(
        <td align="left">
            <Button variant="contained" color="primary"  startIcon={<ManageSearchIcon />} size="small" type={'submit'}>검색</Button>
        </td>
    )
}

export default SearchSubmitButton;
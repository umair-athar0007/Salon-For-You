import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
    { label: 'Hair Cut', year: 1994 },
    { label: 'Moustache Trim', year: 1972 },
    { label: 'Clipper Cut', year: 1974 },
    { label: 'Face Shave', year: 2008 },
    { label: 'Hair Style', year: 1957 },
    { label: "Beared Trim", year: 1993 },
    { label: 'Hair Color', year: 1994 },
    { label: 'Make Up', year: 1966 },
    { label: 'Dulha MakeUP', year: 1999 },
];
export  function ComboBox() {
    return (
        <Autocomplete
            disablePortal
            // id="combo-box-demo"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} />}
        />
    );
}
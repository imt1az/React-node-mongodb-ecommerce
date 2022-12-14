import { List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const CollapseCheckBox = (props) => {
    const [open,setOpen] = useState(props.initState);
    const [checked,setChecked] = useState([])

    const handleCollapseOpen = ()=> setOpen(!open)
    return (
        <div>
          <List>
            <ListItem onClick={handleCollapseOpen}>
               <ListItemText
               primary={props.title}
               />
                {open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/> }
            </ListItem>
           
          </List>
        </div>
    );
};

export default CollapseCheckBox;
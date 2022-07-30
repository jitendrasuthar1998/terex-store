import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'


import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
      '&$checked': {
        color: '#000',
      },
    },
    checked: {},
    wrap: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 0,
    },
    label: {
      fontSize: '.8rem',
      fontFamily: `'Raleway', sans-serif`,
    },
  });

const CheckBoxProton = ({obj, changeChecked}) => {


    const {checked, label, id} = obj

    const classes = useStyles();

  return (
    <div>
        <FormControlLabel
        classes={{
            label: classes.label,
            root: classes.wrap
        }}
        control={
            <Checkbox classes={{
                checked: classes.checked,
                root: classes.checkboxRoot
            }}
            size="small"
            checked={checked}
            onChange={()=> changeChecked(id)}
            />
        }
        label={label}
        />
    </div>
  )
}

export default CheckBoxProton
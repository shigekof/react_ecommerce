import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const FormInput = ({ name, label, error, rules }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                defaultValue=''
                name={name} 
                control={control}
                fullWidth
                rules={rules}
                render={( { field: { ...field } }) => <TextField {...field} label={label} error={error} />}
            />
            <ErrorMessage as='p' errors={errors} name={name} message={`${label} is too long`} style={{color: 'red'}} />
        </Grid>
    )
}

export default FormInput

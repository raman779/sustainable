import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Typography, Grid } from '@mui/material';
import TextInput from '../../common/TextInput';
import { isValidZipCode } from '../../../utils'; // Assuming you have a utility function for zip code validation
import Alert from '@mui/material/Alert';
import useFetch from '../../../hooks/usefetch';
const DiscipleAddress = ({ setAddress }) => {
    const { loading, error, fetchData } = useFetch()

    const [formData, setFormData] = useState({
        zipcode: '',
        city: '',
        state: '',
        country: ''
    });
    const [errors, setErrors] = useState({
        zipcode: '',
        city: '',
        state: '',
        country: ''
    });
    const [isError, setIsError] = useState(false)
    const zipRef = useRef()
    useEffect(() => zipRef.current.focus(), [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'zipcode') {
            if (!isValidZipCode(value)) {
                setErrors({
                    ...errors,
                    zipcode: 'Invalid zip code'
                });
            } else {
                setErrors({
                    ...errors,
                    zipcode: ''
                });
            }
        }
        if (isError) {
            setIsError(false)
        }
    };
    const saveAddress = async (completeAddress) => {
        try {
            const response = await fetchData({
                url: "/address",
                data: completeAddress,
                method: 'POST',
                isHeader: true
            });
            if (response.status = "success") {
                setAddress(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.zipcode || !formData.country || !formData.city || !formData.state) {
            setIsError(true)
            return
        }
        else {
            saveAddress(formData)
        }
        // if (!formData.zipCode || !isValidZipCode(formData.zipCode)) {
        //     setErrors({
        //         ...errors,
        //         zipCode: 'Please enter a valid zip code'
        //     });
        //     return;
        // }
        // if (!formData.city.trim()) {
        //     setErrors({
        //         ...errors,
        //         city: 'Please enter city'
        //     });
        //     return;
        // }
        // if (!formData.state.trim()) {
        //     setErrors({
        //         ...errors,
        //         state: 'Please enter state'
        //     });
        //     return;
        // }
        // if (!formData.country.trim()) {
        //     setErrors({
        //         ...errors,
        //         country: 'Please enter country'
        //     });
        //     return;
        // }
        // // All fields are valid, continue

        // setAddress(true);
    };

    return (
        <>
            <CssBaseline />
            <Typography variant="h3">Tell Us About You</Typography>
            <form style={{ width: '100%', marginTop: '20px' }} onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextInput
                            label="Where Are You Located ?"
                            name="zipcode"
                            value={formData.zipcode}
                            autoComplete="off"
                            onChange={handleChange}
                            // error={errors.zipCode}
                            // helperText={errors.zipCode}
                            placeholder="Zip Code"
                            inputRef={zipRef}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput
                            name="city"
                            value={formData.city}
                            autoComplete="off"
                            onChange={handleChange}
                            // error={errors.city}
                            // helperText={errors.city}
                            placeholder="City"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput
                            name="state"
                            value={formData.state}
                            autoComplete="off"
                            onChange={handleChange}
                            // error={errors.state}
                            // helperText={errors.state}
                            placeholder="State"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput
                            name="country"
                            value={formData.country}
                            autoComplete="off"
                            onChange={handleChange}
                            // error={errors.country}
                            // helperText={errors.country}
                            placeholder="Country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {isError && <Alert severity="error">{'All fields are required'}</Alert>}
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: '20px' }}
                >
                    {loading ? "Continuing..." : "Continue"}
                </Button>
            </form>
        </>
    );
};

export default DiscipleAddress;

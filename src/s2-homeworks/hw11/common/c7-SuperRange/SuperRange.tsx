import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00CC22',
                height: 4,
                width: 200,

                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                    '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        backgroundColor: '#01CB22',
                        boxShadow: 'inherit',
                    },
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1,
                },
            }}
            {...props}
        />
    );
};

export default SuperRange;

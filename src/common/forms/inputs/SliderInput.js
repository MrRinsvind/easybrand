import React from 'react'
import Slider from '@material-ui/core/Slider'

import styles from './SliderInput.module.scss'


export default function DiscreteSlider({ name, value, onChange }) {

    function getLabel(value) {
        let result
        switch(value) {
            case 0:
                result =  "small"
                break
            case 1:
                result =  "medium"
                break
            case 2:
                result =  "large"
                break
            default:
                result =  "medium"
        }
        return result
    }

    return (
        <div className={styles.Wrapper}>
            <Slider
                aria-labelledby="input-slider"
                step={1}
                min={0}
                max={2}
                name={name}
                classes={{
                    valueLabel: styles.Label,
                    thumb: styles.Thumb,
                    track	: styles.Track,
                    rail: styles.Rail,
                }}
                valueLabelDisplay="auto"
                value={value}
                onChange = {
                    (ev,val) => onChange(val)
                }
                valueLabelFormat={getLabel}
            />
        </div>
    )
}

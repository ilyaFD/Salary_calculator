import './Form.css';

import {
    Radio,
    RadioGroup,
    Slider,
    FormControlLabel,
    Button
} from '@mui/material/';

export default function Form({
    occupation,
    setOccupation,
    experience,
    setExperience,
    city,
    setCity,
    year,
    setYear,
    submitHendler
}) {
  return (
    <div className="form">
        <div>
            <span className="form__label">Occupation</span>
            <RadioGroup
                value={occupation}
                onChange={event => setOccupation(event.target.value)}
            >
                <FormControlLabel value="Programmer" label="Programmer" control={<Radio />} />
                <FormControlLabel value="Teacher" label="Teacher" control={<Radio />} />
                <FormControlLabel value="Cashier" label="Cashier" control={<Radio />} />
            </RadioGroup>
        </div>
        <div>
            <span className="form__label">City</span>
            <RadioGroup
                value={city}
                onChange={event => setCity(event.target.value)}
            >
                <FormControlLabel value="Stockholm" label="Stockholm" control={<Radio />} />
                <FormControlLabel value="Gothenburg" label="Gothenburg" control={<Radio />} />
            </RadioGroup>
        </div>
        <div>
            <span className="form__label">Income year</span>
            <RadioGroup
                value={year}
                onChange={event => setYear(event.target.value)}
            >
                <FormControlLabel value="2019" label="2019" control={<Radio />} />
                <FormControlLabel value="2020" label="2020" control={<Radio />} />
            </RadioGroup>
        </div>
        <div className="form__slider-wrap">
            <span className="form__label">Number of years of experience</span>
            <Slider 
                value={experience}
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={20}
                onChange={event => {
                    setExperience(event.target.value)
                }}
                marks={[
                    {
                        value: 0,
                        label: '0',
                    },
                    {
                        value: 20,
                        label: '20',
                    },
                ]}
            
            />
        </div>
        <Button
            disabled={!occupation || !experience || !city || !year}
            variant="contained"
            onClick={() => submitHendler(occupation, experience, city, year)}
        >
            Calculate
        </Button>
    </div>
  );
}
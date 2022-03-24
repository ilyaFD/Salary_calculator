import React from 'react';
import './App.css';
import Form from './components/Form';
import ResultModal from './components/ResultModal';
import salaryCalculator from './models/salaryCalculator';

export default function  App() {
  const [occupation, setOccupation] = React.useState('');
  const [experience, setExperience] = React.useState(0);
  const [year, setYear] = React.useState('');
  const [city, setCity] = React.useState('');
  const [gross, setGross] = React.useState('');
  const [net, setNet] = React.useState('');

  const reset = () => {
    setOccupation('');
    setExperience(0);
    setYear('');
    setCity('');
    setGross('');
    setNet('');
  }

  const submitHendler = (occupation, experience, city, year) => {
    const {gross, net} = salaryCalculator(occupation, experience, city, year);
    setGross(gross)
    setNet(net)
  }

  return (
    <div className="wrap green-theme">
      <Form
        occupation={occupation}
        setOccupation={setOccupation}
        experience={experience}
        setExperience={setExperience}
        year={year}
        setYear={setYear}
        city={city}
        setCity={setCity}
        submitHendler={submitHendler}
      />
      <ResultModal
        open={Boolean(gross) && Boolean(net)}
        gross={gross}
        net={net}
        reset={reset}
      />
    </div>
  );
}



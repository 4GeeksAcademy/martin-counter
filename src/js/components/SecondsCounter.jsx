
import React from 'react';




const Digit = ({ value }) => {
  return <span className="digit">{value}</span>;
};


const Counter = ({ segundos }) => {
  const digits = segundos.toString().padStart(6, '0').split('');

  return (
    <div className="counter">
      {digits.map((digit, index) => (
        <Digit key={index} value={digit} />
      ))}
    </div>
  );
};


const SecondsCounter = ({ segundosIniciales = 0 }) => {
  const [segundos, setSegundos] = React.useState(segundosIniciales);

  const incrementarSegundos = () => {
    setSegundos((prevSegundos) => {
      const newSegundos = prevSegundos + 1;
      if (newSegundos > 999999) {
        return 0;
      }
      return newSegundos;
    });
  };

  React.useEffect(() => {
    const interval = setInterval(incrementarSegundos, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Counter segundos={segundos} />
    </div>
  );
};
export default SecondsCounter
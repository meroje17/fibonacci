import React, { useState } from "react";

// Utils
import { isNumber, containOnlyNumber, isEmpty } from "../../utils/string.utils";

// Router
import { useHistory } from "react-router-dom";

const Home = () => {
  const [number, setNumber] = useState("");
  let history = useHistory();

  const handleNumberChange = (event) => {
    const value = event.target.value;
    if ((isNumber(value) && containOnlyNumber(value)) || isEmpty(value))
      setNumber(value);
  };

  const onSubmit = () => history.push("/fibonacci");

  return (
    <>
      <header>
        <h1>Fibonacci</h1>
        <h2>
          Tester la <strong>mémoïsation</strong> de ReactJS à l'aide d'une suite
          arithmétique connue.
        </h2>
      </header>

      <section>
        <p>
          Le but ici était de m'entrainer à utiliser le{" "}
          <strong>useCallback</strong> de React à travers la suite de Fibonacci.
        </p>
        <p>
          En inscrivant ci-dessous un nombre de départ, nous calcurons les dix
          prochains nombres en suivant les règles de la suite de Fibonacci.
        </p>
      </section>

      <section>
        <label>
          Inscrivez ici le nombre de départ.
          <input
            name="number"
            onChange={handleNumberChange}
            placeholder="Entrez votre nombre"
            value={number}
          />
        </label>
        <button onClick={onSubmit}>Calculer</button>
      </section>

      <footer></footer>
    </>
  );
};

export default Home;

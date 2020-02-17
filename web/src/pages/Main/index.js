import React, { useState } from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import { Container, LightMode, DarkMode } from './styles';

import rey from '~/assets/rey.png';
import kylo from '~/assets/kylo.png';

import finn from '~/assets/finn.png';
import hux from '~/assets/hux.png';

import poe from '~/assets/poe.png';
import phasma from '~/assets/phasma.png';

export default function Main() {
  const [mode, setMode] = useState(1);
  const [index, setIndex] = useState(0);

  const movies = [
    {
      img: mode ? poe : hux,
      description: (
        <p>
          A queda de <strong>Darth Vader</strong> e do Império levou ao
          surgimento de uma nova força sombria: a{' '}
          <strong>Primeira Ordem</strong>. Eles procuram o jedi{' '}
          <strong>Luke Skywalker</strong>, desaparecido. A{' '}
          <strong>Resistência</strong> tenta desesperadamente encontrá-lo antes
          para salvar a galáxia.
        </p>
      ),
    },
    {
      img: mode ? finn : phasma,
      description: (
        <p>
          A tranquila e solitária vida de <strong>Luke Skywalker</strong> sofre
          uma reviravolta quando ele conhece <strong>Rey</strong>, uma jovem que
          mostra fortes sinais da Força. O desejo dela de aprender o estilo dos{' '}
          <strong>Jedi</strong> força Luke a tomar uma decisão que mudará sua
          vida para sempre. Enquanto isso, <strong>Kylo Ren</strong> e o{' '}
          <strong>General Hux</strong> lideram a <strong>Primeira Ordem</strong>{' '}
          para um ataque total contra <strong>Leia</strong> e a{' '}
          <strong>Resistência</strong> pela supremacia da galáxia.
        </p>
      ),
    },
    {
      img: mode ? rey : kylo,
      description: (
        <p>
          A fascinante conclusão da saga <strong>Skywalker</strong>, na qual
          novas lendas nascerão e a batalha final pela liberdade ainda está por
          vir.
        </p>
      ),
    },
  ];

  return (
    <Container mode={mode}>
      {mode ? (
        <LightMode>
          <header>
            <nav>
              <button type="button" onClick={() => setMode(!mode)}>
                <FaMoon size={20} color="#F2B66D" />
              </button>
            </nav>
            <ul>
              <li>
                <a href="https://www.instagram.com/igorjung0/" target="black">
                  <FaInstagram size={30} color="#F2B66D" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/igor-cássio-jung-005880169/"
                  target="black"
                >
                  <FaLinkedinIn size={30} color="#F2B66D" />
                </a>
              </li>
              <li>
                <a href="https://github.com/igorjung" target="black">
                  <FaGithub size={30} color="#F2B66D" />
                </a>
              </li>
            </ul>
          </header>
          <div>
            <nav>
              <button type="button" onClick={() => setIndex(0)}>
                VII
              </button>
              <hr />
              <button type="button" onClick={() => setIndex(1)}>
                VIII
              </button>
              <hr />
              <button type="button" onClick={() => setIndex(2)}>
                IX
              </button>
            </nav>
            <div className="text-box">{movies[index].description}</div>
            <img src={movies[index].img} alt="starwars" />
          </div>
        </LightMode>
      ) : (
        <DarkMode>
          <header>
            <nav>
              <button type="button" onClick={() => setMode(!mode)}>
                <FaSun size={20} color="#D94343" />
              </button>
            </nav>
            <ul>
              <li>
                <a href="https://www.instagram.com/igorjung0/" target="black">
                  <FaInstagram size={30} color="#D94343" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/igor-cássio-jung-005880169/"
                  target="black"
                >
                  <FaLinkedinIn size={30} color="#D94343" />
                </a>
              </li>
              <li>
                <a href="https://github.com/igorjung" target="black">
                  <FaGithub size={30} color="#D94343" />
                </a>
              </li>
            </ul>
          </header>
          <div>
            <nav>
              <button type="button" onClick={() => setIndex(0)}>
                VII
              </button>
              <hr />
              <button type="button" onClick={() => setIndex(1)}>
                VIII
              </button>
              <hr />
              <button type="button" onClick={() => setIndex(2)}>
                IX
              </button>
            </nav>
            <div className="text-box">{movies[index].description}</div>
            <img src={movies[index].img} alt="starwars" />
          </div>
        </DarkMode>
      )}
    </Container>
  );
}

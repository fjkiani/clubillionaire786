import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
   <Wrapper>
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.article`
.question {
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-grey-special);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);

  }
  
  .question h4 {
    text-transform: none;
    line-height: 1.5;
    text-transform: capitalize;
  }
  .question p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--clr-grey-special);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--clr-red-special);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
  }
  @media screen and (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  /*  global classes */
  
  /* section */
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  
  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
  
  /*
  =============== 
  Questions
  ===============
  */
  
  main {
    min-height: 100vh;
    /* using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    width: 90vw;
    margin: 0rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
`
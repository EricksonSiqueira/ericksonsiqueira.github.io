import styled from 'styled-components';

export const StyledContact = styled.section`
  

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 25px;

    margin-top: 25px;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(136,70,219);
    background: linear-gradient(90deg, rgba(136,70,219,1) 0%, rgba(13,198,243,1) 100%);
    padding: 2px;
    border-radius: 5px;
  }

  form input, form textarea, label {
    border-radius: 5px;
  }

  form input, form textarea {
    width: 80vw;
    max-width: 1000px;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    padding-left: 12px;
    font-size: 22px;
    color: ${(props) => props.theme.colors.textColor};

    &:focus {
      outline: none;
    }
  }

  form input {
    height: 60px;
  }

  form textarea {
    height: 180px;
    padding-top: 10px;
  }

  button {
    max-width: 600px;
    width: 50vw;
    border-radius: 5px;
    margin-top: 10px;
  }

  .contact-heading {
    font-size: 50px;
    width: 190px;
  }

  /* img.email-status {
    position: fixed;
    bottom: -60px;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    color: black;
  } */

  span.email-status {
    text-align: center;
    font-size: 22px;
  }

  span.form-span {
    font-size: 14px;
    margin-top: -30px;
    padding: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.lightPurple2};

    transform: all 1s ease-in;
  }

  span.span-text-area {
    bottom: -50px;
  }

  @media screen and (min-width: 400px) {
    span.form-span {
      font-size: 18px;
    }

  }

`;

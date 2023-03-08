import styled from "styled-components";

export const StyledAddReview = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 2rem 0;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    svg {
      color: white;
      font-size: 1.5rem;
      margin-left: 1rem;
    }
    h4 {
      color: white;
      padding: 0;
      margin: 0 0 0 1rem;
      font-size: 1.5rem;
    }
  }
  input {
    display: block;
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  input.title,
  textarea {
    border: none;
    line-height: 2;
    width: 80%;
    margin-left: 1rem;
    resize: none;
  }
  input.stars {
    border: none;
    line-height: 2;
    width: 30%;
    margin-left: 1rem;
  }
  ::-webkit-input-placeholder {
    margin-left: 1rem;
    color: red;
  }
  :-ms-input-placeholder {
    margin-left: 1rem;
    color: red;
  }
  ::-moz-placeholder {
    margin-left: 1rem;
    color: red;
  }

  div:last-of-type {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    input[type="submit"] {
      border: none;
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
      border-radius: 0.5rem;
      padding: 0;
      width: 5rem;
      height: 2rem;
      margin-bottom: 0;
    }
    input[type="submit"]:hover {
      background-color: #666666;
      color: white;
    }
  }
  div.user-message {
    display: block;
    h4,
    p {
      color: white;
    }

  }
`;

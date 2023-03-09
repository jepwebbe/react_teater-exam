import styled from "styled-components";

export const MyPageStyled = styled.section`
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: end;
    h2 {
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.primary};
      margin-bottom: 0;
      margin-top: 1rem;
    }
    > div {
      display: grid;
      justify-items: end;
      p {
        color: ${(props) => props.theme.colors.theLightGrey};
        margin: 0;
        padding: 0;
      }
      button {
        border: none;
        background-color: ${(props) => props.theme.colors.secondary};
        color: white;
        width: 5rem;
        height: 2rem;
        font-weight: bold;
      }
    }
  }
  article {
    h3 {
      font-size: 1.25rem;
    }
  }
  svg {
    color: ${(props) => props.theme.colors.secondary};
    transform: rotate(-25deg);
  }
  table {
    width: 100%;
  }
  th {
    text-align: left;
  }
  table th:last-child, table tr td:last-of-type {
    text-align: right;
  }
  tr td:last-of-type svg.delete {
    color: #B10C0C;
    font-size: 1.7rem;
    transform: unset;
    cursor: pointer;
  }
 tr td:last-of-type svg.edit {
    color: #048904;
    font-size: 1.4rem;
    transform: unset;
  }

`;

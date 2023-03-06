import styled from "styled-components";

export const StyledLoginPage = styled.section`
  margin-top: ${(props) => props.theme.space.headerMargin};
  padding: 0 ${(props) => props.theme.space.sidePadding};
  gap: 1rem;
  h2 {
    grid-area: a;
  }
  section {
    grid-area: b;
    table {
      border: 0;
      border-collapse: separate;
      border-spacing: 0 5px;
      width: 100%;
      thead tr th {
        text-align: left;
        border-bottom: 1px solid black;
      }
      tbody tr td {
        border-bottom: 1px solid black;
        border-spacing: 0 5px;

      }
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      button.edit {
        color: #339900;
      }
      button.delete {
        color: #FF0000;
      }

    }
  }
  article {
    grid-area: d;
  }
  aside{
    grid-area: c;
  }
  aside button, form button {
        background-color: #000000;
        border: none;
        color: white;
        border-radius: 0.5rem;
        padding: 0.8rem 1.2rem;
        cursor: pointer;
    }
  
`;

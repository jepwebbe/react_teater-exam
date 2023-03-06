import { useEffect } from "react";
import { StyledGrid } from "./PageTwo.Styled";

const PageTwo = (props) => {
  // Destructuring props object to extract the children, title, description, and subtitle properties
  const { children, title, description } = props;
  // Using useEffect  to update the document title and description whenever they change
  useEffect(() => {
    document.title = title;
    // If a description it exists, it sets the content attribute of the description meta tag to the value of the "description" prop
    if (description) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", description);
    }
  }, [title, description]);
// Applies the styled grid, which in turn takes its grid values from the theme, centrally defining the grid
  return <StyledGrid> {children} </StyledGrid>;
};

export { PageTwo };

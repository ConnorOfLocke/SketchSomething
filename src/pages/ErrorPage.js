import classes from "./ErrorPage.module.css";
import { useNavigate, useRouteError } from "react-router";
import { BorderBox, ContentBox } from "../components/utils/layouts";
import { StyledButton } from "../components/utils/button";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  function goHome() {
    navigate("");
  }

  return (
    <ContentBox className={classes.errorPage}>
      <BorderBox borderType={"secondary"}>
        <h2>{`Error Code: ${error.status}`}</h2>

        {error.status === 404 && (
          <>
            <h2>Nothing here I'm afraid...</h2>
            {error.status === 404 && (
              <p>This page does not lead anywhere or has been removed.</p>
            )}
          </>
        )}

        {error.status !== 404 && (
          <>
            <h2>Ooof, that's not meant to happen... </h2>
            <p>{`Error Code: ${error.status}`}</p>
            <p>
              Sketchathing has crashed or something unexpected has happened.
            </p>
            <p className={classes.errorText}>{error.message}</p>
          </>
        )}

        <StyledButton buttonType="secondary" onClick={goHome}>
          Go Home
        </StyledButton>
      </BorderBox>
    </ContentBox>
  );
}

export default ErrorPage;

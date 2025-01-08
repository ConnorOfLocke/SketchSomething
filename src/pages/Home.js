import SessionSettings from "../components/SessionSettings";
import BorderBox from "../components/BorderBox";
import ContentBox from "../components/ContentBox";

function HomePage() {
  return (
    <ContentBox animate>
      <BorderBox borderType={"background"}>
        <header>
          <h1>Sketch Something!</h1>
        </header>
        <SessionSettings />
      </BorderBox>
    </ContentBox>
  );
}

export default HomePage;

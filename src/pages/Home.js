import { PageLayout } from "../components/PageLayout";
import PromptSettings from "../components/PromptSettings";

function HomePage() {
  return (
    <PageLayout>
      <h1>Home Page</h1>
      <PromptSettings />
    </PageLayout>
  );
}

export default HomePage;

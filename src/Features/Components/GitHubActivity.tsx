import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/Hooks";

const GitHubActivity = () => {
  const { theme } = useTheme()
  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">GitHub Activity</h2>
      <div className="w-full flex flex-col items-start gap-4">
        <GitHubCalendar
          username="riyanshverma"
          blockSize={12}
          blockMargin={4}
          colorScheme={theme}
          fontSize={16}
        />
      </div>
    </section>
  );
};

export default GitHubActivity;

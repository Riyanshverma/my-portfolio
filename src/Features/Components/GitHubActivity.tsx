import {GitHubCalendar} from "react-github-calendar";

const GitHubActivity = () => {
  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">GitHub Activity</h2>
      <div className="w-full flex flex-col items-center gap-4">
        <GitHubCalendar
          username="riyanshverma" // replace with your GitHub username
          blockSize={16}
          blockMargin={4}
          colorScheme="dark"
          fontSize={16}
          style={{ width: "100%", maxWidth: "700px" }}
        />
        <p className="text-accent-foreground/60 text-lg">
          {`GitHub contributions in ${new Date().getFullYear()} on `}
          <a
            href="https://github.com/riyanshverma"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-accent-foreground"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default GitHubActivity;

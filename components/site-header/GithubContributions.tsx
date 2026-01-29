import { GithubNumbers } from "@/components/ui/github-numbers";
import { userConfig } from "@/config/user-config";

export async function getGitHubTotalContributions(): Promise<number> {
  // Extracting the username from "https://github.com/asayushranjansinha"
  // split('/').pop() gets the last segment of the path
  const username = userConfig.github.split('/').filter(Boolean).pop();

  if (!username) {
    console.error("Could not extract GitHub username from URL");
    return 0;
  }

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=all`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) return 0;

    const data = await res.json();

    const total = data.contributions.reduce(
      (sum: number, day: { count: number }) => sum + day.count,
      0
    );

    return total;
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return 0;
  }
}

export async function GithubContributions() {
  const count = await getGitHubTotalContributions();

  return (
    <GithubNumbers 
      href={userConfig.github} 
      count={count} 
      label="Total Commits" 
    />
  );
}
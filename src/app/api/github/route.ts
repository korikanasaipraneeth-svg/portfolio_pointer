import { NextResponse } from "next/server";
import { VERIFIED_PROJECTS } from "@/data/projects";

// In-memory cache to handle GitHub API rate limits gracefully
let cachedData: any = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes

export async function GET() {
  const now = Date.now();
  if (cachedData && now - lastFetchTime < CACHE_TTL_MS) {
    return NextResponse.json({
      success: true,
      source: "cache",
      syncedAt: new Date(lastFetchTime).toISOString(),
      ...cachedData,
    });
  }

  try {
    const headers: Record<string, string> = {
      "User-Agent": "PRANEETH-AI-Portfolio/1.0",
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/korikanasaipraneeth-svg", { headers, next: { revalidate: 900 } }),
      fetch("https://api.github.com/users/korikanasaipraneeth-svg/repos?per_page=100&sort=updated", { headers, next: { revalidate: 900 } }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      // Fallback gracefully to verified data if rate limited
      return NextResponse.json({
        success: true,
        source: "verified-fallback",
        syncedAt: new Date().toISOString(),
        user: {
          login: "korikanasaipraneeth-svg",
          name: "Korikana Sai Praneeth",
          bio: "AI & Machine Learning student passionate about technology, innovation, and building AI-powered solutions.",
          public_repos: 12,
          followers: 3,
          following: 3,
          html_url: "https://github.com/korikanasaipraneeth-svg",
        },
        repos: VERIFIED_PROJECTS.map((p) => ({
          name: p.name,
          description: p.description,
          html_url: p.githubUrl,
          language: p.techStack[0],
          stargazers_count: 0,
          updated_at: new Date().toISOString(),
        })),
        rateLimited: true,
      });
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    cachedData = {
      user: {
        login: userData.login,
        name: userData.name || "Korikana Sai Praneeth",
        bio: userData.bio,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
      },
      repos: Array.isArray(reposData)
        ? reposData.map((r: any) => ({
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            language: r.language,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            updated_at: r.updated_at,
          }))
        : [],
    };
    lastFetchTime = now;

    return NextResponse.json({
      success: true,
      source: "live-github",
      syncedAt: new Date(lastFetchTime).toISOString(),
      ...cachedData,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: true,
      source: "verified-fallback",
      syncedAt: new Date().toISOString(),
      user: {
        login: "korikanasaipraneeth-svg",
        name: "Korikana Sai Praneeth",
        bio: "AI & Machine Learning student passionate about technology, innovation, and building AI-powered solutions.",
        public_repos: 12,
        followers: 3,
        following: 3,
        html_url: "https://github.com/korikanasaipraneeth-svg",
      },
      repos: VERIFIED_PROJECTS.map((p) => ({
        name: p.name,
        description: p.description,
        html_url: p.githubUrl,
        language: p.techStack[0],
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
      })),
      error: error.message,
    });
  }
}

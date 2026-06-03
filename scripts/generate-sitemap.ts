// Generates public/sitemap.xml at predev/prebuild with all published posts.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://sistemaacademia.com.br";
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://douhwqlpfgwuqwturdjw.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_LsZl_8bu679aM6USbBhCxA_-onUE_wX";

interface Entry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

async function main() {
  const entries: Entry[] = [
    { loc: `${BASE_URL}/`, changefreq: "monthly", priority: "1.0" },
    { loc: `${BASE_URL}/blog`, changefreq: "weekly", priority: "0.8" },
  ];

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data, error } = await supabase
      .from("posts")
      .select("slug, updated_at")
      .eq("published", true)
      .order("updated_at", { ascending: false });

    if (error) throw error;

    for (const post of data || []) {
      entries.push({
        loc: `${BASE_URL}/blog/${post.slug}`,
        lastmod: post.updated_at ? new Date(post.updated_at).toISOString() : undefined,
        changefreq: "monthly",
        priority: "0.7",
      });
    }
  } catch (err) {
    console.warn("[sitemap] Failed to fetch posts:", err);
  }

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries.map((e) =>
      [
        `  <url>`,
        `    <loc>${e.loc}</loc>`,
        e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n"),
    ),
    `</urlset>`,
  ].join("\n");

  writeFileSync(resolve("public/sitemap.xml"), xml);
  console.log(`[sitemap] Wrote ${entries.length} URLs.`);
}

main();

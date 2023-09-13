#!/usr/bin/env -S deno run -A --watch
import dev from "$live/dev.ts";
import liveManifest from "$live/live.gen.ts";
import liveStdManifest from "deco-sites/std/live.gen.ts";
import tailwind from "deco-sites/std/tailwindv3.ts";
import tailwindConfig from "./tailwind.config.ts";

// Start tailwind background process generation
tailwind({
  ...tailwindConfig,
});

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});

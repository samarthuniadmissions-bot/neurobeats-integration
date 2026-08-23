# Import neurobeats from GitHub into this Lovable app

## Goal
Bring the code from `https://github.com/samarthuniadmissions-bot/Neurobeats` into this Lovable application so it replaces the placeholder and runs correctly in the TanStack Start stack.

## Source
- GitHub repo: `https://github.com/samarthuniadmissions-bot/Neurobeats`
- User reports GitHub sync is already connected for this project.

## Important limitation
Lovable cannot directly import an existing GitHub repository in one click. The only supported path is to copy the code into the project manually. Because of that, this plan treats the import as a manual migration/adaptation rather than a sync.

## Step 1: Inspect the neurobeats repo
Fetch the repository structure and key files from the public GitHub URL. Identify the stack, pages, components, assets, dependencies, and any backend logic.

## Step 2: Decide import scope
Assuming the goal is to make the final app the neurobeats project, I will:
- Replace the placeholder `src/routes/index.tsx` with the neurobeats entry page.
- Copy all relevant source files (components, pages, hooks, styles, assets, utilities) into `src/`.
- Copy static assets into `public/`.
- If the project has backend/server logic, convert it to TanStack Start server functions or API routes as appropriate.

## Step 3: Adapt to the TanStack Start stack
- Map any routing/pages from the neurobeats project to TanStack Router route files under `src/routes/`.
- Replace any framework-specific imports (e.g., Next.js, React Router, Vite-only patterns) with TanStack Start equivalents.
- Merge or convert CSS/styling into the existing Tailwind v4 setup in `src/styles.css` and avoid hardcoded colors.
- Add any missing dependencies to `package.json` and install them.
- Keep or recreate the shadcn/ui components already available in the project if the neurobeats project uses them.

## Step 4: Verify and build
- Run the typecheck and build (`vite build` or `build:dev`).
- Start the dev server and verify the home page renders the neurobeats app correctly.
- Fix any runtime errors (console, network, SSR issues) that arise from the migration.

## Fallback
If the public GitHub API does not expose the full repo or the repo is private, ask the user to either make it public temporarily or provide a ZIP download of the code.
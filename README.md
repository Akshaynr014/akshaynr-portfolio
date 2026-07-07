# Akshay N R Portfolio

Modern responsive portfolio website for Akshay N R, built with React, Vite, and Tailwind CSS.

## Folder Structure

```text
portfolio/
  public/
    assets/
      Akshay-N-R-Resume.pdf
  src/
    main.jsx
    style.css
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  README.md
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

The production files will be created in the `dist/` folder.

## Deploy on Netlify

1. Push this `portfolio` folder to a GitHub repository.
2. Go to Netlify and choose **Add new site** > **Import an existing project**.
3. Select your GitHub repository.
4. Set the build command to:

```bash
npm run build
```

5. Set the publish directory to:

```bash
dist
```

6. Deploy the site.

## Where to Update Details

Edit `src/main.jsx`:

- Resume link: update `profile.resume`
- GitHub link: update `profile.github`
- LinkedIn link: update `profile.linkedin`
- Email: update `profile.email`
- Phone: update `profile.phone`
- Photo: add your image as `public/assets/profile.jpg`
- Projects: update the `projects` array
- Skills: update the `skillGroups` array
- Experience: update the `experiences` array

Replace `public/assets/Akshay-N-R-Resume.pdf` whenever you want to update the downloadable resume.

Tailwind Pro is not required for this version. If you want to use a specific Tailwind Pro section or component, paste that component code into the project and then adapt the content in `src/main.jsx`.

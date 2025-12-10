# Deployment Instructions

The Humanoid Robotics Book Docusaurus site is ready for deployment to GitHub Pages.

## Prerequisites

Before deploying, you need to:

1. Create a GitHub repository named `humanoid-robotics-book` (or update the configuration to match your repository name)
2. Ensure you have push access to this repository
3. Have Git configured with your GitHub credentials

## Configuration

Update the `docusaurus.config.js` file with your actual GitHub information:

```js
// GitHub pages deployment config.
organizationName: 'your-github-username', // Your GitHub username or organization
projectName: 'humanoid-robotics-book', // Your repository name
```

## Deployment Methods

### Method 1: Using Personal Access Token (Recommended)

```bash
GITHUB_TOKEN=<your-personal-access-token> npm run deploy
```

### Method 2: Using Username

```bash
GIT_USER=<your-github-username> npm run deploy
```

### Method 3: Using SSH

```bash
USE_SSH=true npm run deploy
```

## GitHub Pages Setup

After successful deployment, you'll need to configure GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Select "Deploy from a branch" as the source
4. Select the `gh-pages` branch and `/ (root)` folder
5. Click "Save"

Your site will be available at: `https://<your-github-username>.github.io/humanoid-robotics-book/`

## Local Testing

To test the build locally before deployment:

```bash
npm run build
npm run serve
```

The site will be available at `http://localhost:3000`

## Troubleshooting

- If you get authentication errors, ensure your Git credentials are properly configured
- If the repository doesn't exist, create it first on GitHub
- If you get permission errors, ensure you have write access to the repository
- Check that the `organizationName` and `projectName` in `docusaurus.config.js` match your GitHub repository
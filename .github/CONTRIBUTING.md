# Contributing to [Github Stats](https://github.com/abhiaryain/github-stats)

Thank you for your interest in contributing to [Github Stats](https://github.com/abhiaryain/github-stats)! This guide will help you set up the development environment.

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Found a bug? Report it by opening [an issue](https://github.com/abhiaryain/github-stats/issues/new?template=bug_report.yml)
- Have questions or ideas? Join the [discussions](https://github.com/abhiaryain/github-stats/discussions)
- Fixed something? Submit a [pull request](https://github.com/abhiaryain/github-stats/compare)
- Want a new feature? Create a [feature request](https://github.com/abhiaryain/github-stats/issues/new?template=feature_request.yml)
- Interested in long-term involvement? Become a maintainer

## Prerequisites

- [Bun](https://bun.com) (JavaScript runtime)
- [Git](https://git-scm.com)

## Quickstart

### 1. Clone the Repository

```bash
git clone https://github.com/abhiaryain/github-stats.git
cd github-stats
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Setup

Copy the `.env.example` file to `.env` using `cp .env.example .env` and fill in the required variables.

<details>
<summary>How to set up a GitHub token?</summary>

- Navigate to GitHub [settings](https://github.com/settings/personal-access-tokens).

- Generate a new token with the required scopes.

- Set the token as `GITHUB_TOKEN` in the `.env` file.

</details>

### 4. Start the Development Server

In a new terminal, start the development server:

```bash
bun run dev
```

The application should now be running at http://localhost:3000

<br />
<br />

## Making Changes

### 1. Fork the repository

- On GitHub, click the **Fork** button to create your own fork of the repository.

### 2. Clone your fork locally

```bash
git clone https://github.com/<yourusername>/github-stats.git
cd github-stats
```

### 3. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

Add the original repository as a remote named `upstream`:

```bash
git remote add upstream https://github.com/abhiaryain/github-stats.git
```

> Make sure to pull from the upstream repository to keep your fork up to date using `git pull upstream main`.

### 4. Commit your changes

```bash
git add .
git commit -m "Your commit message"
```

### 5. Push to the branch

```bash
git push origin feature/your-feature-name
```

### 6. Open a pull request

- Go to GitHub and open a pull request from your feature branch

> Note: If you open a pull request, try to minimize the number of repository-wide changes you make. This will greatly increase the chances that we review and merge it.

## Themes & Translations Contribution

At present, GitHub Stats supports only **light and dark themes** and the **English language**. While we truly appreciate the community’s interest in expanding themes or adding translations, we do not plan to support additional options at this time in order to keep maintenance efforts manageable. As a result, pull requests introducing new themes or translations will be respectfully declined. Thank you for your understanding and continued contributions.

> [!NOTE]
> If you are considering contributing a theme or translation solely for personal use, you can customize it in your own fork instead of submitting it upstream:
>
> - **Themes:** Modify [`/src/constants/theme.ts`](https://github.com/abhiaryain/github-stats/blob/main/src/constants/theme.ts)
>   > For theme inspiration or reference, you can check this example: [Github Readme Stats Themes](https://github.com/anuraghazra/github-readme-stats/tree/master/themes) and [Github Readme Stats Example](https://github.com/anuraghazra/github-readme-stats/tree/master/themes/index.js)
> - **Translations:** Modify [`/src/constants/locale.ts`](https://github.com/abhiaryain/github-stats/blob/main/src/constants/locale.ts)

## License

By contributing to this project, you agree that your contributions will be licensed under its [MIT License](https://github.com/abhiaryain/github-stats/blob/main/LICENSE).

---

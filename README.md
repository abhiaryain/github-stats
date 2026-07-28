<!-- eslint-disable markdown/no-missing-label-refs -->

<div align="center">
  <img src="./logo/logo.svg" width="100" alt="GitHub Stats" />
  <h1 style="font-size: 28px; margin: 10px 0;">GitHub Stats</h1>
  <p>Showcase your GitHub activity stats on your websites and READMEs.</p>
</div>

<p align="center">
  <a href="https://github.com/abhiaryain/github-stats/graphs/contributors">
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/abhiaryain/github-stats?color=0088bb" />
  </a>
  <a href="https://github.com/abhiaryain/github-stats/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/abhiaryain/github-stats?color=0088ff" />
  </a>
  <a href="https://github.com/abhiaryain/github-stats/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/abhiaryain/github-stats?color=0088ff" />
  </a>
</p>

<br />

<p align="center">
  <a href="#all-demos">View Demo</a>
  ·
  <a href="https://github.com/abhiaryain/github-stats/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a>
  ·
  <a href="https://github.com/abhiaryain/github-stats/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a>
  ·
  <a href="https://github.com/abhiaryain/github-stats/discussions/new?category=q-a">Ask Question</a>
</p>

## Motivation

I’d been using [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) for years, but frequent rate-limits and occasional downtime became frustrating. I tried forking it and deploying on [Vercel](https://vercel.com), which helped, but I wanted something more tailored to my needs.

So, I decided to build my own version:

- **Modern tech stack** with type-safe APIs.
- **Self-hostable**, easy to deploy on your own Vercel instance, or even on your own server.
- **Lightweight and focused**, including only the features I actually use.
- **Same clean design**, but stripped of unnecessary features.

## Self-hosting

> [!IMPORTANT]
> Github Stats is build with self-hosting in mind. This means that you can deploy it on your own Vercel instance, or even on your own server. We does not provide public api endpoints. Instead we encourage you to deploy your own instance after forking the project and following the instructions below.

### Deploy on Vercel

1. Click the button below to deploy your own instance of Github Stats on Vercel.

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fabhiaryain%2Fgithub-stats&env=GITHUB_USERNAME,GITHUB_TOKEN&envDescription=Required%20to%20fetch%20data%20from%20GitHub.&envLink=https%3A%2F%2Fgithub.com%2Fabhiaryain%2Fgithub-stats%23environment-variables&project-name=github-stats&repository-name=github-stats)

2. Follow the prompts to set up your project.

3. Make sure to set environment variables `GITHUB_USERNAME` and `GITHUB_TOKEN` in your Vercel project.

4. Once the deployment is complete, you can access your instance by visiting the URL provided in the deployment logs.

5. You can now customize the project to your liking.

6. Copy and paste this into your markdown and change domain to your own, and that's it. Simple!

```md
![GitHub Stats](https://github.abhiarya.in/api/v1/overview)
```

> [!WARNING]
> By default, the overview card shows all statistics but you can hide them by setting the corresponding options.

> [!NOTE]
> Available ranks are S (top 1%), A+ (12.5%), A (25%), A- (37.5%), B+ (50%), B (62.5%), B- (75%), C+ (87.5%) and C (everyone). This ranking scheme is based on the [Japanese academic grading](https://wikipedia.org/wiki/Academic_grading_in_Japan) system. The global percentile is calculated as a weighted sum of percentiles for each statistic (number of commits, pull requests, reviews, issues, stars, and followers), based on the cumulative distribution function of the [exponential](https://wikipedia.org/wiki/exponential_distribution) and the [log-normal](https://wikipedia.org/wiki/Log-normal_distribution) distributions. The implementation can be investigated at [/src/lib/calculate-rank.ts](https://github.com/abhiaryain/github-stats/blob/main/src/libs/calculate-rank.ts). The circle around the rank shows 100 minus the global percentile.

### Overview Options

| **Name** | **Type** | **Default** | **Description** |
| :------: | :------: | :---------: | :-------------: |
|          |          |             |                 |
|          |          |             |                 |

### Repository Options

| **Name** | **Type** | **Default** | **Description** |
| :------: | :------: | :---------: | :-------------: |
|          |          |             |                 |
|          |          |             |                 |

### Language Options

| **Name** | **Type** | **Default** | **Description** |
| :------: | :------: | :---------: | :-------------: |
|          |          |             |                 |
|          |          |             |                 |

### Theme

At present, GitHub Stats supports only **light and dark themes** and we do not plan to support additional options at this time in order to keep maintenance efforts manageable. As a result, pull requests introducing new themes will be respectfully declined. If you are considering contributing a theme or translation solely for personal use, you can customize it in your own fork instead

#### Light & Dark Themes

Since GitHub will re-upload the cards and serve them from their [CDN](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls), we can not infer the browser/GitHub theme on the server side. There are, however, two methods you can use to create dynamics themes on the client side.

##### Use the transparent theme

We have included a `transparent` theme that has a transparent background. This theme is optimized to look good on GitHub's dark and light default themes. You can enable this theme using the `&theme=transparent` parameter like so:

```md
![GitHub Stats](https://github.abhiarya.in/api/v1/overview?theme=transparent)
```

##### Add transparent alpha channel to a themes bg_color

You can use the `bg_color` parameter to make any of [the available themes](themes/README.md) transparent. This is done by setting the `bg_color` to a color with a transparent alpha channel (i.e. `bg_color=00000000`):

```md
![GitHub Stats](https://github.abhiarya.in/api/v1/overview?bg_color=00000000)
```

##### Use GitHub's theme context tag

You can use [GitHub's theme context](https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/) tags to switch the theme based on the user GitHub theme automatically. This is done by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL. This tag will define whether the image specified in the markdown is only shown to viewers using a light or a dark GitHub theme:

```md
![GitHub Stats](https://github.abhiarya.in/api/v1/overview#gh-dark-mode-only)
![GitHub Stats](https://github.abhiarya.in/api/v1/overview#gh-light-mode-only)
```

##### Use GitHub's new media feature

You can use [GitHub's new media feature](https://github.blog/changelog/2022-05-19-specify-theme-context-for-images-in-markdown-beta/) in HTML to specify whether to display images for light or dark themes. This is done using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature.

```html
<picture>
  <source
    srcset="https://github.abhiarya.in/api/v1/overview?theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github.abhiarya.in/api/v1/overview"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://github.abhiarya.in/api/v1/overview" />
</picture>
```

## All Demos

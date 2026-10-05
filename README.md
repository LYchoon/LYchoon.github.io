# Personal CV — Researcher

A CV for 鐘禮讌 adapted from [Researcher by Ankit Sultana](https://github.com/ankitsultana/researcher). The source template uses Jekyll; this adaptation uses static HTML and CSS so it can be opened locally and published through GitHub Pages without a build step.

## Languages

Four versions are included in the planned upload: Traditional Chinese (`index.html`), Simplified Chinese (`zh-cn.html`), English (`en.html`), and Malay/Bahasa Melayu (`ms.html`). Each page includes a language selector. The current language always comes first; `languages.js` gives the remaining languages a uniformly shuffled order on each page load. Without JavaScript, the current language still comes first and all links remain usable.

Japanese and French versions are prepared separately in the local sibling folder `researcher-cv-language-drafts`. They are excluded from the public-language navigation and the upload ZIP. Do not copy that folder into the GitHub repository without the user's later approval. The user supplied these display names: 鐘禮讌 in Traditional Chinese, 钟礼䜩 in Simplified Chinese, and Choon Lee Yan in English and Malay. Japanese and French drafts retain 鐘禮讌. Page titles, author metadata, descriptions, and headers follow the name for each language.

## Edit and preview

Edit the four HTML files for content and `style.css` for shared styling. Open `index.html` in a browser. The stylesheet uses Google Fonts' Noto Sans family, with Traditional Chinese, Simplified Chinese, and Japanese variants plus local sans-serif fallbacks. Latin text and punctuation use Noto Sans first, so English apostrophes keep proportional spacing even on Chinese pages. Body text uses weight 400; headings, emphasized text, and the active language use weight 600. Both weights are loaded to keep Chinese and Latin text consistent. The only JavaScript randomizes the language selector; there is no analytics, contact form, or extra framework. Keep factual updates consistent across the language versions.

The CV navigation currently links to the on-page education section. Add a PDF download only after an actual CV file is provided. Do not upload the original template author's sample resume or images.

## Content and sources

This is the academic CV website for 鐘禮讌 / Choon Lee Yan (GitHub: `LYchoon`), approved for publication on 2026-10-05. The name, public contact email `ly.cs15@nycu.edu.tw`, education, lab affiliation, research interests, NCTS research-program participation, and scholarship were supplied by the author.

The two AI CUP awards were verified against the July 2026 official lists:

- [Table Tennis Tactics and Outcome Prediction Using Time-Series Data](https://www.aicup.tw/_files/ugd/7fbdbf_f5f17a3fa5fc48acb966f7048b64f83f.pdf#page=1): 金牌 / Gold Medal, TEAM_10218, 鐘禮讌, 國立中央大學數學系 (page 1).
- [ESG Sustainability Commitment Verification](https://www.aicup.tw/_files/ugd/7fbdbf_d1dc8eb5ff79435782f27398058bac2f.pdf#page=3): 佳作 / Honorable Mention, TEAM_10219, 鐘禮讌, 國立中央大學數學系 (page 3).

The English name of the master's institute follows [NYCU's official site](https://www.cs.nycu.edu.tw/intro/organization/data?locale=en). Research-program groups and the scholarship year were verified against the official pages supplied by the user:

- [NCTS USRP 2023](https://sites.google.com/ncts.ntu.edu.tw/nctsusrp/2023/2023-topics-groups-reports?authuser=0): Group 7. The participant list uses the name variant 鍾禮讌; the CV retains the user's spelling 鐘禮讌.
- [NCTS URP 2023](https://sites.google.com/ncts.ntu.edu.tw/urp/home/urp/2023?authuser=0): Group 4, with 鐘禮讌 (NCU) listed as the member. The program ran from October 2023 through June 2024; 2023 is the program's cohort year.
- [2024 Chow Hung-Ching Scholarship Awardees](https://www.math.sinica.edu.tw/f59addca-1da6-47fd-9bb8-18d087da6088/posts/15089): Choon, Lee Yan (National Central University). The scholarship's English spelling follows this official announcement.

Undergraduate study dates, skills, and a PDF CV were not provided and are not displayed. The four approved language versions allow search indexing. Japanese and French remain local drafts with `noindex, nofollow`; this tag is only a search indexing hint and does not provide access control.

Repository: [LYchoon/LYchoon.github.io](https://github.com/LYchoon/LYchoon.github.io). GitHub Pages publishes the root of the `main` branch at [https://lychoon.github.io/](https://lychoon.github.io/). Push content or style updates to `main` to trigger a new deployment. No custom build workflow is required; `.nojekyll` serves the files as a static website.

## Attribution and license

Original layout and styles: Ankit Sultana's Researcher, GNU GPL version 3. This adaptation changes the Jekyll/Liquid layout into static HTML, adds Traditional Chinese draft CV content, improves keyboard focus and mobile layout, and removes sample personal content and analytics. Changes dated 2026-10-05. Preserve `LICENSE` and attribution when distributing the adapted template. No sample resume, institutional logo, or author photo is included.

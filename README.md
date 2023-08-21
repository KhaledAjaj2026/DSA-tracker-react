# DSA Problem Tracker - React Migration

A dedicated tracker for all DSA problems solved, presented as a table of problems.

## Lessons Learned

Same project as [this](https://github.com/KhaledAjaj2026/DSA-problem-tracker) except migrated to a React environment. Quite the challenge converting global variables from old project, to state in new project. Separating parts of page into components made development much easier than working with just HTML5 markup. Really liked using hooks to manage interactivity of site.

Learned about React render lifecycles, and how useEffect re-renders site on state change (can be set to change only when specified state has changed). useEffect helped trigger localStorage changes when user input updates state. Learned how to pass props between components to keep components DRY as possible. Learned about WCAG to adjust contrasts of element colors.

## Possible Future Features

- Change from localStorage to dedicated server for user data.
- Update styling to comply with webkit and moz browsers.

## Deployment

This site was deployed using [Netlify](https://www.netlify.com/).

This site was built using [Vite](https://vitejs.dev/).

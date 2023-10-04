# DSA Problem Tracker - React Migration

A dedicated tracker for all DSA problems solved, presented as a table of problems. Uses localStorage to store data on machine.

## How to Use

Time yourself while solving DSA questions. Once completed, enter the following:

- Question (name of the problem)
- Source (e.g. LeetCode #258, CTCI #64, G4G)
- Categories (e.g. arrays, two-pointers, DFS/BFS)
- Difficulty (easy/medium/hard)
- Date (mm/dd/yyyy)
- Time (minutes to solve question)

Then click the 'Enter' button and see your data inserted into the table below. Table data remains on localStorage.

## Motivation

While a simple Excel document would suffice for the same purpose, this challenged me to make a web-app dedicated to saving progress in DSA practice. Through practical experience I learned about many CRUD concepts and best practices.

## Lessons Learned

Same project as [this](https://github.com/KhaledAjaj2026/DSA-problem-tracker) except migrated to a React environment. Quite the challenge converting global variables from old project, to state in new project. Separating parts of page into components made development much easier than working with just HTML5 markup. Really liked using hooks to manage interactivity of site.

Learned about React render lifecycles, and how useEffect re-renders site on state change (can be set to change only when specified state has changed). useEffect helped trigger localStorage changes when user input updates state. Learned how to pass props between components to keep components DRY as possible. Learned about WCAG to adjust contrasts of element colors.

## Possible Future Features

- Change from localStorage to dedicated server for user data.
- Update styling to comply with webkit and moz browsers.
- Implement Edit functionality, able to edit specific items in table.
- Create performance tab that shows averages of solve-times and # of easy/med/hard questions completed.
- Create sort/filter menu.

## Deployment

This site was deployed using [Netlify](https://www.netlify.com/).

This site was built using [Vite](https://vitejs.dev/).

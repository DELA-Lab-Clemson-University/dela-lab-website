# DELA Lab website

A dependency-free static site for DELA Lab at Clemson University.

## Editing content

Update the matching file in `js/` to add or edit shared content: `projects.js`, `people.js`, `publications.js`, or `news.js`. The pages render from those shared records, so content does not need to be duplicated.

People categories are controlled by `DELA_PEOPLE_GROUPS` in `js/people.js`. A category appears on the People page only when at least one entry in `DELA_PEOPLE` uses that exact group name. Empty categories remain hidden automatically.

Replace all bracketed placeholder content before launch, especially contact details, profile biography and education, publication metadata, news, and images.

Preview locally with `python3 -m http.server`, then open the displayed localhost address.

This is a test for github process. 

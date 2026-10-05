# DELA Lab website

A dependency-free static site for DELA Lab at Clemson University.

## Editing content

Update `js/data.js` to add or edit projects, people, publications, and news. The pages render from those shared records, so content does not need to be duplicated.

People categories are controlled by `peopleGroups`. A category appears on the People page only when at least one entry in `people` uses that exact group name. Empty categories remain hidden automatically.

Replace all bracketed placeholder content before launch, especially contact details, profile biography and education, publication metadata, news, and images.

Preview locally with `python3 -m http.server`, then open the displayed localhost address.

This is a test for github process. 

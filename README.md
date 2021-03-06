# Dark Mode Coding Challenge π

### Difficulty: Medium | Time required: ~ 30 minutes

# Requirements
- Add dark-mode switching functionality to the *existing* dark-mode button
  - Utilise the *existing* dark-mode scss file by adding a `dark-mode` class to the root `html` element
- When in Dark mode:
  - The button icon should be `faSun`
  - The button icon colour should be `(#FFA500)`. You can use the `color` prop on the `Icon` component.

# Think about
- How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?
- How we can apply a class to the `html` DOM element

![screenshot-light](https://puu.sh/Fq13d/04a9e5ad48.png)
![screenshot-dark](https://puu.sh/Fq132/caa2fa0c6d.png)

# File Structure 

    src
    βββ common              # Theme context
    βββ routes              # Page view containers
    β   βββ App
    β       βββcomponents   # Page view component
    β       βββstyles       # Page view styles
    βββ styles              # Color theme for app
    βββ index.jsx           # Entry of react app

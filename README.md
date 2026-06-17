# World Cup Knockout Sweep

Static GitHub Pages site for a FIFA World Cup 2026 knockout-stage sweep bracket.

## Files

- `index.html` - page structure.
- `styles.css` - layout and visual styling.
- `script.js` - match data, team placeholders, flag slots, sweep names, scores, and progression placeholders.

## Updating The Bracket

Edit `script.js`.

For each match, update the two team objects:

```js
{ flag: "ENG", name: "England", owner: "Darren", score: "2" }
```

Use an emoji flag instead of text if you prefer:

```js
{ flag: "🏴", name: "England", owner: "Darren", score: "2" }
```

For later rounds, replace `Winner Match 74`, `Winner Match 101`, and similar placeholders as teams progress.

## Publishing On GitHub Pages

1. Create a GitHub repository.
2. Upload these files to the repository root.
3. In GitHub, go to `Settings` > `Pages`.
4. Set the source to `Deploy from a branch`.
5. Select the branch, usually `main`, and the root folder.
6. Save.

GitHub will publish the site at a URL like:

```text
https://your-username.github.io/your-repository/
```

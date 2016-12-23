# ESLint config ngerritsen

My recommended ESLint rules.

## Usage

Install the required packages:

```bash
npm install eslint eslint-plugin-import eslint-plugin-filenames eslint-config-ngerritsen --save-dev

# Or with yarn:

yarn add eslint eslint-plugin-import eslint-plugin-filenames eslint-config-ngerritsen --dev
```

Then extend the config in your `.eslintrc`:

```json
{
  "extends": "ngerritsen"
}
```

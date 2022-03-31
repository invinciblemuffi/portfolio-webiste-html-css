# My Portfolio website
- HTML, CSS based Portfolio webpage
- ES6 Module System files
- Javascript Notes (ES5, ES6, ES7)
- Typescript Notes

## How to run typescript file
- If package.json does not exists then `npm init`
- In terminal `npm i typescript -g`
- Check `tsc -v` for typescript version
- In terminal type `tsc main.ts` which will output `main.js` file in same working directory
- In terminal, type `tsc --init`, will generate `tsconfig.json` file. Scroll down to outDir option and uncomment it. Put a folder of your choice `outDir: './dist'`. Now when you run tsc in terminal, `main.ts` file will be emitted in `dist` folder

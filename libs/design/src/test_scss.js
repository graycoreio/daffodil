const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob');

describe('Sass', () => {

  // Find all of the Sass files that end in `*.spec.scss` in any directory in this project.
  // I use path.resolve because True requires absolute paths to compile test files.
  const sassTestFiles = glob.sync(path.resolve(__dirname, './**/*.spec.scss'));

  // Run True on every file found with the describe and it methods provided
  sassTestFiles.forEach(file =>
    sassTrue.runSass(
      {
        file: file,
      },
      {
        sass: require('sass'),
        describe,
        it,
      }
    )
  )
})
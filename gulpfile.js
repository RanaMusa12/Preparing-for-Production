// gulpfile.js
import gulp from 'gulp';
import shell from 'gulp-shell';

// Task: Build the project using Parcel
export const build = shell.task(['npx parcel build index.html']);

// Task: Serve the project using Parcel (for development)
export const serve = shell.task(['npx parcel index.html']);

// Task: Run unit tests using Mocha
export const test = shell.task(['npx mocha']);

// Task: Run Cypress end-to-end tests
export const e2e = shell.task(['npx cypress run']);

// Composite tasks
export const all = gulp.series(build, test, e2e);

// Default task (when you just run "gulp")
export default all;

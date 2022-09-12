/**
 * Takes a string representing a filepath and converts it to a cross-env safe path.
 *
 * i.e. "/path/to/testFile.csv" and returns "/path/to/testf_ile.csv"
 *
 * Useful when, for example, on Linux "/path/to/testFile.csv" and "/path/to/TestFile.csv" are different files,
 * but this the same is not true on Windows.
 */
export const crossOsFilename = (path: string) => path.replace(/[A-Z]/g, (a) => a.toLocaleLowerCase().concat('_'));

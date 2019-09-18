import { capitalize } from "./capitalize";

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('myword')).toEqual('Myword');
  })

  it('should not crash if the string is null' ,() => {
    expect(capitalize(null)).toEqual(null);
  })
})
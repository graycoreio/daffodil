import { generateClassName } from './generate-class-name';

describe('@daffodil/content | generateClassName', () => {
  it('should return a string starting with schema-el-', () => {
    const result = generateClassName();
    expect(result.startsWith('schema-el-')).toBe(true);
  });

  it('should return unique class names on consecutive calls', () => {
    const result1 = generateClassName();
    const result2 = generateClassName();
    const result3 = generateClassName();

    expect(result1).not.toBe(result2);
    expect(result2).not.toBe(result3);
    expect(result1).not.toBe(result3);
  });

  it('should include a numeric suffix', () => {
    const result = generateClassName();
    const suffix = result.replace('schema-el-', '');
    expect(Number.isNaN(Number(suffix))).toBe(false);
  });

  it('should generate incrementing class names', () => {
    const result1 = generateClassName();
    const result2 = generateClassName();

    const num1 = parseInt(result1.replace('schema-el-', ''), 10);
    const num2 = parseInt(result2.replace('schema-el-', ''), 10);

    expect(num2).toBe(num1 + 1);
  });
});

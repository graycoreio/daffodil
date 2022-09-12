import { CrossEnvSafeNameProcessor } from './cross-env-safe-name';

describe('Cross Env Safe Name Generator', () => {
  let processor: CrossEnvSafeNameProcessor;

  beforeAll(() => {
    processor = new CrossEnvSafeNameProcessor();
  });

  it('should add a new `safeName` key to the doc', () => {
    expect(processor.$process([{ name: 'test' }])).toEqual([
      { name: 'test', safeName: 'test' },
    ]);
  });

  it('should add convert capitals in `name` to `$char_', () => {
    expect(processor.$process([{ name: 'testMyFile' }])).toEqual([
      { name: 'testMyFile', safeName: 'testm_yf_ile' },
    ]);

    expect(processor.$process([{ name: 'TestMyFile' }])).toEqual([
      { name: 'TestMyFile', safeName: 't_estm_yf_ile' },
    ]);

    expect(processor.$process([{ name: 'SOME_RIDICULOUS_STRING' }])).toEqual([
      { name: 'SOME_RIDICULOUS_STRING', safeName: 's_o_m_e__r_i_d_i_c_u_l_o_u_s__s_t_r_i_n_g_' },
    ]);
  });
});

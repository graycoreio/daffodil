import { crossOsFilename } from './cross-os-filename';

describe('', () => {
  it('should not modify an already safe path', () => {
    expect(crossOsFilename('test')).toEqual('test');
  });

  it('should add convert capitals in `name` to `$char_', () => {
    expect(crossOsFilename('testMyFile')).toEqual('testm_yf_ile');
    expect(crossOsFilename('TestMyFile')).toEqual('t_estm_yf_ile');
    expect(crossOsFilename('SOME_RIDICULOUS_STRING')).toEqual('s_o_m_e__r_i_d_i_c_u_l_o_u_s__s_t_r_i_n_g_');
  });
});

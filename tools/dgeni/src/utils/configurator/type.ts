import { Package } from 'dgeni';

export type Configurator<T> = (config: T) => (pkg: Package) => Package;

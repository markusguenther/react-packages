import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

const createConfig = ({ title = '', dirname = '' }) => {
  const config = {
    input: `${dirname}/src/index.ts`,
    output: {
      file: `${dirname}/dist/bundle.js`,
      format: 'cjs'
    },
    plugins: [
      resolve(),
      typescript({
        exclude: ['**/*.test.ts', '**/*.test.tsx']
      }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true
      }),
      commonjs()
    ]
  };

  return config;
};

export default createConfig({ dirname: __dirname });

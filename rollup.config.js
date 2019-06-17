import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/SimpleReach.js',
    output: {
        file: 'SimpleReach.js',
       format: 'umd',
        exports: 'named',
        name: 'mp-simplereach-kit',
        strict: false
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ]
},
{
    input: 'src/SimpleReach.js',
    output: {
        file: 'dist/SimpleReach.js',
        format: 'umd',
        exports: 'named',
        name: 'mp-simplereach-kit',
        strict: false
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ]
}
] 
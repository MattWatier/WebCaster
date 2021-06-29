module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-combine-media-query')({
            preset: 'default',
        }),
        require('postcss-merge-rules')({
            preset: 'default',
        }),
    ],
};
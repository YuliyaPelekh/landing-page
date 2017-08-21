module.exports = {
    src: {
        scss: 'scss/*.scss'
    },
    dest: {
        css: 'build/css/'
    },
     browserSyncConfig: {
        server: './',
        host: 'localhost',
        port: 3000
    },
    maps: '../maps/'
}
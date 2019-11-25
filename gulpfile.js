const {
    series,
    parallel,
    watch,
    src,
    dest
} = require('gulp'),
    browserSync = require('browser-sync').create(),
    less = require("gulp-less")


/**
 * @description 本地web服务器
 * @returns 
 */
function webService() {
    browserSync.init({
        port: 3007,
        server: {
            baseDir: 'src/',
            directory: true,
            middleware: function (req, res, next) {
                const fs = require('fs');
                const ssi = require('ssi');
                const baseDir = 'src/';
                let pathname = require('url').parse(req.url).pathname;
                let filename = require('path').join(baseDir, pathname.substr(-1) === '/' ? pathname + 'index.shtml' : pathname);

                let parser = new ssi(baseDir, baseDir, '/**/*.shtml', true);

                if (filename.indexOf('.shtml') > -1 && fs.existsSync(filename)) {
                    res.end(parser.parse(filename, fs.readFileSync(filename, {
                        encoding: 'utf8'
                    })).contents);
                } else {
                    next();
                }

            }
        }
    });
}


/**
 * @description 文件调整监听
 * @returns 
 */
function watchFile() {
    let watcher = watch(['src/*.*', 'src/**/*.*']);
    watcher.on('change', path => {
        src(['src/*.less', 'src/**/*.less'])
        .pipe(less())
        .pipe(dest('src/'))
        browserSync.reload()
    });
}

//调试命令
exports.serv = series(parallel(series(watchFile), webService));

const fs = require('fs');
const moment = require('moment');
const uglifycss = require('uglifycss');

module.exports = {
    getReadingTime(text) {
        const wordsPerMinute = 200;
        const numberOfWords = text.split(/\s/g).length;
        const minutes = Math.ceil(numberOfWords / wordsPerMinute);

        return `Takes about ${minutes} minute${minutes !== 1 ? 's' : ''} to read`;
    },
    getCopyrightYear() {
        const todayYear = Number(moment().format('YYYY'));
        const foundingYear = 2006;

        if (todayYear === foundingYear) {
            return `${foundingYear}`;
        }

        return `${foundingYear} – ${todayYear}`;
    },
    getCSS(coreStyles, layoutStyles) {
        let css = '';
        let partials = [];

        if (coreStyles) {
            partials = [...partials, ...coreStyles];
        }

        if (layoutStyles) {
            partials = [...partials, ...layoutStyles];
        }

        //css += fs.readFileSync(`${__dirname}/tmp/css/reset.css`, 'utf-8');
        //css += fs.readFileSync(`${__dirname}/tmp/css/tokens.css`, 'utf-8');

        if (partials.length) {
         partials.forEach(partial => {
            css += fs.readFileSync(`./_src/_includes/css/${partial}`);
         }); 
        }

        return uglifycss.processString(css);
    }
}
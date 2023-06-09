let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '32px',
    mobileFirst: false,
    container: {
        maxWidth: '1170px',
        fields: '375px'
    },
    breakPoints: {
        lm: {
            width: '1740px',
            fields: '100px'
        },
        xmd: {
            width: '1140px',
            fields: '50px'
        },
        md: {
            width: '940px',
            fields: '36px'
        },
        sm: {
            width: '768px',
            fields: '36px'
        },
        xxs: {
            width: '330px',
            fields: '10px'
        }
    }
};

smartgrid('./src/styles/helpers', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */

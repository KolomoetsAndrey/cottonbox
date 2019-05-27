var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 16, /* number of grid columns */
    offset: '10px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1920px', /* max-width оn very large screen */
        fields: '140px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1600px',
            fields: '140px'
        },
        md: {
            width: '1200px',
            fields: '107px'
        },
        sm: {
            width: '900px',
            fields: '90px'
        },
        xs: {
            width: '500px',
            fields: '40px'
        },
        xss: {
            width: '320px',
            fields: '27px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('E:/INSTALL/MRWEBS/cottonbox/css', settings);
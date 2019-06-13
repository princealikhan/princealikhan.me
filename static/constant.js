import Icon from '@material-ui/core/Icon';

import PHP from '../static/icons/technology/php.svg';
import JAVASCRIPT from '../static/icons/technology/javascript.svg';
import MYSQL from '../static/icons/technology/mysql.svg';
import CSS from '../static/icons/technology/css.svg';
import SCSS from '../static/icons/technology/scss.svg';
import HTML from '../static/icons/technology/html.svg';
import TYPESCRIPT from '../static/icons/technology/typescript.svg';

import REACT from '../static/icons/technology/react.svg';
import LARAVEL from '../static/icons/technology/laravel.svg';
import FIREBASE from '../static/icons/technology/firebase.svg';

export const siteData = {
    name: 'Prince Ali Khan',
    email: 'princealikhan08@gmail.com',
    languages: [
        {
            technology: 'Javascript',
            icon: JAVASCRIPT
        },
        {
            technology: 'TypeScript',
            icon: TYPESCRIPT
        },
        {
            technology: 'PHP',
            icon: PHP
        },
        {
            technology: 'MySql',
            icon: MYSQL
        },
        {
            technology: 'SCSS',
            icon: SCSS
        },
        {
            technology: 'HTML',
            icon: HTML
        },
        {
            technology: 'CSS',
            icon: CSS
        },
    ],
    tools: [
        {
            technology: 'React',
            icon: REACT
        },
        {
            technology: 'Laravel',
            icon: LARAVEL
        },
        {
            technology: 'Firebase',
            icon: FIREBASE
        },
    ],
    primaryMenu: [
        {
            title: 'Home',
            path: '/',
            icon: (<Icon className={'fas fa-home'} style={{ fontSize:20 }}/>)
        },
        {
            title: 'About',
            path: '/about',
            icon: (<Icon className={'fas fa-info-circle'} style={{ fontSize:20 }}/>)
        },
        {
            title: 'Work',
            path: '/work',
            icon: (<Icon className={'fas fa-briefcase'} style={{ fontSize: 20 }} />)
        },
        {
            title: 'Contact',
            path: '/contact',
            icon: (<Icon className={'fas fa-envelope'} style={{ fontSize: 20 }} />)
        }
    ],
    socialNav: [
        {
            icon: (<Icon className={'fab fa-linkedin-in'} style={{ fontSize:14 }} />),
            url: 'https://www.linkedin.com/in/princealikhan',
        },
        {
            icon: (<Icon className={'fab fa-github'} style={{ fontSize:14 }} />),
            url: 'https://github.com/princealikhan',
        },
        {
            icon: (<Icon className={'fab fa-twitter'} style={{ fontSize:14 }} />),
            url: 'https://twitter.com/PrinceAliKhan_',
        },
        {
            icon: (<Icon className={'fab fa-behance'} style={{ fontSize:14 }} />),
            url: 'https://www.behance.net/princealikhan',
        }
    ]
}
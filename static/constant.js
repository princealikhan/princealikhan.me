import Icon from '@material-ui/core/Icon';

import PHP from '../static/icons/technology/php.svg';
import JAVASCRIPT from '../static/icons/technology/javascript.svg';
import MYSQL from '../static/icons/technology/mysql.svg';
import CSS from '../static/icons/technology/css.svg';
import SCSS from '../static/icons/technology/scss.svg';
import HTML from '../static/icons/technology/html.svg';
import TYPESCRIPT from '../static/icons/technology/typescript.svg';

import REACT from '../static/icons/technology/react.svg';
import ANGULAR from '../static/icons/technology/angular.svg';
import JQUERY from '../static/icons/technology/jquery.svg';
import WEBPACK from '../static/icons/technology/webpack.svg';
import TRAVIS from '../static/icons/technology/travis.svg';
import FIREBASE from '../static/icons/technology/firebase.svg';
import LARAVEL from '../static/icons/technology/laravel.svg';
import CODEIGNITER from '../static/icons/technology/codeigniter.svg';
import WORDPRESS from '../static/icons/technology/wordpress.svg';
import APACHE from '../static/icons/technology/apache.svg';
import NGINX from '../static/icons/technology/nginx.svg';
import GIT from '../static/icons/technology/git.svg';
import AWS from '../static/icons/technology/aws.svg';
import DOCKER from '../static/icons/technology/docker.svg';
import VAGRANT from '../static/icons/technology/vagrant.svg';


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
            technology: 'Angular',
            icon: ANGULAR
        },
        {
            technology: 'Jquery',
            icon: JQUERY
        },
        {
            technology: 'Webpack',
            icon: WEBPACK
        },
        {
            technology: 'Firebase',
            icon: FIREBASE
        },
        {
            technology: 'Laravel',
            icon: LARAVEL
        },
        {
            technology: 'Codeigniter',
            icon: CODEIGNITER
        },
        {
            technology: 'Wordpress',
            icon: WORDPRESS
        },
        {
            technology: 'Apache',
            icon: APACHE
        },
        {
            technology: 'Nginx',
            icon: NGINX
        },
        {
            technology: 'GIT',
            icon: GIT
        },
        {
            technology: 'Amazon AWS',
            icon: AWS
        },
        {
            technology: 'Travis',
            icon: TRAVIS
        },
        {
            technology: 'Vagrant',
            icon: VAGRANT
        },
        {
            technology: 'Docker',
            icon: DOCKER
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
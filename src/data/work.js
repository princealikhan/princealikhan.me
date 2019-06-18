import ZjbLogo from '../../static/images/zjb-logo.svg';
import ZjbBadge from '../../static/images/zjb-badge.svg';

import OpenSourceLogo from '../../static/images/opensource-logo.svg';
import OpenSourceBadge from '../../static/images/opensource-badge.svg';

import ElegantBadge from '../../static/images/elegant-badge.svg';
import ElegantLogo from '../../static/images/elegant-logo.svg';

import EduLogo from '../../static/images/edumob-logo.svg';
import EduBadge from '../../static/images/edumob-badge.svg';

import RoundGlassLogo from '../../static/images/roundglass-logo.svg';
import RoundGlassBadge from '../../static/images/roundglass-badge.svg';

import AwareLogo from '../../static/images/aware-logo.svg';
import AwareBadge from '../../static/images/aware-badge.svg';

// Technologies
import PHP from '../../static/icons/technology/php.svg';
import JAVASCRIPT from '../../static/icons/technology/javascript.svg';
import MYSQL from '../../static/icons/technology/mysql.svg';
import CSS from '../../static/icons/technology/css.svg';
import SCSS from '../../static/icons/technology/scss.svg';
import HTML from '../../static/icons/technology/html.svg';
import TYPESCRIPT from '../../static/icons/technology/typescript.svg';

import REACT from '../../static/icons/technology/react.svg';
import ANGULAR from '../../static/icons/technology/angular.svg';
import JQUERY from '../../static/icons/technology/jquery.svg';
import WEBPACK from '../../static/icons/technology/webpack.svg';
import TRAVIS from '../../static/icons/technology/travis.svg';
import FIREBASE from '../../static/icons/technology/firebase.svg';
import LARAVEL from '../../static/icons/technology/laravel.svg';
import CODEIGNITER from '../../static/icons/technology/codeigniter.svg';
import WORDPRESS from '../../static/icons/technology/wordpress.svg';
import APACHE from '../../static/icons/technology/apache.svg';
import NGINX from '../../static/icons/technology/nginx.svg';
import GIT from '../../static/icons/technology/git.svg';
import AWS from '../../static/icons/technology/aws.svg';
import DOCKER from '../../static/icons/technology/docker.svg';
import VAGRANT from '../../static/icons/technology/vagrant.svg';

export const workData = {
    professional: [
        // {
        //     title: "Lorem Ipsume",
        //     shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        //     orgLogo: RoundGlassLogo,
        //     cornerBanner: RoundGlassBadge,
        //     style: {
        //         color: 'red'
        //     }
        // },
        {
            title: "Subscription Dashboard",
            shortDesc: "Recurring Subscription management dashboard for aware app.",
            longDesc: "Aware is a mindfulness meditation mobile app which provides guided meditation sessions to users. Developed the web front end for Aware Dashboard using ReactJS. Some of the features of this dashboard include User Profile, App related stats, Coupon redemption, Gifting module and Payment gateway integration using Paddle.",
            technologies: [
                {
                    icon: FIREBASE,
                    name: "Firebase"
                },
                {
                    icon: REACT,
                    name: "ReactJS"
                },
                {
                    icon: HTML,
                    name: "Html"
                },
                {
                    icon: SCSS,
                    name: "SCSS"
                },
                {
                    icon: CSS,
                    name: "CSS"
                }
            ],
            link: 'https://my.awaremeditationapp.com',
            orgLogo: AwareLogo,
            cornerBanner: AwareBadge,
            style: {
                color: 'blue'
            }
        },
        {
            title: "Sales website",
            shortDesc: "Created a sales website for Zoojoo.BE...",
            longDesc: "Created a sales website for Zoojoo.BE to showcase product potential, what value it proposing and generate leads.",
            technologies: [
                {
                    icon: WORDPRESS,
                    name: "wordpress"
                }
            ],
            link: 'https://www.zoojoo.be',
            orgLogo: ZjbLogo,
            cornerBanner: ZjbBadge,
            style: {
                color: 'yellow'
            }
        },
        {
            title: "Sales website",
            shortDesc: "Created a sales website for Aware",
            longDesc: "Created a website for Aware to promote app explain the science behind meditation and sharing helpful short digestible content to be mindful.",
            technologies: [
                {
                    icon: WORDPRESS,
                    name: "wordpress"
                }
            ],
            link: 'https://awaremeditationapp.com',
            orgLogo: AwareLogo,
            cornerBanner: AwareBadge,
            style: {
                color: 'blue'
            }
        },
        {
            title: "e-Learning Platform",
            shortDesc: "Built an e-Learning platform for women to get back to their career.",
            longDesc: "I was responsible for the technical aspect of Edumob where we build a SaaS-based platform for women to get back to their careers in the Technology sector. We provide structured mentoring sessions, free E-learning courses, live support, certification and job placement assistance. I was completely accountable for every single piece of technology from the backend to frontend.",
            technologies: [
                {
                    icon: LARAVEL,
                    name: "Laravel"
                },
                {
                    icon: PHP,
                    name: "PHP"
                },
                {
                    icon: MYSQL,
                    name: "mysql"
                },
                {
                    icon: HTML,
                    name: "HTML"
                },
                {
                    icon: CSS,
                    name: "CSS"
                },
                {
                    icon: JAVASCRIPT,
                    name: "Javascript"
                },
                {
                    icon: ANGULAR,
                    name: "Angular"
                },
                {
                    icon: WEBPACK,
                    name: "Webpack"
                },
            ],
            orgLogo: EduLogo,
            cornerBanner: EduBadge,
            style: {
                color: 'green'
            }
        }
    ],
    openSource: [
        {
            title: "Elegant UI",
            shortDesc: "Modern CSS framework based on flexbox & grid.",
            longDesc: "Modern CSS framework based on flexbox & grid. A Framework for any device. Elegant UI is semantic, readable, flexible, and completely customizable",
            orgLogo: ElegantLogo,
            cornerBanner: ElegantBadge,
            technologies: [
                {
                    icon: CSS,
                    name: "CSS"
                },
                {
                    icon: SCSS,
                    name: "SCSS"
                },
                {
                    icon: WEBPACK,
                    name: "Webpack"
                }
            ],
            link: 'https://elegant.surge.sh',
            style: {
                color: 'gray'
            }
        },
        {
            title: "Mautic API for Laravel",
            shortDesc: "Open Source Marketing Automation API",
            longDesc: "Mautic Automation API enables the capability to send your app user related to data to Mautic campaign app using this minimal configuring package. In order to drive more personalized campaing.",
            orgLogo: OpenSourceLogo,
            cornerBanner: OpenSourceBadge,
            technologies: [
                {
                    icon: PHP,
                    name: "PHP"
                }
            ],
            link: 'https://packagist.org/packages/princealikhan/laravel-mautic-api',
            style: {
                color: 'gray'
            }
        },
        {
            title: "DevDock",
            shortDesc: "Simplify Web Development Environment with Docker",
            longDesc: "DevDock simplifies web development environment setup hassle-free with Docker. Build for LAMP environment parameter under consideration",
            orgLogo: OpenSourceLogo,
            cornerBanner: OpenSourceBadge,
            technologies: [
                {
                    icon: DOCKER,
                    name: "Docker"
                }
            ],
            link: 'https://packagist.org/packages/princealikhan/paytm-payment',
            style: {
                color: 'gray'
            }
        },
        {
            title: "Paytm Payment Library",
            shortDesc: "You can pay through Paytm just writing few lines of codes",
            longDesc: "Paytm Payment Library For Laravel this package will simplify the payment flow with the defined methods. You can pay through Paytm just writing a few lines of codes with a very little amount of configuration",
            orgLogo: OpenSourceLogo,
            cornerBanner: OpenSourceBadge,
            technologies: [
                {
                    icon: PHP,
                    name: "PHP"
                }
            ],
            link: 'https://packagist.org/packages/princealikhan/paytm-payment',
            style: {
                color: 'gray'
            }
        },
    ]
}
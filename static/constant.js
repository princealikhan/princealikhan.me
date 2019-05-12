import Icon from '@material-ui/core/Icon';
import HomeRounded from '@material-ui/icons/HomeRounded';

export const siteData = {
    name: 'Prince Ali Khan',
    email: 'princealikhan08@gmail.com',
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
    ],
    pages: {
        about: {
            hero: {
                header: 'About',
                description: 'Hey, thanks a lot for showing interest in my work. Below you will find some of my work that I loved working on. I hope you like it too.',
            }
        },
        experience: {
            hero: {
                header: 'Work Experience',
                description: 'I am a passionate (and hence a) self taught artist. Along with a full time job as Client Engagament Manager at a Corporate Wellness company called Zoojoo.be, I also maintain time to build and expand my skillset in the design field. Over the last one year, I have worked on a couple of UI & UX projects on the side. I also own an Instagram comic page that translates my daily experiences into funny webcomics. You can download my resume here for a detailed understanding of my experience.',
                cta: {
                    text: 'Download',
                }
            }
        },
        work: {
            hero: {
                header: 'Work',
                description: 'Hey, thanks a lot for showing interest in my work. Below you will find some of my work that I loved working on. I hope you like it too.',
            }
        },
        contact: {
            hero: {
                header: 'Contact',
                description: 'Hey, thanks a lot for showing interest in my work. Below you will find some of my work that I loved working on. I hope you like it too.',
            }
        }
    }
}
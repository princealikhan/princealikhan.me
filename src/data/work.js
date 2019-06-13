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
import FirebaseIcon from '../../static/icons/technology/firebase.svg';
import ReactIcon from '../../static/icons/technology/react.svg';

export const workData = {
    professional : [
        {
            title: "Lorem Ipsume",
            shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            orgLogo: RoundGlassLogo,
            cornerBanner: RoundGlassBadge,
            style: {
                color: 'red'
            }
        },
        {
            title: "Lorem Ipsume",
            shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            orgLogo: ZjbLogo,
            cornerBanner: ZjbBadge,
            style: {
                color: 'yellow'
            }
        },
        {
            title: "Subscription Dashboard",
            shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            technologies: [
                {
                    icon: FirebaseIcon,
                    name: "Firebase"
                },
                {
                    icon: ReactIcon,
                    name: "ReactJS"
                }
            ],
            orgLogo: AwareLogo,
            cornerBanner: AwareBadge,
            style: {
                color: 'blue'
            }
        },
        {
            title: "Lorem Ipsume",
            shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            orgLogo: EduLogo,
            cornerBanner: EduBadge,
            style: {
                color: 'green'
            }
        }
    ],
    openSource: [
        {
            title: "Lorem Ipsume",
            shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            orgLogo: OpenSourceLogo,
            cornerBanner: OpenSourceBadge,
            style: {
                color: 'gray'
            }
        },
        {
            title: "Lorem Ipsume",
            shortDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            orgLogo: OpenSourceLogo,
            cornerBanner: ElegantBadge,
            style: {
                color: 'gray'
            }
        },
    ]
}
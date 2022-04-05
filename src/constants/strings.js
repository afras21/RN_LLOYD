import icons from "./icons";
import images from "./images";

const STATUS_BAR_STYLE = 'light-content';
const TAGLINE = 'TAGLINE';
const LOGIN_WITH_FACEBOOK = 'Login with Facebook';
const LOGIN_WITH_GOOGLE = 'Login with Google';
const SWIPER_HEIGHT = '100%'

const ON_BOARDING_HEADING1 = 'Lorem ipsum dolore';
const ON_BOARDING_DESCRIPTION1= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.';
const ON_BOARDING_HEADING2 = 'Lorem ipsum dolore';
const ON_BOARDING_DESCRIPTION2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.';

const LOGIN_TEXT = 'Contact Us / Login';
const SERVICE_POLICY_TEXT = 'By joining, You agree to';
const SERVICE_POLICY_LINK = 'Terms of Service & Privacy policy';

const LOGIN_WITH_FACEBOOK_GRAPH_REQUEST_ROUTE = '/me'
const LOGIN_WITH_FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
const LOGIN_WITH_FACEBOOK_PROFILE_REQUEST_PARAMS = 'id,email,name,first_name,last_name,picture';

const LOGIN_WITH_GOOGLE_SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const LOGIN_WITH_GOOGLE_WEB_CLIENT_ID = '322501477862-0pqk97a5r8q614m2t2tvob307oqdjt21.apps.googleusercontent.com';

const HOME_SLIDER1 = [{ src: images.SLIDER_IMAGE1 }, { src: images.SLIDER_IMAGE2 }, { src: images.SLIDER_IMAGE3 }, { src: images.SLIDER_IMAGE4 }]

const HOME_SLIDER2 = [  
    {   
        name: 'Terrence’s Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594531-4ed21dca-bd8b-4918-ad56-097c70262955.png',
    },
    {   
        name: 'Kyle Prater Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594533-5042d84e-21f9-4f05-9c20-973738e7f78f.png',
    },
    {   
        name: 'Jermy Hill Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594539-372ccd91-cdd8-40cb-809b-7b5aa58061e5.png',
    },
    {   
        name: 'Mike Outlaw food & Gaming',
        image: 'https://user-images.githubusercontent.com/54505967/161594541-bfd4dc7f-3a22-43fc-94b7-f5ed1b04ff5d.png',
    },
    {   
        name: 'Jermy Hill Footbal',
        image: 'https://user-images.githubusercontent.com/54505967/161594543-4cc512d9-6106-4938-8198-1b93936efef5.png',
    },{   
        name: 'Terrence’s Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594531-4ed21dca-bd8b-4918-ad56-097c70262955.png',
    },
    {   
        name: 'Kyle Prater Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594533-5042d84e-21f9-4f05-9c20-973738e7f78f.png',
    },
    {   
        name: 'Jermy Hill Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594539-372ccd91-cdd8-40cb-809b-7b5aa58061e5.png',
    },
    {   
        name: 'Mike Outlaw food & Gaming',
        image: 'https://user-images.githubusercontent.com/54505967/161594541-bfd4dc7f-3a22-43fc-94b7-f5ed1b04ff5d.png',
    },
    {   
        name: 'Jermy Hill Footbal',
        image: 'https://user-images.githubusercontent.com/54505967/161594543-4cc512d9-6106-4938-8198-1b93936efef5.png',
    },{   
        name: 'Terrence’s Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594531-4ed21dca-bd8b-4918-ad56-097c70262955.png',
    },
    {   
        name: 'Kyle Prater Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594533-5042d84e-21f9-4f05-9c20-973738e7f78f.png',
    },
    {   
        name: 'Jermy Hill Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594539-372ccd91-cdd8-40cb-809b-7b5aa58061e5.png',
    },
    {   
        name: 'Mike Outlaw food & Gaming',
        image: 'https://user-images.githubusercontent.com/54505967/161594541-bfd4dc7f-3a22-43fc-94b7-f5ed1b04ff5d.png',
    },
    {   
        name: 'Jermy Hill Footbal',
        image: 'https://user-images.githubusercontent.com/54505967/161594543-4cc512d9-6106-4938-8198-1b93936efef5.png',
    },{   
        name: 'Terrence’s Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594531-4ed21dca-bd8b-4918-ad56-097c70262955.png',
    },
    {   
        name: 'Kyle Prater Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594533-5042d84e-21f9-4f05-9c20-973738e7f78f.png',
    },
    {   
        name: 'Jermy Hill Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594539-372ccd91-cdd8-40cb-809b-7b5aa58061e5.png',
    },
    {   
        name: 'Mike Outlaw food & Gaming',
        image: 'https://user-images.githubusercontent.com/54505967/161594541-bfd4dc7f-3a22-43fc-94b7-f5ed1b04ff5d.png',
    },
    {   
        name: 'Jermy Hill Footbal',
        image: 'https://user-images.githubusercontent.com/54505967/161594543-4cc512d9-6106-4938-8198-1b93936efef5.png',
    },{   
        name: 'Terrence’s Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594531-4ed21dca-bd8b-4918-ad56-097c70262955.png',
    },
    {   
        name: 'Kyle Prater Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594533-5042d84e-21f9-4f05-9c20-973738e7f78f.png',
    },
    {   
        name: 'Jermy Hill Football',
        image: 'https://user-images.githubusercontent.com/54505967/161594539-372ccd91-cdd8-40cb-809b-7b5aa58061e5.png',
    },
    {   
        name: 'Mike Outlaw food & Gaming',
        image: 'https://user-images.githubusercontent.com/54505967/161594541-bfd4dc7f-3a22-43fc-94b7-f5ed1b04ff5d.png',
    },
    {   
        name: 'Jermy Hill Footbal',
        image: 'https://user-images.githubusercontent.com/54505967/161594543-4cc512d9-6106-4938-8198-1b93936efef5.png',
    }
]

const NO_OF_COLUMNS_FLATLIST_HOME_SCREEN = 3;

const HOME_SCREEN_QUIZ_LINEAR_GRADIENT_COLORS = ['#232323', '#232323', '#5B5B5B', '#505050'];

const HOME_SCREEN_FOOTER_TEXT1 = '100% Safe';
const HOME_SCREEN_FOOTER_TEXT2 = '100% Secure';
const HOME_SCREEN_FOOTER_TEXT3 = '100% Trustable';
const HOME_SCREEN_KNOW_MORE_TEXT = 'know more';

const SLIDER2_IMAGE = 'https://miro.medium.com/max/1400/1*wwNz9v_JYs0ej59W3LhA-w.jpeg';
const SLIDER2_HEADING = 'Trending Trivia Quiz';
const SLIDER2_VIEW_MORE = 'View all';

const HOME_SCREEN_BUTTONS = [
    {
        text1: 'All',
        text2: 'Trivia',
        src: icons.CATEGORY
    },
    {
        text1: 'Influence',
        text2: 'Trivia',
        src: icons.BATTLE
    },
    {
        text1: 'Advance',
        text2: 'Premium',
        src: icons.CROWN
    },
    {
        text1: 'Free',
        text2: 'Trivia',
        src: icons.GIFT
    }
];

export default{
    STATUS_BAR_STYLE,
    TAGLINE,
    LOGIN_WITH_FACEBOOK,
    LOGIN_WITH_GOOGLE,
    SWIPER_HEIGHT,
    ON_BOARDING_HEADING1,
    ON_BOARDING_DESCRIPTION1,
    ON_BOARDING_HEADING2,
    ON_BOARDING_DESCRIPTION2,
    LOGIN_TEXT,
    SERVICE_POLICY_TEXT,
    SERVICE_POLICY_LINK,
    LOGIN_WITH_FACEBOOK_GRAPH_REQUEST_ROUTE,
    LOGIN_WITH_FACEBOOK_PERMISSIONS,
    LOGIN_WITH_FACEBOOK_PROFILE_REQUEST_PARAMS,
    LOGIN_WITH_GOOGLE_SCOPES,
    LOGIN_WITH_GOOGLE_WEB_CLIENT_ID,
    HOME_SLIDER1,
    HOME_SLIDER2,
    NO_OF_COLUMNS_FLATLIST_HOME_SCREEN,
    HOME_SCREEN_QUIZ_LINEAR_GRADIENT_COLORS,
    HOME_SCREEN_FOOTER_TEXT1,
    HOME_SCREEN_FOOTER_TEXT2,
    HOME_SCREEN_FOOTER_TEXT3,
    HOME_SCREEN_KNOW_MORE_TEXT,
    SLIDER2_IMAGE,
    SLIDER2_HEADING,
    SLIDER2_VIEW_MORE,
    HOME_SCREEN_BUTTONS
}
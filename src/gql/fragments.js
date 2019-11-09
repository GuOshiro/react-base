import gql from 'graphql-tag';

export const LIST_POST = gql`
    query posts{
        posts{
            title
            text
            image{
                url
            }       
        }
    }
`;

export const LIST_POST = gql`
    query meta{
		metaTags{
            description
            generator
            keywords
            language,
            revisit
            robots
            themeColor
            title
            ico{
                url
            }
            ogLocale
            ogUrl
            ogDescription
            ogTitle
            ogSiteName
            ogImage{
                url
            }
            twitterCard
            twitterSite
            twitterTitle
            twitterDescription
            twitterCreator
            twitterImage{
                url
            }
        }
    }
`;


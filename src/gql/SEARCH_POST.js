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

export const SEARCH_POST = gql`
    query ($where: JSON){
        posts(where: $where){
            title,
            text,
            image{
                url
            }
        }
    }
`;

export const SEARCH_POST_BY_TITLE = gql`
    query ($where: JSON){
        posts(where: $where){
            title,
            text,
            createdAt,
            image{
            url
            },
                metaTags{
            title
            generator
            keywords
            language,
            revisit
            robots
            themeColor
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
            description
            }
        }
    }
`;
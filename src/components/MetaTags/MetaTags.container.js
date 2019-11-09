import Helmet from 'react-helmet'
import React from 'react'
import PropType from 'prop-types'
import api from '../../utils/services'

const MetaTags = ({ metaTags }) => (
    <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="robots" content={metaTags.robots} />
        <meta name="revisit-after" content={metaTags.revisit} />
        <meta name="language" content={metaTags.language} />
        <meta name="generator" content={metaTags.generator} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content={metaTags.themeColor} />
        <link rel="icon" type="image/png" href={`${api.url}/${metaTags.ico}`} />

        {/* facebook */}
        <meta property="og:locale" content={metaTags.ogLocale} />
        <meta property="og:url" content={metaTags.ogUrl} />
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:site_name" content={metaTags.ogSiteName} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:image" content={`${api.url}/${metaTags.ogImage}`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />

        {/* twitter */}
        <meta name="twitter:card" content={metaTags.twitterCard} />
        <meta name="twitter:site" content={metaTags.twitterSite} />
        <meta name="twitter:title" content={metaTags.twitterTitle} />
        <meta name="twitter:description" content={metaTags.twitterDescription} />
        <meta name="twitter:creator" content={metaTags.twitterCreator} />
        <meta name="twitter:image" content={`${api.url}/${metaTags.twitterImage}`} />

    </Helmet>
)


MetaTags.defaultProps = {
    metaTags: {
        description: '',
        generator: '',
        ico: '',
        keywords: '',
        language: '',
        ogDescription: '',
        ogImage: '',
        ogLocale: '',
        ogSiteName: '',
        ogTitle: '',
        ogUrl: '',
        revisit: '',
        robots: '',
        themeColor: '',
        title: 'X-Apps - Desenvolvimento de software sob demanda',
        twitterCard: '',
        twitterCreator: '',
        twitterDescription: '',
        twitterImage: '',
        twitterSite: '',
        twitterTitle: ''
    }
}

MetaTags.propType = {
    metaTags: PropType.shape({
        description: PropType.string,
        generator: PropType.string,
        ico: PropType.object,
        keywords: PropType.string,
        language: PropType.string,
        ogDescription: PropType.string,
        ogImage: PropType.string,
        ogLocale: PropType.string,
        ogSiteName: PropType.string,
        ogTitle: PropType.string,
        ogUrl: PropType.string,
        revisit: PropType.string,
        robots: PropType.string,
        themeColor: PropType.string,
        title: PropType.string,
        twitterCard: PropType.string,
        twitterCreator: PropType.string,
        twitterDescription: PropType.string,
        twitterImage: PropType.string,
        twitterSite: PropType.string,
        twitterTitle: PropType.string,
    })
}

export default MetaTags
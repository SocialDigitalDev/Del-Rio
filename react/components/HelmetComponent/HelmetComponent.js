import React from 'react'
import { Helmet } from 'vtex.render-runtime'

const HelmetComponent = () => {
  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="vLzE9jJgMTr43cmd9C2AsTSVI_s2ei4nW5YMRAYWOmg" />
        <meta name="google-site-verification" content="Sm9uN48zIvnTXEN1h8xbxwoVzUh2W0PbP9vJuZTT3Fw" />
        <meta data-react-helmet="true" name="robots" content="index, follow" />
        {/* ADOPT */}
        <meta name="adopt-website-id" content="73060e7b-e878-4fe1-8d88-61ef6bf6768a" />
        <script src="//tag.goadopt.io/injector.js?website_code=73060e7b-e878-4fe1-8d88-61ef6bf6768a" class="adopt-injector"></script>
        {/* ADOPT END */}
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=f3cd4b59-86ca-4f09-a9cf-75a8f54b9525"></script>
        <script type="text/javascript" src="https://www.socialdigitalcommerce.com.br/newrelic/delrio-newrelic.js"></script>
      </Helmet>
    </>
  )
}

export default HelmetComponent;
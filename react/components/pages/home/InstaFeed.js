import React, { useState, useEffect } from 'react'
import { Helmet, canUseDOM } from 'vtex.render-runtime'


const InstaFeed = () => {

  return (
    <>
      <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Helmet>

      {canUseDOM && (
        <div className="instafeed">
          <div className="elfsight-app-240cf1b5-ff6d-479d-8be6-3c6d142c790a"></div>
        </div>
      )}
    </>
  )
}

export default InstaFeed
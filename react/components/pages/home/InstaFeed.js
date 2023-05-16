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
          <div className="elfsight-app-81d555dd-befe-4754-9291-7a0918c2fa3b"></div>
        </div>
      )}
    </>
  )
}

export default InstaFeed
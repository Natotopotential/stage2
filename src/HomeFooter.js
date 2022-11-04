import React from 'react'
import slackLogo from "./image/slacklogo.png"
import gitHubLogo from "./image/gitHubLogo.png"

function HomeFooter() {
  return (
    <article className='section-footer'>
      <img src={slackLogo} className='section-img slacks' alt='slack logo' />
      <img src={gitHubLogo} className='section-img git' alt='slack logo' />
    </article>
  );
}

export default HomeFooter
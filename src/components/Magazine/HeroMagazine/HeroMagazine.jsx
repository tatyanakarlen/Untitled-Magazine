import React from 'react'

const HeroMagazine = ({hamburgerBtnActive}) => {

  let heading = ''
  if (!hamburgerBtnActive) {
    heading = <div>
    <h1>UNTITLED<span class="text-warning">magazine</span></h1>
    <p class="lead my-3">
      Your best source for daily content from our print edition
    </p>
    </div>
  }

  return (
    <section
      class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
    >
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between" style={{ marginTop: '4rem'}}>
          {heading}
       </div>
      </div>
    </section>
  )
}

export default HeroMagazine

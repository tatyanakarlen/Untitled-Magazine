import React from 'react'

const BreadCrumb = ({ text }) => {
  return (
    <div>
      <nav aria-label="breadcrumb" style={{  width: "100%", margin: '0 auto', marginTop: '-0.75rem' }}>
                    <ol style={{ backgroundColor: "#ced4da", height: "2.5rem" }}class="breadcrumb">
                    {/* paddingTop: '-2rem', paddingLeft: '0.5rem' */}
                        <li class="breadcrumb-item text-primary">{text}</li>
                        <li class="breadcrumb-item active" aria-current="page">Overview</li>
                    </ol>
                </nav>
    </div>
  )
}

export default BreadCrumb

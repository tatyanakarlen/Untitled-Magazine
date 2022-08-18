import React from 'react'

const BreadCrumb = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
                    <ol style={{ backgroundColor: "#ced4da", height: "2.5rem", paddingTop: '0.5rem', paddingLeft: '0.5rem' }}class="breadcrumb">
                        
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Overview</li>
                    </ol>
                </nav>
    </div>
  )
}

export default BreadCrumb

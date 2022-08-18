import React from 'react'

const TableMain = () => {
  return (
    <div>
      <div class="table-responsive-md">
          <p class="h4 text-left" style={{ textAlign: 'left'}}>Latest Posts</p>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          
          <th scope="col">Date</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">ID</th>
          
          

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">August 16 2002 5:55 pm</th>
          <td>What went wrong with everything?</td>
          <td>Mark Snith</td>
          <td>76736526754625465</td>
          <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
        </tr>
        <tr>
          <th scope="row">August 16 2002 5:55 pm</th>
          <td>What went wrong with everything?</td>
          <td>Mark Snith</td>
          <td>76736526754625465</td>
          <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
        </tr>
        <tr>
          <th scope="row">August 16 2002 5:55 pm</th>
          <td>What went wrong with everything?</td>
          <td>Mark Snith</td>
          <td>76736526754625465</td>
          <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
        </tr>
      
      </tbody>
    </table>
    <a href="#" class="btn btn-block btn-light" style={{ width: "100%"}}>View all</a>
  </div>
 
    </div>
  )
}

export default TableMain

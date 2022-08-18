import React from 'react'

const TableMain = () => {
  return (
    <div>
      <div class="table-responsive-md">
          <p class="h4 text-left" style={{ textAlign: 'left'}}>Latest Posts</p>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default TableMain

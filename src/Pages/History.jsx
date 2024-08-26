import React from 'react'

function History() {
  return (
    <div className='p-5'>
      <h1>Watch history</h1>
      <table className='table table-borderd'>
        <thead>
          <tr>
            <th>video id</th>
            <th>title</th>
            <th>video url</th>
            <th>date and time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>big dawgs</td>
            <td>https://www.youtube.com/embed/hOHKltAiKXQ?si=KsWvwjtVyGcq7E9z</td>
            <td>2024-09-24</td>
            <td>
              <button className='btn'>
              <i className="fa-solid fa-trash" style={{color: "#2a7dd5",}} />

              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
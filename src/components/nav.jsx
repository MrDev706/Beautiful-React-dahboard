import React from 'react'

const Nav = () => {
  return (
    <>
   
                        <div className=' border rounded border-secondary p-3'>
                            <div className='fw-bold mt-2 mb-2'>Latest Customer Onboards</div>
                            <div className="">
                            <table className="table table-striped">
                                <thead>
                                  <tr className='bg-primary text-white w-100'>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Joined on</th>
                                    <th scope="col"></th>
                                   </tr>
                                </thead>
                              <tbody>
                                <tr>
                                   <td>Mark</td>
                                   <td>Otto</td>
                                   <td>2 mins ago</td>
                                   <td>
                                    <button type="button" className="btn btn-primary">View Details</button>
                                   </td>
                                </tr>
                                <tr>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>10 min ago</td>
                                  <td>
                                    <button type="button" className="btn btn-primary">View Details</button>
                                   </td>
                                </tr>
                                <tr>
                                   <td>Larry</td>
                                   <td>the Bird</td>
                                   <td>1 h ago</td>
                                   <td>
                                    <button type="button" className="btn btn-primary">View Details</button>
                                   </td>
                                </tr>
                              </tbody>
                            </table>
                            <div>
                              <button type="button" className="btn btn-primary text-white mb-3">View All Customers </button>
                            </div>
                            </div>
                        </div>
                       
                  
    
    </>
  )
}

export default Nav
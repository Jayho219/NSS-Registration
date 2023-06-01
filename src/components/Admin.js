
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Admin_Navbar from './Admin_Navbar';


const AdminHeader = () => {
  return (

    <div className="d-flex align-items-start justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="container">
        {/* <Admin_Navbar/> */}
        <div className="row">
          <div className="col-sm-6 d-flex align-items-center">
            <div className="dataTables_length bs-select" id="dtBasicExample_length">
              <div className="d-flex align-items-center">
                <label className="mb-0 mr-2">Show</label>
                <select
                  name="dtBasicExample_length"
                  aria-controls="dtBasicExample"
                  className="custom-select custom-select-sm form-control form-control-sm"
                  style={{ width: "auto" }}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <label className="mb-0 ml-2">entries</label>
              </div>
            </div>
          </div>

          <div className="col-sm-6 d-flex align-items-center justify-content-end">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{ width: "200px" }}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped" id="userTable">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Student Name</th>
                <th>Registration No</th>
                <th>Branch</th>
                <th>Attendance Status</th>
                <th>Batch(Year)</th>
                <th>Admin2</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody id="tbody">
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2021001</td>
                <td>Computer Science</td>
                <td>
                  <span className="badge bg-success">Present</span>
                </td>
                <td>2021</td>
                <td>GS</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>2021002</td>
                <td>Electrical Engineering</td>
                <td>
                  <span className="badge bg-danger">Absent</span>
                </td>
                <td>2022</td>
                <td>VP</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2021001</td>
                <td>Computer Science</td>
                <td>
                  <span className="badge bg-success">Present</span>
                </td>
                <td>2021</td>
                <td>GS</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>

             
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>2021002</td>
                <td>Electrical Engineering</td>
                <td>
                  <span className="badge bg-danger">Absent</span>
                </td>
                <td>2022</td>
                <td>VP</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2021001</td>
                <td>Computer Science</td>
                <td>
                  <span className="badge bg-success">Present</span>
                </td>
                <td>2021</td>
                <td>GS</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2021001</td>
                <td>Computer Science</td>
                <td>
                  <span className="badge bg-success">Present</span>
                </td>
                <td>2021</td>
                <td>GS</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>2021002</td>
                <td>Electrical Engineering</td>
                <td>
                  <span className="badge bg-danger">Absent</span>
                </td>
                <td>2022</td>
                <td>VP</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2021001</td>
                <td>Computer Science</td>
                <td>
                  <span className="badge bg-success">Present</span>
                </td>
                <td>2021</td>
                <td>GS</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
              
              {/* Table rows */}
            </tbody>
          </table>

          <div className="panel-footer">
            <div className="row">
              <div className="col-sm-6 col-xs-6">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <div className="col-sm-6 col-xs-6">
                <ul className="pagination hidden-xs pull-right">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
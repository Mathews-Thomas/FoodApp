import React from 'react'
import '../admin/Admin.css'
function Admin() {
  return (
    <>
        <div>
        <div  className="d-flex flex-column">
            {/* Main Content */}
            <div>
            {/* Topbar */}
            <nav className=" navbar navbar-expand navbar-light bg-light mt-3 mb-5 shadow pb-3">
    <a className="navbar-brand text-danger font-italic" >Admin Panel</a>
    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button class="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
            </div>
        </div>
    </form>
    <ul class="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item">Settings</a>
                <a className="dropdown-item" >Activity Log</a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" >Logout</a>
            </div>
        </li>
    </ul>
</nav>

            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h5 mb-0 text-dark">Dashboard</h1>
                <a
                    href="#"
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                    <i className="fas fa-download fa-sm text-white-50" /> Generate
                    Report
                </a>
                </div>
                {/* Content Row */}
                <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                            120$
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-calendar fa-1x" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)
                            </div>
                            <div className="h5 mb-0 font-weight-bold ">
                            10$
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-1x" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Orders
                            </div>
                            <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold">
                                50%
                                </div>
                            </div>
                            <div className="col">
                                <div className="progress progress-sm mr-2">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-1x" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Pending Requests Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Orders
                            </div>
                            <div className="h5 mb-0 font-weight-bold">
                            18
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-comments fa-1x" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Content Row */}
                <div className="row">
                {/* Area Chart */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                        </h6>
                        <div className="dropdown no-arrow">
                        <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                        >
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">
                            Action
                            </a>
                            <a className="dropdown-item" href="#">
                            Another action
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            Something else here
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <div className="chart-area">
                        <canvas id="myAreaChart" />
                        </div>
                    </div>
                    </div>
                </div>
                {/* Pie Chart */}
                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                        Revenue Sources
                        </h6>
                        <div className="dropdown no-arrow">
                        <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                        >
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">
                            Action
                            </a>
                            <a className="dropdown-item" href="#">
                            Another action
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            Something else here
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart" />
                        </div>
                        <div className="mt-4 text-center small">
                        <span className="mr-2">
                            <i className="fas fa-circle text-primary" /> Direct
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-success" /> Social
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-info" /> Referral
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Content Row */}
                <div className="row">
                {/* Content Column */}
                <div className="col-lg-6 mb-4">
                    {/* Project Card Example */}
                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                        Projects
                        </h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">
                        Server Migration <span className="float-right">20%</span>
                        </h4>
                        <div className="progress mb-4">
                        <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                        </div>
                        <h4 className="small font-weight-bold">
                        Sales Tracking <span className="float-right">40%</span>
                        </h4>
                        <div className="progress mb-4">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                        </div>
                        <h4 className="small font-weight-bold">
                        Customer Database <span className="float-right">60%</span>
                        </h4>
                        <div className="progress mb-4">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                        </div>
                        <h4 className="small font-weight-bold">
                        Payout Details <span className="float-right">80%</span>
                        </h4>
                        <div className="progress mb-4">
                        <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                        </div>
                        <h4 className="small font-weight-bold">
                        Account Setup <span className="float-right">Complete!</span>
                        </h4>
                        <div className="progress">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                        </div>
                    </div>
                    </div>
                    {/* Color System */}
                   
                </div>
                <div className="col-lg-6 mb-4">
                    {/* Illustrations */}
                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                        Customers
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: "25rem" }}
                            src="img/undraw_posting_photo.svg"
                            alt="..."
                        />
                        </div>
                        <p>
                        
                        </p>
                    </div>
                    </div>
                    {/* Approach */}
                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                        customer Details
                        </h6>
                    </div>
                    <div className="card-body">
                        <p>
Health Requires,Healthy food
Manage your recipes the easy way
Share recipes with your friends and discover new ones
More than 15,000 recipes from around the world!
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                <span>2013 company . All rights and copy rights reserved</span>
                </div>
            </div>
            </footer>
            {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
                </h5>
                <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                Select "Logout" below if you are ready to end your current session.
            </div>
            <div className="modal-footer">
                <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
                >
                Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                Logout
                </a>
            </div>
            </div>
        </div>
        </div>
  </>
  
  )
}

export default Admin
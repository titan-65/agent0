import React from 'react'
import Layout from '../components/Layout/Layout.js'
import { GenHead2, GenPara } from "../styles/indexStyles"

// import Project from '../components/Project'

const projects = [
  {
    image: "https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2dyYW1tZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Tourist Website",
    link: "www.google.com"
  },
  {
    image: "https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "Tourist",
    link: "www.google.com"
  },
  {
    image: "https://images.unsplash.com/photo-1606146485652-75b352ce408a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: " Website",
    link: "www.google.com"
  }
]

export default function Jobs() {
  return (
    <Layout>
      <div style={{ paddingBottom: '50px'}}>
        <div style={{ backgroundSize: 'cover', display: 'block', height: '30vh', backgroundPosition: "center", backgroundRepeat: 'no-repeat', width: '100%', backgroundImage: `url('banner2.jpg')`}}>
        </div>
        <div className="container">
          <GenHead2>Our Jobs</GenHead2>
          <GenPara lessSize lessSpacing grey>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </GenPara>
          <section className="container">
            <div className="row">
              {projects.map(project => {
                return (
                  <div className="col-md-4">
                    <div className="card" style={{ width: '100%'}}>
                      <img src={project.image} alt={project.title} height="250px"/>
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>

          </section>
        </div>
      </div>
    </Layout>
  )
}
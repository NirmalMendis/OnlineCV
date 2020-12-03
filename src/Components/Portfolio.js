import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" alt={projects.title} src={projectImage} />
              <Card.Body>
                <Card.Title><h5>{projects.title}</h5></Card.Title>
                <Card.Text>
                  <p>{projects.category}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

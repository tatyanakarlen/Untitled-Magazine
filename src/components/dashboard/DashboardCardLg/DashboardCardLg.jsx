import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './DashboardCardLg.css'

const DashboardCardLg = () => {
  return (
    <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <div class="h1 mb-1">
        <Icon.ArrowRight />
        </div>
        <h5 class="card-title mb-1">Latest Articles</h5>
        <hr class="bg-danger border-2 border-top border-danger" />
        <div class="dashboard-cards-articles">
          <p class="left-p card-text text-primary dashboard-text ">
            Aug 8th 2002 12:30 pm
          </p>
          <p class="card-text font-italic dashboard-text underlined-text">
            What is wrong with the Kardashians?
            <span class="no-underline">by Michelle Adams</span>
          </p>
        </div>
        <hr class="bg-danger border-2 border-top border-danger" />
        <div class="dashboard-cards-articles">
          <p class="left-p card-text text-primary dashboard-text">
            Aug 9th 2002 11:00 am
          </p>
          <p class="card-text font-italic dashboard-text underlined-text">
            The rise and fall of everything
            <span style={{ textDecoration: 'none' }} class="no-underline">
              by John Smith
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardLg;

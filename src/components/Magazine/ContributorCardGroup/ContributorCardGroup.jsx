import React from 'react';
import ContributorCard from '../ContributorCard/ContributorCard';

const ContributorCardGroup = () => {
  return (
    <div class="p-5 bg-dark">
      <div class="container">
        <h2 class="text-center text-white">Contributors</h2>
        <div class="row g-4">
         <ContributorCard />
         <ContributorCard />
         <ContributorCard />
         <ContributorCard />

        </div>

      </div>
    </div>
  );
};

export default ContributorCardGroup;

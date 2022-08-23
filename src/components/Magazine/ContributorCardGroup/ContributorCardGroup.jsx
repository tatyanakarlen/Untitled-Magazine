import React from 'react';
import ContributorCard from '../ContributorCard/ContributorCard';

const ContributorCardGroup = (props) => {
  return (
    <div class="p-5 bg-dark">
      <div class="container">
        <h2 class="text-center text-white">Contributors</h2>
        <div class="row g-4">
        {props.contributors.map(m => 
          <ContributorCard name={m.name} bio={m.bio}  image={m.image} city={m.city} country={m.country}/> )} 
         {/* <ContributorCard />
         <ContributorCard />
         <ContributorCard />
         <ContributorCard /> */}

        </div>

      </div>
    </div>
  );
};

export default ContributorCardGroup;

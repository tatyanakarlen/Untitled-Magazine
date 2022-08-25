import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa'
import NavMagazine from '../../../components/Magazine/NavMagazine/NavMagazine'
import HeroMagazine from '../../../components/Magazine/HeroMagazine/HeroMagazine';
import ArticleCardGroup from '../../../components/Magazine/ArticleCardGroup/ArticleCardGroup';
import ArticleCard from '../../../components/Magazine/ArticleCard/ArticleCard';
import ContributorCardGroup from '../../../components/Magazine/ContributorCardGroup/ContributorCardGroup';
import FooterMagazine from '../../../components/Magazine/FooterMagazine/FooterMagazine';
import './MagazinePage.css'
import ContributorCard from '../../../components/Magazine/ContributorCard/ContributorCard';




const MagazinePage = (allArticles, user) => {

  const [searchInput, setSearchInput] = useState("");

  

  return (
    <div>
      <NavMagazine setSearchInput={setSearchInput} />
      <HeroMagazine />
     <ArticleCardGroup articles={allArticles} searchInput={searchInput} />
     <ContributorCardGroup contributors={allArticles.allContributors}/>
     <FooterMagazine user={allArticles.user}/>

     
  
    </div>
  )
}

export default MagazinePage

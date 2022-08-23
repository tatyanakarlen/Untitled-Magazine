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




const MagazinePage = (allArticles) => {

  const [searchInput, setSearchInput] = useState("");

  let [checkArticle, setCheckArticle] = useState(false)

  return (
    <div>
      <NavMagazine setSearchInput={setSearchInput} checkArticle={checkArticle} setCheckArticle={setCheckArticle}/>
      <HeroMagazine />
     <ArticleCardGroup articles={allArticles} searchInput={searchInput} checkArticle={checkArticle}/>
     <ContributorCardGroup />
     <FooterMagazine />

     
  
    </div>
  )
}

export default MagazinePage

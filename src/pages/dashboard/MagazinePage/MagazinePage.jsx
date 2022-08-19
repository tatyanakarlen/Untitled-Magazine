import React from 'react'
import { Link } from 'react-router-dom';
import NavMagazine from '../../../components/Magazine/NavMagazine/NavMagazine'
import HeroMagazine from '../../../components/Magazine/HeroMagazine/HeroMagazine';
import ArticleCardGroup from '../../../components/Magazine/ArticleCardGroup/ArticleCardGroup';
import ArticleCard from '../../../components/Magazine/ArticleCard/ArticleCard';
import './MagazinePage.css'

const MagazinePage = () => {
  return (
    <div>
      <NavMagazine />
      <HeroMagazine />
     <ArticleCardGroup />
    <Link className="nav-left-link" to="/login">
        ADMIN LOGIN
      </Link>
    </div>
  )
}

export default MagazinePage

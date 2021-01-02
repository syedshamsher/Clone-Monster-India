import React from 'react'
import {CarouselContainer} from "./Carousel/CarouselContainer" 
import {MainPageSearchBarContainer} from "./MainPageSearchContainer/MainPageSearchBarContainer"
import "./MainPageSearchContainer/MainPageSearch.css"
import {WalkInJobCarousel} from "./Carousel/WalkInJobCarousel/WalkInJobCarousel"
import { RecentJobsCarousel } from './Carousel/RecentJobsCarousel/RecentJobsCarousel'
import {JobVacancyContainer} from  "./JobVacancyContainer"
import Footer from '../Footer/Footer'
import {CompanyCarousel} from "./Carousel/CompanyCarousel"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];
export const MainPageSearch = () => {
    return (
        <div className = "wrapper">
            <MainPageSearchBarContainer/>
            <div style = {{ paddingLeft: "120px"}}>
               <CompanyCarousel breakPoints = {breakPoints} />
                <CarouselContainer breakPoints = {breakPoints}  />
                <RecentJobsCarousel breakPoints = {breakPoints} />
                <WalkInJobCarousel breakPoints = {breakPoints}/>
                
                <div style = {{width: 900}}>
                  <JobVacancyContainer/>

                </div>
            </div>
            <br /> <br />
            <Footer />
        
        </div>
       
        
    
    
    )
}

import React from 'react'
import {CarouselContainer} from "./Carousel/CarouselContainer" 
import {MainPageSearchBarContainer} from "./MainPageSearchContainer/MainPageSearchBarContainer"
import "./MainPageSearchContainer/MainPageSearch.css"
import {WalkInJobCarousel} from "./Carousel/WalkInJobCarousel/WalkInJobCarousel"
import { RecentJobsCarousel } from './Carousel/RecentJobsCarousel/RecentJobsCarousel'
import {JobVacancyContainer} from  "./JobVacancyContainer"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];
export const MainPageSearch = () => {
    return (
        <div className = "wrapper">
            <MainPageSearchBarContainer/>
            <div style = {{ paddingLeft: "120px"}}>
                <CarouselContainer breakPoints = {breakPoints}  />
                
                <RecentJobsCarousel breakPoints = {breakPoints} />
                <WalkInJobCarousel breakPoints = {breakPoints}/>
                <div className = "middle_wrapper">
                  <JobVacancyContainer/>

                </div>
               

            </div>

            
            
        
        </div>
       
        
    
    
    )
}

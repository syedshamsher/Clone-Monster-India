import React from 'react'
import "./MainPageSearch.css"
import styled from 'styled-components'
import { sendData } from '../../../Redux/JobSearchFirst/action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SuggestionBox = styled.div`
    & * {
        position: relative;
        width: 360px;
        padding: 8px;
        height: 20px;
        backgroundColor: white;
        padding: 5px;
        border-bottom: 0.5px solid lightgrey
    }
    & :nth-child(${({active}) => active}){
        background: #F8F8F8;
        color: #6C54DA;
        font-weight: bold
    }
`

export const SearchBarContainer = () => {
    const data = useSelector(state => state.jobs.jobs)
    const [keyword, setKeyword] = React.useState("")
    const [keywordSuggestion, setKeywordSuggestion] = React.useState("")
    const [active, setActive] = React.useState(0)
    const dispatch = useDispatch()
    const history = useHistory()

    const keywordClick = (key) => {
        setKeyword(key)
        setKeywordSuggestion("")
    }

    React.useEffect(() => {
        if(keyword === ""){
            setKeywordSuggestion("")
        }
        else{
            let output = data.filter(item => item.profile_name.toLowerCase().indexOf(keyword) !== -1)
            setKeywordSuggestion(output)
        }

    }, [keyword])

    const handleClick = () => {
        dispatch(sendData(keyword))
        history.push("/jobsearch")
    }

    return (
        <>
            <img  className = "search_icon" alt = "search"  src ="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"/>
            <input 
                value = {keyword} 
                onChange = {(e) => setKeyword(e.target.value)} 
                placeholder = "Keyword" 
                style = {{height: 35, width: 700, marginBottom: 20, border: "none", padding: 5, color: "darkgrey", outline: "none"}}
            />
            <SuggestionBox style = {{maxHeight: 130,textAlign: "left", overflow: "scroll", position: "absolute", marginTop: 47, width: 597, background: "white"}} active = {active} >
            {
                keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 710, paddingLeft: 20}} onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
            }
            </SuggestionBox>
            <img className ="voice_search_icon" src = "https://cdn0.iconfinder.com/data/icons/communication-thin-part-1/100/1-16-512.png" alt = "voice icon"/>  
        
            <button onClick= {handleClick} style ={{background: "#5D50A6", borderRadius: "0px", border: "0px", height: 44, width: 120, color: "white", outline: "none", fontSize: 15, fontWeight: 700, outline: "none"}} >Search</button> 
        </>
    )
}

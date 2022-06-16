import React from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { IResult } from '../../data/data'
import './ResultsModal.css'
interface IProps{
    closeModal: ()=>void
    results: IResult,
    container: HTMLElement
}
const ResultsModal = ({results, container, closeModal}:IProps) => {
    const navigate = useNavigate()
    const navHome = () => {
        closeModal()
        navigate('/')
    }
  return ReactDom.createPortal(
      <>
    <div className='review-modal-blur'>

        <div className="review-modal">
            <h1>Review</h1>
                {results.questions.map(value=>{
                    return (
                        <p>You answered: {value.userAnswer} | {value.correct ? "Correct": "Wrong"} </p> 
                    )
                })}
                <button onClick={()=>{navHome()}}>Return Home</button>
        </div>

    </div>
    </>
    ,
    container
  )
}

export default ResultsModal
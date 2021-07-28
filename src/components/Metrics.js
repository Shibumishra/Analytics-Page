import React,{useState} from 'react'
import { VscSettings } from "react-icons/vsc";
import { FaCalendarAlt } from "react-icons/fa";

function Metrics() {
     const [cardForm, setcardForm] = useState(false)

      const formToggle = () =>{
        setcardForm(!cardForm)
    }
    return (
        <>
        <div style={{margin: "10px"}}>
          <h1>Analytics</h1>
        </div>
         <div style={{marginTop: "30px", margin: "10px"}}>
            <button className="btn3"><FaCalendarAlt style={{color: "blue"}} /> Abcd - Jul 14, 2021</button>
            <button style={{float: "right"}} className="btn3" onClick={formToggle} ><VscSettings style={{color: "blue"}} /> Settings</button>
         </div>
        {cardForm && (
        <div className="filter_metrics">
          <div>
            <p style={{fontSize: "20px"}}>Dimensions and Metrics</p>
          </div>
        <div className="filter_contar">
            <div className="filted_data">Date</div>
            <div className="filted_data">App</div>
            <div className="filted_data">Clicks</div>
            <div className="filted_data">Ad Requests</div>
            <div className="filted_data">Ad Response</div>
            <div className="filted_data">Impression</div>
            <div className="filted_data">Revenue</div>
            <div className="filted_data">Fill Rate</div>
            <div className="filted_data">CTR</div>
        </div>
      <div className="filter_btn">
         <button className="btn1">Close</button>
         <button className="btn2">Apply Changes</button>
      </div>
      </div>
      )}
      </>
    )
}

export default Metrics

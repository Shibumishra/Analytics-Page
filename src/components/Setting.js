import React, { useEffect, useState } from 'react'
import { columnApi } from '../Utlis/Apis';
import axios from 'axios';
import moment from "moment";
import { FaFilter } from "react-icons/fa";

function Setting() {
    const [datas, setData] = useState('')
    useEffect(() => {
        async function getUser() {
          try {
            const response = await axios.get(columnApi);
            const data = response.data
            console.log(data)
            setData(data.data);
          } catch (error) {
            console.error(error);
          }
        }
        getUser()
    }, []);

    return (
        <div id="table-wrapper">

            <div id="table-headers">
                <table >
                    <thead>
                        <tr>
                            <th className="column1">
                            <div><FaFilter /></div>
                            Date</th>
                            <th className="column2">
                            <div><FaFilter /></div>
                            App Name</th>
                            <th className="column3">
                            <div><FaFilter /></div>
                            AD Request</th>
                            <th className="column4">
                            <div><FaFilter /></div>
                            AD Response</th>
                            <th className="column5">
                            <div><FaFilter /></div>
                            Impression</th>
                            <th className="column6">
                            <div><FaFilter /></div>
                            Clicks</th>
                            <th className="column7">
                            <div><FaFilter /></div>
                            Revenue</th>
                            <th className="column8">
                            <div><FaFilter /></div>
                            Fill Rate</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div id="table-data">
                <table id="myTable">
                    <tbody id="tbval">

                    </tbody>
                </table>
                <table>
                        <tbody>
                            {datas.length && datas.map((item)=> (
                            <tr className="data-row" key={item.app_id}>
                                    <td className="column1">{moment.utc(item.date).format("DD MMM YYYY")}</td>
                                    <td className="column2">ShareChat</td>
                                    <td className="column3">{item.requests}</td>
                                    <td className="column4">{item.responses}</td>
                                    <td className="column5">{item.impressions}</td>
                                    <td className="column6">{item.clicks}</td>
                                    <td className="column7">{item.revenue}</td>
                                    <td className="column8">{`${(item.requests / item.responses) * 100}${"%"}`}</td>
                            </tr>
                                ))}
                                </tbody>
                </table>
            </div>

        </div>
    )
}

export default Setting

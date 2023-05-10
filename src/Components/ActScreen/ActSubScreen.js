import React, { useState } from 'react'

import ActComponent from "../ActComponent/ActComponent";
import { MultiSelect } from "react-multi-select-component";
import ActComponent1 from "../ActComponent/ActComponent1";

export default function ActSubScreen() {
    const [selected, setSelected] = useState([]);
    const options = [

    ];
    return (
        <div style={{ padding: '100px' }}>
            <div>
                <span className="act-heading">Time to take action 💪</span>
            </div>
            <div style={{ padding: '60px 0', display: 'flex' }}>
                <span className="act-subheading">Find out what you can take action on based on what you’ve learned.</span>
                <div className="dropdown-select">
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        isCreatable={true}
                        hasSelectAll={false}
                    />
                </div>
            </div>
            <div style={{ fontFamily: 'Avenir-Black', paddingBottom: '20px', fontSize: '24px' }}>
                Most recent modules
            </div>
            <div>
                <ActComponent text='Composting' />
                <ActComponent1 text='Food waste and storage' />
            </div>
        </div>
    )
}

import '../App.css';
import folderIcon from '../images/folder-icon.png'
import queryIcon from '../images/query-icon.png'
// import getDb from './firebase'
// import { getDocs, collection } from "firebase/firestore"; 
// import React, { useState } from "react"

// export const findAll = async () => {
//     const doc_refs = await getDocs(collection(getDb(), "users"))

//     const res = []

//     doc_refs.forEach(user => {
//         res.push(user)
//     })

//     return res
// }


function FileView() {

    return (
        <div className="file-container">
            <div className='file-container-title'><h2>Folders & History</h2></div>
            <div className='inner-file-container'>
                <div className='folders-container'>
                    <div className='folders'>
                        <div className='folder-name-group'>
                            <img src={folderIcon} className='folder-image'/>
                            <p className='folder-name'>Name</p>
                        </div>

                        <div className='folder-name-group'>
                            <img src={folderIcon} className='folder-image'/>
                            <p className='folder-name'>Name</p>
                        </div>

                        <div className='folder-name-group'>
                            <img src={folderIcon} className='folder-image'/>
                            <p className='folder-name'>Name</p>
                        </div>

                        <div className='folder-name-group'>
                            <img src={folderIcon} className='folder-image'/>
                            <p className='folder-name'>Name</p>
                        </div>
                        
                    </div>
                </div>

                Unfiled Queries
                <div className='queries-container'>
                    <div className='query-group'>
                        <img src={queryIcon} className='query-icon'/>
                        <p className='folder-name'>Query</p>
                    </div>
                    <div className='query-group'>
                        <img src={queryIcon} className='query-icon'/>
                        <p className='folder-name'>Query</p>
                    </div>
                    <div className='query-group'>
                        <img src={queryIcon} className='query-icon'/>
                        <p className='folder-name'>Query</p>
                    </div>
                    <div className='query-group'>
                        <img src={queryIcon} className='query-icon'/>
                        <p className='folder-name'>Query</p>
                    </div>
                    <div className='query-group'>
                        <img src={queryIcon} className='query-icon'/>
                        <p className='folder-name'>Query</p>
                    </div>
                    <div className='query-group'>
                        <img src={queryIcon} className='query-icon'/>
                        <p className='folder-name'>Query</p>
                    </div>
                </div>
            </div>
        

        </div>
    );
}

export default FileView;

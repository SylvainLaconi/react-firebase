import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import UpdateDelete from './UpdateDelete';

const Read = () => {
    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
        const quotesDB = firebase.database().ref("quotesDB");

        quotesDB.on("value", (snapshot) => {
            const data = snapshot.val();
            //tranformer data en tableau exploitable
            let list = [];
            for (let id in data) {
                list.push({id, ...data[id]})
            }
            setQuoteList(list);
        })
    }, [])

    return (
        <div>
            <ul>
                {quoteList && quoteList.map((item) => 
                    <UpdateDelete key={item.id} item={item}/>
                )}
            </ul>
            
        </div>
    );
};

export default Read;
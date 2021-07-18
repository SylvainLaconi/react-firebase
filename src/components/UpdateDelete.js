import React, { useContext, useState } from 'react';
import firebase from "../utils/firebaseConfig";
import { UidContext } from '../UidContext';

const UpdateDelete = ({ item }) => {
    const [update, setUpdate] = useState(false);
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);
    const uid = useContext(UidContext);

    const authorCheck = () => {
        if (item.uid === uid) {
            return true
        } else {
            return false;
        }
    }

    const updateQuote = () => {
        let quote = firebase.database().ref("quotesDB").child(item.id);

        if (authorUpdate !== null) {
            quote.update({
                author: authorUpdate,
            })
        }
        if (textUpdate !== null) {
            quote.update({
                    text: textUpdate,
            })
        }
        setUpdate(false);
    }

    const deleteQuote = () => {
        let quote = firebase.database().ref("quotesDB").child(item.id);

        quote.remove();
    }

    authorCheck();
    return (
        <li>{!update && (
            <>
                <div className="quote">
                    <p>"{item.text}"</p>
                    <h6>{item.author}</h6>
                    {authorCheck() && (
                        <div>
                    <button onClick={() => setUpdate(!update)}>Update</button>
                    <button onClick={deleteQuote}>Delete</button>
                    </div>
                    )}
                </div>
            </>
        )
        }
            {
                update && (
                    <div>
                        <textarea
                            defaultValue={item.text}
                            onChange={(e) => setTextUpdate(e.target.value)}/>
                        <input
                            type="text"
                            defaultValue={item.author}
                            onChange={(e) => setAuthorUpdate(e.target.value)} />
                        <button onClick={updateQuote}>Validate</button>
                    </div>
                )
        }
            
        </li>
    );
};

export default UpdateDelete;
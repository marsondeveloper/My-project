import React, {useState, useEffect} from 'react';



const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {

        setStatus(props.status)
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true);
    };

   const deactivatedEditMode = () => {
       setEditMode(false);
       props.updateStatus(status);
    };

   const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    };

    return (
        <div style={{marginBottom: 40}}>
            {!editMode &&
            <div>
                <span  onDoubleClick={activatedEditMode}><h2>{props.status || "----"}</h2></span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true}  onBlur={deactivatedEditMode}
                  value={status} />
            </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;
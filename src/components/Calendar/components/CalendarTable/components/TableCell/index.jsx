import React from 'react'

export default ({ date, month, year, isDisabled = false }) => {
    let style = {
        color: isDisabled ? '#888' : '#000',
        backgroundColor: isDisabled ? '#fafafa' : '#fff'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', ...style }}>
            <p>{date}</p>
            <div>
                {/* Events go here! */}
            </div>
        </div>
    )
}
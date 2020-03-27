import React from 'react'

export const AlertTemplateComponent = ({ style, options, message, close }) => {
    const basic = {
        height: 50,
        width: '90vw',
        margin: '0px 20px 20px 20px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 4,
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
    }

    const info = {
        backgroundColor: '#3f51b5',
    }

    const success = {
        backgroundColor: '#32a852',
    }

    const error = {
        backgroundColor: '#f75b43',
    }

    const messageStyle = {
        color: 'white',
        fontSize: 25,
        marginLeft: 20
    }

    const getSpecifiedStyle = () => {
        switch (options.type) {
            case 'info': return info
            case 'error': return error
            case 'success': return success
        }
    }

    return (
        <div>
            <div style={{...basic, ...getSpecifiedStyle()}}>
                <p style={messageStyle}>
                    {message}
                </p>
            </div>
        </div>
    )
}
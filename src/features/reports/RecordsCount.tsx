import React from 'react'

interface IProps {
    recordCount: number
  }

const RecordsCount: React.FC<IProps> = ({
    recordCount
  }) => {  
    return (
        <div style={{marginTop: '1em'}}>
            <h5>{recordCount} records found.</h5>
        </div>
    )
}

export default RecordsCount

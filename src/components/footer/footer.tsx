import React from 'react'
import './footer.css'

const Footer: React.FC = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <p>
          &copy; Copyrights <strong>Malgin Vadim</strong>. All Rights Reserved
        </p>
        <span> Created with Malgin Vadim template by</span>
        <a href="http://мальгин.рф/"> Malgin Vadim</a>
      </div>
    </div>
  )
}

export default Footer

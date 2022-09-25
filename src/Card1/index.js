import './index.css'
const Card1 = () =>(
    <div className="card-container">
        <div className='get-ready'>
        <div>
        <h1>Get Ready to be a Global CA</h1>
        <p className='para'>Acquire the ACCA qualification to join the league of Global Accounting & Finance Professionals</p>
        </div>
        <div className='btn-container'>
        <button className='download-btn'>Download Brochure</button>
        <img src = "https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png" alt = "Acca" className='acca-img'/>
        </div>
        
        </div>
        <form className='form-container'>
            <p className='aspiring'>Aspiring to be an ACCA? Get in touch with us!</p>
            <input placeholder='Email ID' className='e-mail'/> <br/>
            <input placeholder='Phone Number' className='e-mail'/>
            <button className='request-btn'>Request Call Back</button>

        </form>
    </div>
    

)
export default Card1

import './index.css'

const Learn = () =>(

    <div>
        <h1>What will you Learn in ACCA?</h1>
        <div className='dark-one'></div>
        <div className='learn-container'>
        <div className="learn-cont">
            <div className='knowladge-level'>Knowladge Level</div>
        <div className='learn-enroll-cont'>
            <div className='learn-ul'>
                <li className='learn-li'>Business and Technology (BT)</li>
                <li className='learn-li'>Management Accounting (MA)</li>
                <li className='learn-li'>Financial Accounting (FA)</li>
            </div>
            <button className='enroll-now'>Enroll Now</button>
            </div>
        </div>

        <div className="learn-cont">
            <div className='knowladge-level'>Skill Level</div>
            <div className='skills'>
            <ul className='learn-ul'>
                <li className='learn-li'>Corporate and Business Law (LW)</li>
                <li className='learn-li'>Performance Management (PM)</li>
                <li className='learn-li'>Taxation (TX)</li>
                <li className='learn-li'>Financial Reporting (FR)</li>
                <li className='learn-li'>Audit and Assurance (AA)</li>
                <li className='learn-li'>Financial Management (FM)</li>
            </ul>
            <div>
            <button className='enroll-now'>Enroll Now</button>
            </div>
            </div>
        </div>

        <div className="learn-cont">
            <div className='knowladge-level'>Professional Level</div>
            <ul className='learn-ul'>
                <p className='Compulsory'>Compulsory</p>
                <li className='learn-li'>SBL - Strategic Business Leader</li>
                <li className='learn-li'>SBR - Strategic Business Reporting</li>
            </ul>
            <ul className='learn-ul'>
                <p className='Compulsory'>Two out of the following</p>
                <li className='learn-li'>Advanced Financial Management (AFM)</li>
                <li className='learn-li'>Advanced Performance Management (APM)</li>
                <li className='learn-li'>Advanced Taxation (ATX)</li>
                <li className='learn-li'>Advanced Audit and Assurance (AAA)</li>
            </ul>
            <button className='enroll-now'>Enroll Now</button>
        </div>

        </div>

    </div>

)

export default Learn
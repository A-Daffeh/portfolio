import { FiPhone, FiMail, FiMapPin, FiDownload } from "react-icons/fi";

const PersonalInfo = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <FiPhone className="info-icon" /> <span><strong className="skillset">Phone:</strong> (206) 771-2050</span>
                    </div>

                    <div>
                        <FiMail className="info-icon" /> <span><strong className="skillset">Email:</strong> adamadaffeh7@gmail.com</span>
                    </div>

                    <div>
                        <FiMapPin className="info-icon" /> <span><strong className="skillset">Address:</strong> 14912 16th Pl W, Lynnwood, WA, USA</span>
                    </div>
                    <div className="download-resume">
                        <FiDownload className="me-2" />Download Resume
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default PersonalInfo;
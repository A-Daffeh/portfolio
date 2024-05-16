import { FiPhone, FiMail, FiMapPin, FiDownload } from "react-icons/fi";
import resumeDocument from '../assets/DAFFEH_ADAMA-Resume.doc';

const PersonalInfo = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <FiPhone className="info-icon" /> <span><strong className="skillset">Phone:</strong> +1 (206) 771-2050</span>
                </div>

                <div>
                    <FiMail className="info-icon" /> <span><strong className="skillset">Email:</strong> adamadaffeh7@gmail.com</span>
                </div>

                <div>
                    <FiMapPin className="info-icon" /> <span><strong className="skillset">Address:</strong> 14912 16th Pl W, Lynnwood, WA, USA</span>
                </div>
                <div className="download-resume">
                    <a href={resumeDocument} download="Resume_Adamadaffeh.docx">
                    <FiDownload className="me-2" />Resume
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default PersonalInfo;
import { FiPhone, FiMail, FiMapPin, FiDownload } from "react-icons/fi";
import resumeDocument from '../assets/DAFFEH_ADAMA-Resume.doc';

const PersonalInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <FiPhone className="info-icon" /> <span><strong className="skillset">Phone:</strong> +1 (206) 771-2050</span>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <FiMail className="info-icon" /> <span><strong className="skillset">Email:</strong> adamadaffeh7@gmail.com</span>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <FiMapPin className="info-icon" /> <span><strong className="skillset">Address:</strong> 14912 16th Pl W, Lynnwood, WA, USA</span>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="download-resume">
            <a href={resumeDocument} download="Resume_Adamadaffeh.docx">
              <FiDownload className="me-2" />Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

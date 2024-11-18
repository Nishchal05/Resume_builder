import React, { useContext, useState } from 'react';
import { TemplateExample } from '../TemplateExample/TemplateExample';
import "./ResumeBody.css";
import { useNavigate } from 'react-router-dom';
import { Selector } from '../../SelectorTemplate';
import { MatcherContext } from '../../Login'; 

export const ResumeBody = () => {
    const { match } = useContext(MatcherContext);
    const navigate = useNavigate();
    const { setSelectedTemplate } = useContext(Selector);
    const [content, setContent] = useState(4);

    const handleTemplateSelect = (templateId) => {
            setSelectedTemplate(templateId);
            navigate("/Templatecontainer");
    };

    return (
        <main>
            <section className='Resumebody'>
                <div className='resume-tag'>
                    <h1><span>E</span>levate <span>Y</span>our <span>C</span>areer <span>w</span>ith a <span>W</span>inning <span>R</span>esume</h1>
                    <p>Your resume is your first impression. Make it count with our user-friendly builder, designed to help you create a compelling and effective resume effortlessly.</p>
                    <a href='#build'><div className='Build'>Build Your Resume</div></a>
                </div>
            </section>
            <section className='SelectTemplate'>
                <h1>Select Your <span>Template</span>:-</h1>
                <div className='Templates' id='build'>
                    {TemplateExample.slice(0, content).map((val, index) => (
                        <div key={val.Id} onClick={() => handleTemplateSelect(val.Id)}>
                            <img src={val.Template} alt={`Template ${index + 1}`} height={300} />
                            <div className='Templateselction'>Template {index + 1}</div>
                        </div>
                    ))}
                </div>
                <div onClick={() => setContent(content + 4)} className='ViewMore'>
                    <h3>view more...</h3>
                </div>
            </section>
        </main>
    );
};

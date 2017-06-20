import React from 'react';
import { NavLink } from 'react-router-dom';

// ResultInfo
class ResultInfo extends React.Component {

  render(){
    return(
      <div id="result-report" className="box rounded">
        <ul className="info-header row clear rounded-top">
          <li className="col">Үр дүн: <span className="green">45% - хуулбар</span></li>
          <li className="col">Өгүүлбэрийн илэрц: <span>17/8</span></li>
          <li className="col">Хайлтын эх сурвалж:  <span>Мэдээллийн сан</span></li>
          <li className="col border-right-0">Дугаар:  <span>012938120938</span></li>
        </ul>
        <div className="p-5">
          <div className="text-result text-muted">
            <span>This "translation" would likely be plagiarism.</span> <span>In academics, most researchers have a way to write and express ideas, independently of their writing language.</span> Someone reading your paper, who is knowledgeable in your field (so most colleagues in your field), is likely to find the link between your 'translated ideas' from the original, with a resulting potential backfire on you, which would be a possibility even much later.
            For example, a case along the lines of your was discussed here, Further, when you submit your manuscript, some institutions, by default (mine is doing it), use commercial plagiarism detection software. <span>If I created this type of software, I would include features to detect translations and plagiarism.</span>
            Second question: Please see the previous answer.
            Third question: In my thesis there is a load of equations. I had some specificity in a context that required changing most variable names. But the meaning of the terms and what the equation does will of course not change the outcome of the equation (it is expected).<span> Further, anyone reading your paper will guess, unless you are widely known to have developed yourself many of those equations, that you are a fraud, this without a software detecting plagiarism.</span>
            <span>This "translation" would likely be plagiarism.</span> <span>In academics, most researchers have a way to write and express ideas, independently of their writing language.</span> Someone reading your paper, who is knowledgeable in your field (so most colleagues in your field), is likely to find the link between your 'translated ideas' from the original, with a resulting potential backfire on you, which would be a possibility even much later.
            For example, a case along the lines of your was discussed here, Further, when you submit your manuscript, some institutions, by default (mine is doing it), use commercial plagiarism detection software. <span>If I created this type of software, I would include features to detect translations and plagiarism.</span>
            Second question: Please see the previous answer.
            Third question: In my thesis there is a load of equations. I had some specificity in a context that required changing most variable names. But the meaning of the terms and what the equation does will of course not change the outcome of the equation (it is expected).<span> Further, anyone reading your paper will guess, unless you are widely known to have developed yourself many of those equations, that you are a fraud, this without a software detecting plagiarism.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultInfo
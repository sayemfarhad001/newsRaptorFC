import React, {useEffect} from "react";

const About = (props) => {
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
  }

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(()=>{
    document.title = `${capitalize(props.category)} - NewsRaptor`;
    
    props.setProgress(50);
    setTimeout(()=>{
      props.setProgress(100);
    }, 200)
  }, [])

  return (
    <div className="container" style={{marginTop: "90px" }}
    >
      <h1 className="container my-3 text-center" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        NewsRaptor - {capitalize(props.category)} Us
        </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Get the latest news</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our tool offers a dynamic news feed with features such as infinite scroll, loading bar and dark mode. The exclusive news are categorized in the navbar providing links to the news detail.      
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Enjoy full access to our text analysis tool at no cost. We believe in empowering everyone with the resources to refine their writing without any financial barriers. Start improving your text today without any hidden fees or subscriptions.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Our tool is designed to work seamlessly across all major web browsers. Whether you’re using Chrome, Firefox, Safari, or Edge, you’ll experience smooth and efficient text analysis. No need for additional software—just open your browser and get started.
            </div>
          </div>
        </div>
      </div>
    </div>
  )   
}

export default About;
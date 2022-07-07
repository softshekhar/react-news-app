import React from 'react';
import './NewsCard.css';

class NewsCard extends React.Component {

    render() {
        var data = this.props.data;

        return (
            <div className="card-container">
                <a href={data["url"]} target="blank" className="card-link">
                    <div className="card-content">
                        <h3 className="card-header">{data["title"]}</h3>
                        <span className="sub-text">{data["byline"]}</span> : <span
                        className="sub-text">{data["published_date"]}</span>
                    </div>
                    <div className="card-image"
                         style={{backgroundImage: "url(" + (data["multimedia"] ? data["multimedia"][2]["url"] : "") + ")"}}></div>
                </a>
            </div>
        );
    }
}

export default NewsCard;
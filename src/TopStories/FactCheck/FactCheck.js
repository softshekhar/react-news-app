import React from 'react';
import './FactCheck.css';
import '../../config';
import config from "../../config";

class FactCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isDataLoading: false
        };
    }

    componentDidMount() {
        this.setState({
            isDataLoading: true
        });
        const newsApiUrl = `${config.newsApiUrlRoot}/sundayreview.json?api-key=${config.newsApiKey}`;
        const newsPromise = fetch(newsApiUrl);
        newsPromise.then(response => {
            var bodyPromise = response.json();
            bodyPromise.then(data => {
                this.setState({
                    news: data["results"],
                    isDataLoading: false
                });
            });
        });
    }

    render() {
        return (
            <div className="fact-container">
                <h4>Sunday Review</h4>
                {
                    this.state.isDataLoading ?
                        (<div>News is loading....</div>) :
                        this.state.news.map((data, index) => {
                            return (
                                <a href={data["url"]} target="blank" key={index} className="fact-link">
                                    <div className="fact-title">{data["title"]}</div>
                                    <div className="fact-source">{data["byline"]}</div>
                                </a>
                            );
                        })
                }
            </div>
        );
    }
}

export default FactCheck;
import React from 'react';
import './TopStories.css';
import '../config';

import NewsCard from '../NewsCard/NewsCard';
import FactCheck from './FactCheck/FactCheck';
import config from "../config";

class TopStories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isDataLoading: false
        }
    }

    componentDidMount(){
        this.setState({
            isDataLoading: true
        });
        const newsApiUrl = `${config.newsApiUrlRoot}/home.json?api-key=${config.newsApiKey}`;
        const newsPromise = fetch(newsApiUrl);
        newsPromise.then(response => {
            const bodyPromise = response.json();
            bodyPromise.then(data => {
                this.setState({
                    news: data["results"],
                    isDataLoading: false
                });
            });
        });
    }

    render(){
        return (
            <div className="top-stories-container">
                <div className="stories">
                    <h3>Headlines</h3>
                    {
                        this.state.isDataLoading ? 
                        (<div>News is loading....</div>) :
                        (this.state.news.map((item) => {
                            return <NewsCard key={item["url"]} data={item} />
                        }))
                    }
                </div>
                <div className="side-bar">
                    <FactCheck />
                </div>
            </div>
        );
    }
}

export default TopStories;

// 